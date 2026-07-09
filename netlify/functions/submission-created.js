// Netlify event function: fires automatically on every form submission.
//
// Netlify automatically invokes a function named "submission-created" whenever
// a verified form is submitted. This relay forwards the submission to GitHub's
// repository_dispatch
// endpoint so the "Netlify form submission to Google Sheets" Action can append
// the lead to the Lotus Bay Guide Leads spreadsheet.
//
// Required Netlify environment variable:
//   GH_DISPATCH_TOKEN  - a GitHub token with "Contents: read and write" on
//                        jcblaineplc-hub/JCBlaine
//
// No configuration in the Netlify UI is needed beyond the env var; Netlify
// auto-wires the "submission-created" event to this function.

const GH_OWNER = "jcblaineplc-hub";
const GH_REPO = "JCBlaine";
const EVENT_TYPE = "netlify-form";

// Only forward these forms to GitHub.
const ALLOWED_FORMS = new Set(["expat-tax-guide", "ai-ready-law-firm-guide"]);

exports.handler = async function (event) {
  const token = process.env.GH_DISPATCH_TOKEN;
  if (!token) {
    console.error("GH_DISPATCH_TOKEN is not set; cannot forward submission.");
    return { statusCode: 500, body: "Missing GH_DISPATCH_TOKEN" };
  }

  let submission;
  try {
    // Netlify wraps the submission under { payload: { ... } }.
    const body = JSON.parse(event.body || "{}");
    submission = body.payload || body;
  } catch (err) {
    console.error("Could not parse submission body:", err);
    return { statusCode: 400, body: "Invalid submission payload" };
  }

  const formName = submission.form_name || submission.formName || "";
  if (!ALLOWED_FORMS.has(formName)) {
    console.log(`Ignoring submission from form "${formName}".`);
    return { statusCode: 200, body: `Ignored form: ${formName}` };
  }

  const res = await fetch(
    `https://api.github.com/repos/${GH_OWNER}/${GH_REPO}/dispatches`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github+json",
        "Content-Type": "application/json",
        "User-Agent": "lotusbay-forms-relay",
        "X-GitHub-Api-Version": "2022-11-28",
      },
      body: JSON.stringify({
        event_type: EVENT_TYPE,
        client_payload: submission,
      }),
    }
  );

  if (res.status !== 204) {
    const text = await res.text();
    console.error(`GitHub dispatch failed (${res.status}): ${text}`);
    return { statusCode: 502, body: `GitHub dispatch failed: ${res.status}` };
  }

  console.log(`Forwarded "${formName}" submission to GitHub.`);
  return { statusCode: 200, body: "Forwarded to GitHub" };
};
