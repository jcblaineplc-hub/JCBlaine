# Netlify Forms → Google Sheets lead automation

Every submission to the Netlify forms **`expat-tax-guide`** and
**`ai-ready-law-firm-guide`** is appended as a row to the
**Lotus Bay Guide Leads** Google Sheet, so leads can be segmented by
interest level for follow-up email campaigns.

## How it works

1. A visitor submits a guide form on the site.
2. Netlify fires an **outgoing webhook** to GitHub's `repository_dispatch`
   endpoint (event type `netlify-form`).
3. The GitHub Action `.github/workflows/netlify-form-to-sheets.yml` runs
   `.github/scripts/append_lead.py`, which normalizes the fields and appends
   a row to the correct tab.

## Spreadsheet layout

One spreadsheet, two tabs:

| Tab | Source form |
| --- | --- |
| `expat-tax-guide` | `expat-tax-guide` |
| `ai-ready-law-firm` | `ai-ready-law-firm-guide` |

Each row (headers auto-created on first run):

| Timestamp | Form | First name | Last name | Email | Situation / Role | Consultation interest |
| --- | --- | --- | --- | --- | --- | --- |

- **Situation / Role** = the tax form's `situation` field, or the AI form's `role` field.
- **Consultation interest** = `Yes`/`No` from the tax form's `tax-consultation`
  checkbox or the AI form's `ai-readiness-briefing` checkbox.

Segment for campaigns by filtering **Consultation interest = Yes** (warm leads)
and/or by **Situation / Role**.

---

## One-time setup

### 1. Create a Google service account (free)

1. Go to <https://console.cloud.google.com/> and create (or pick) a project.
2. Enable the **Google Sheets API**:
   APIs & Services → Library → search "Google Sheets API" → Enable.
3. APIs & Services → Credentials → **Create credentials → Service account**.
   Give it a name (e.g. `lotusbay-leads`), then Create and Done.
4. Open the service account → **Keys** → Add key → **Create new key → JSON**.
   A `.json` file downloads. Keep it private.
5. Copy the service account's email address (looks like
   `lotusbay-leads@your-project.iam.gserviceaccount.com`).

### 2. Create and share the spreadsheet

1. Create a Google Sheet named **Lotus Bay Guide Leads** (the tabs and headers
   are auto-created by the Action on the first submission, so you can leave it
   as a blank sheet).
2. Click **Share** and give the service-account email **Editor** access.
3. Copy the spreadsheet ID from its URL:
   `https://docs.google.com/spreadsheets/d/`**`<THIS_IS_THE_ID>`**`/edit`.

### 3. Add GitHub repository secrets

In the repo: **Settings → Secrets and variables → Actions → New repository secret**.

| Secret name | Value |
| --- | --- |
| `GCP_SA_KEY` | The **entire contents** of the downloaded service-account JSON key file |
| `SHEETS_ID` | The spreadsheet ID from step 2 |

### 4. Create a GitHub personal access token (for Netlify to call GitHub)

1. GitHub → Settings → Developer settings → **Fine-grained tokens** →
   Generate new token.
2. Repository access: **Only select repositories** → `jcblaineplc-hub/JCBlaine`.
3. Permissions: **Contents → Read and write** (this covers `repository_dispatch`).
4. Generate and copy the token (starts with `github_pat_…`).

### 5. Connect Netlify submissions to GitHub

GitHub's dispatch endpoint needs an `Authorization` header and a JSON body,
which Netlify's basic outgoing webhook cannot send. This repo therefore ships
a **Netlify Function relay** that does it for you — the recommended path.

#### Option A — Netlify Function relay (recommended, already in this repo)

A ready-to-run relay is included at
`netlify/functions/submission-created.js`, and `netlify.toml` points Netlify at
the `netlify/functions` directory. Netlify automatically invokes the function
named `submission-created` on every verified form submission — so there is
**no webhook URL to configure in the UI**.

All you do:

1. Add the PAT as a Netlify environment variable:
   Site settings → **Environment variables** → add `GH_DISPATCH_TOKEN` = your
   fine-grained token from step 4.
2. Redeploy the site (a push already triggers this). The function is then live.

The relay only forwards the `expat-tax-guide` and `ai-ready-law-firm-guide`
forms and ignores anything else.

#### Option B — Zapier / Make catch hook (no code)

If you prefer not to use the function: create a Zap/Scenario with a
**Netlify → New Form Submission** trigger and a **Webhook (POST)** action to
`https://api.github.com/repos/jcblaineplc-hub/JCBlaine/dispatches` with header
`Authorization: Bearer <PAT>` and body
`{"event_type":"netlify-form","client_payload": <the submission JSON>}`.
Note: multi-step Zaps require a paid Zapier plan.

---

## Testing

- In the repo: **Actions → "Netlify form submission to Google Sheets" → Run
  workflow** (leave `sample = true`). This appends one sample row to the
  `expat-tax-guide` tab so you can confirm auth + append work end to end.
- Then submit a real form on the site and confirm a new row appears.
