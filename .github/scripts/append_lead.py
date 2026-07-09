#!/usr/bin/env python3
"""
Append a Netlify Forms submission to the "Lotus Bay Guide Leads" Google Sheet.

Handles two forms:
  - expat-tax-guide       -> tab "expat-tax-guide"
  - ai-ready-law-firm-guide -> tab "ai-ready-law-firm"

Each row is normalized to a common shape so leads can be segmented by
interest level for follow-up campaigns:

  Timestamp | Form | First name | Last name | Email | Situation / Role | Consultation interest

Environment:
  GCP_SA_KEY    JSON key of a Google service account with edit access to the sheet
  SHEETS_ID     spreadsheet ID of "Lotus Bay Guide Leads"
  EVENT_PAYLOAD github.event.client_payload as JSON (the Netlify submission)
  EVENT_NAME    github.event_name (repository_dispatch | workflow_dispatch)
  RUN_SAMPLE    "true" to use a built-in sample payload (manual test runs)
"""

import json
import os
import sys
from datetime import datetime, timezone

from google.oauth2 import service_account
from googleapiclient.discovery import build

SCOPES = ["https://www.googleapis.com/auth/spreadsheets"]

HEADERS = [
    "Timestamp",
    "Form",
    "First name",
    "Last name",
    "Email",
    "Situation / Role",
    "Consultation interest",
]

# Map each Netlify form name to a spreadsheet tab title.
FORM_TO_TAB = {
    "expat-tax-guide": "expat-tax-guide",
    "ai-ready-law-firm-guide": "ai-ready-law-firm",
}

SAMPLE_PAYLOAD = {
    "form_name": "expat-tax-guide",
    "data": {
        "first-name": "Sample",
        "last-name": "Lead",
        "email": "sample.lead@example.com",
        "situation": "Entrepreneur or business owner",
        "tax-consultation": "yes",
    },
    "created_at": datetime.now(timezone.utc).isoformat(),
}


def fail(msg: str) -> None:
    print(f"::error::{msg}")
    sys.exit(1)


def get_payload() -> dict:
    """Return the Netlify submission dict, or a sample for manual test runs."""
    event_name = os.environ.get("EVENT_NAME", "")
    raw = os.environ.get("EVENT_PAYLOAD", "").strip()

    if event_name == "workflow_dispatch" and os.environ.get("RUN_SAMPLE", "true") == "true":
        print("Using built-in sample payload (manual test run).")
        return SAMPLE_PAYLOAD

    if not raw or raw in ("null", "{}"):
        fail("No client_payload received from the Netlify webhook.")

    try:
        return json.loads(raw)
    except json.JSONDecodeError as e:
        fail(f"client_payload was not valid JSON: {e}")


def norm(payload: dict) -> tuple[str, list]:
    """
    Normalize a Netlify submission into (tab_title, row_values).

    Netlify's outgoing webhook posts the submission object. Field values live
    under `data`, and the form name under `form_name` (older payloads use
    `formName`). Field naming differs between the two forms, so both variants
    are checked.
    """
    form_name = payload.get("form_name") or payload.get("formName") or ""
    data = payload.get("data") or payload.get("payload", {}).get("data") or {}

    tab = FORM_TO_TAB.get(form_name)
    if not tab:
        fail(
            f"Unrecognized form '{form_name}'. "
            f"Expected one of: {', '.join(FORM_TO_TAB)}"
        )

    first = (data.get("first-name") or data.get("first_name") or "").strip()
    last = (data.get("last-name") or data.get("last_name") or "").strip()
    email = (data.get("email") or "").strip()

    # Tax guide uses "situation"; AI guide uses "role".
    situation = (data.get("situation") or data.get("role") or "").strip()

    # Consultation / briefing interest is a checkbox that is only present
    # (value "yes") when ticked.
    consult_raw = (
        data.get("tax-consultation")
        or data.get("ai-readiness-briefing")
        or data.get("consultation")
        or ""
    )
    consult = "Yes" if str(consult_raw).strip().lower() in ("yes", "true", "on", "1") else "No"

    ts = (
        payload.get("created_at")
        or payload.get("createdAt")
        or datetime.now(timezone.utc).isoformat()
    )

    return tab, [ts, form_name, first, last, email, situation, consult]


def get_service():
    key_raw = os.environ.get("GCP_SA_KEY", "").strip()
    if not key_raw:
        fail("GCP_SA_KEY secret is missing.")
    try:
        info = json.loads(key_raw)
    except json.JSONDecodeError as e:
        fail(f"GCP_SA_KEY is not valid JSON: {e}")
    creds = service_account.Credentials.from_service_account_info(info, scopes=SCOPES)
    return build("sheets", "v4", credentials=creds, cache_discovery=False)


def ensure_tab_with_headers(svc, sheet_id: str, tab: str) -> None:
    """Create the tab if it doesn't exist, and make sure row 1 has headers."""
    meta = svc.spreadsheets().get(spreadsheetId=sheet_id).execute()
    titles = [s["properties"]["title"] for s in meta.get("sheets", [])]

    if tab not in titles:
        svc.spreadsheets().batchUpdate(
            spreadsheetId=sheet_id,
            body={"requests": [{"addSheet": {"properties": {"title": tab}}}]},
        ).execute()
        print(f"Created missing tab '{tab}'.")

    # Check whether headers exist in row 1.
    row1 = (
        svc.spreadsheets()
        .values()
        .get(spreadsheetId=sheet_id, range=f"{tab}!A1:G1")
        .execute()
        .get("values", [])
    )
    if not row1 or not row1[0]:
        svc.spreadsheets().values().update(
            spreadsheetId=sheet_id,
            range=f"{tab}!A1",
            valueInputOption="USER_ENTERED",
            body={"values": [HEADERS]},
        ).execute()
        print(f"Wrote headers to '{tab}'.")


def main() -> None:
    sheet_id = os.environ.get("SHEETS_ID", "").strip()
    if not sheet_id:
        fail("SHEETS_ID secret is missing.")

    payload = get_payload()
    tab, row = norm(payload)

    svc = get_service()
    ensure_tab_with_headers(svc, sheet_id, tab)

    svc.spreadsheets().values().append(
        spreadsheetId=sheet_id,
        range=f"{tab}!A1",
        valueInputOption="USER_ENTERED",
        insertDataOption="INSERT_ROWS",
        body={"values": [row]},
    ).execute()

    print(f"Appended lead to '{tab}': {row}")


if __name__ == "__main__":
    main()
