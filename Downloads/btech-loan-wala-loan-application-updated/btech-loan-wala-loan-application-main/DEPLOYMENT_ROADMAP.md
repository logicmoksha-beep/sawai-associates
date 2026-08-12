# 🚀 Google Sheets Integration — Step-by-Step Deployment Roadmap

Follow these steps **in order**. Each step tells you exactly what to do, what to name things, and what to paste.

---

## STEP 1 — Open Google Apps Script

1. Go to **https://script.google.com**
2. Sign in with the **same Google account** that owns your Google Sheet (your sheet: `1KwAI9b8Kvgx_t2V7Tpc4PZJjxkhnGZTZ84a0MMTEsdQ`)
3. Click the **+ New project** button (top-left)

---

## STEP 2 — Name your project

1. Click the project name in the top-left (it says "Untitled project")
2. Rename it to: **`BTech loan_wala - Webhook`**
3. Press **Enter**

---

## STEP 3 — Delete the default code

1. In the code editor, you'll see a default function:
   ```javascript
   function myFunction() {
   }
   ```
2. **Select all** (Ctrl+A) and **delete** it

---

## STEP 4 — Paste this ENTIRE code

Copy **everything** below and paste it into the editor:

  ```javascript
  /**
   * ============================================================
   *  BTech loan_wala — Google Apps Script Web App
   *  Receives form submissions from the React frontend and
   *  appends them as new rows in Google Sheets.
   * ============================================================
   */

  // ------------------------------------------------------------------
  // CONFIGURATION — Edit these values
  // ------------------------------------------------------------------

  // The ID of the Google Sheet. Find it in the sheet URL:
  // https://docs.google.com/spreadsheets/d/<THIS_IS_THE_ID>/edit
  const SPREADSHEET_ID = '1KwAI9b8Kvgx_t2V7Tpc4PZJjxkhnGZTZ84a0MMTEsdQ';

  // The name of the tab/sheet inside the spreadsheet.
  const SHEET_NAME = 'LoanApplications';

  // A simple shared secret. The React frontend sends this in the
  // request body. It is NOT a password — it just filters out random
  // bot traffic. Change this to any random string you like.
  const SHARED_SECRET = 'YOUR_RANDOM_SHARED_SECRET_HERE';

  // ------------------------------------------------------------------
  // WEB APP ENTRY POINT (doPost)
  // ------------------------------------------------------------------

  /**
   * Handles POST requests from the React frontend.
   * Expects a JSON body like:
   *   { "secret": "...", "type": "loan-application", "data": { ... } }
   */
  function doPost(e) {
    try {
      // --- 1. Parse the incoming request body ---
      const body = JSON.parse(e.postData.contents);

      // --- 2. Verify the shared secret (basic bot filter) ---
      if (body.secret !== SHARED_SECRET) {
        return jsonResponse_(403, { ok: false, message: 'Unauthorized request.' });
      }

      // --- 3. Validate required fields ---
      const type = body.type || '';
      const data = body.data || {};

      if (!type) {
        return jsonResponse_(400, { ok: false, message: 'Missing submission type.' });
      }

      // --- 4. Build the row based on submission type ---
      const row = buildRow_(type, data);

      if (!row) {
        return jsonResponse_(400, { ok: false, message: 'Invalid submission type or missing data.' });
      }

      // --- 5. Append the row to the sheet ---
      const sheet = getSheet_();
      sheet.appendRow(row);

      // --- 6. Return success ---
      return jsonResponse_(200, {
        ok: true,
        message: 'Your submission has been recorded successfully.',
        rowNumber: sheet.getLastRow()
      });

    } catch (err) {
      console.error('Error processing submission:', err);
      return jsonResponse_(500, {
        ok: false,
        message: 'An unexpected error occurred. Please try again.'
      });
    }
  }

  // ------------------------------------------------------------------
  // ROW BUILDERS — One per form type
  // ------------------------------------------------------------------

  /**
   * Builds a spreadsheet row for a given submission type.
   * Returns null if the type is unknown.
   *
   * Recommended sheet columns (14):
   *   A  Timestamp | B  Type | C  Full Name | D  Mobile
   *   E  Email     | F  Loan Type | G  Loan Amount | H  Employment Type
   *   I  Monthly Income | J  City | K  Subject | L  Message
   *   M  Consent   | N  Status
   */
  function buildRow_(type, data) {
    const timestamp = new Date();

    switch (type) {
      case 'loan-application':
        return [
          timestamp,                    // A: Timestamp
          'Loan Application',           // B: Type
          data.fullName || '',          // C: Full Name
          data.mobile || '',            // D: Mobile
          data.email || '',             // E: Email
          data.loanType || '',          // F: Loan Type
          data.amount || '',            // G: Loan Amount
          data.employment || '',        // H: Employment Type
          data.income || '',            // I: Monthly Income
          data.city || '',              // J: City
          '',                           // K: Subject
          data.message || '',           // L: Message
          data.consent ? 'Yes' : 'No',  // M: Consent
          'New'                         // N: Status
        ];

      case 'eligibility':
        return [
          timestamp,                    // A: Timestamp
          'Eligibility Check',          // B: Type
          data.fullName || '',          // C: Full Name
          data.mobile || '',            // D: Mobile
          data.email || '',             // E: Email
          data.loanType || '',          // F: Loan Type
          data.amount || '',            // G: Loan Amount
          data.employment || '',        // H: Employment Type
          data.income || '',            // I: Monthly Income
          data.city || '',              // J: City
          '',                           // K: Subject
          '',                           // L: Message
          '',                           // M: Consent
          'New'                         // N: Status
        ];

      case 'contact':
        return [
          timestamp,                    // A: Timestamp
          'Contact Message',            // B: Type
          data.fullName || '',          // C: Full Name
          data.mobile || '',            // D: Mobile
          data.email || '',             // E: Email
          '',                           // F: Loan Type
          '',                           // G: Loan Amount
          '',                           // H: Employment Type
          '',                           // I: Monthly Income
          '',                           // J: City
          data.subject || '',           // K: Subject
          data.message || '',           // L: Message
          '',                           // M: Consent
          'New'                         // N: Status
        ];

      default:
        return null;
    }
  }

  // ------------------------------------------------------------------
  // HELPERS
  // ------------------------------------------------------------------

  /** Returns the target sheet, creating it if it doesn't exist. */
  function getSheet_() {
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    let sheet = ss.getSheetByName(SHEET_NAME);

    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      // Add header row when creating the sheet for the first time
      sheet.appendRow([
        'Timestamp', 'Type', 'Full Name', 'Mobile', 'Email',
        'Loan Type', 'Loan Amount', 'Employment Type', 'Monthly Income',
        'City', 'Subject', 'Message', 'Consent', 'Status'
      ]);
      // Freeze the header row
      sheet.setFrozenRows(1);
      // Bold the header
      sheet.getRange(1, 1, 1, 14).setFontWeight('bold');
    }

    return sheet;
  }

  /**
   * Returns a JSON response.
   * Google Apps Script's ContentService automatically handles CORS
   * for web app deployments — no manual headers needed.
   */
  function jsonResponse_(statusCode, payload) {
    return ContentService
      .createTextOutput(JSON.stringify(payload))
      .setMimeType(ContentService.MimeType.JSON);
  }

  // ------------------------------------------------------------------
  // OPTIONAL: doGet — Simple health check
  // ------------------------------------------------------------------

  /**
   * A simple GET endpoint so you can verify the web app is live.
   * Open the deployed URL in a browser — you should see "OK".
   */
  function doGet() {
    return ContentService
      .createTextOutput('OK')
      .setMimeType(ContentService.MimeType.TEXT);
  }
  ```

---

## STEP 5 — Change the SHARED_SECRET

In the pasted code, find this line near the top:

```javascript
const SHARED_SECRET = 'YOUR_RANDOM_SHARED_SECRET_HERE';
```

Replace `YOUR_RANDOM_SHARED_SECRET_HERE` with a random string. For example:

```javascript
const SHARED_SECRET = 'bTechLoan9xQ2vL8';
```

> ⚠️ **Remember this string** — you'll put the **same value** in your `.env` file later.

---

## STEP 6 — Save the script

1. Press **Ctrl+S** (or click the 💾 Save icon)

---

## STEP 7 — Deploy as Web App

1. Click **Deploy** (top-right) → **New deployment**
2. Click the **gear icon ⚙️** (top-right of the dialog)
3. Select type: **Web app**
4. Fill in:
   | Setting          | Value                          |
   |------------------|--------------------------------|
   | Description      | `Loan application webhook`     |
   | Execute as       | **Me** (your account)          |
   | Who has access   | **Anyone**                     |
5. Click **Deploy**
6. Google will show an **authorization screen**:
   - Click **Review permissions**
   - Choose your account
   - Click **Advanced** → **Go to BTech loan_wala - Webhook (unsafe)**
   - Click **Allow**
7. After deployment, you'll see a **Web App URL** that looks like:
   ```
   https://script.google.com/macros/s/AKfycbwABC123.../exec
   ```
8. **Copy this URL** — this is your `VITE_SHEETS_WEB_APP_URL`

---

## STEP 8 — Verify the endpoint is live

1. Paste the `/exec` URL into a browser and press Enter
2. You should see the text: **`OK`**
3. If you see that, your webhook is working ✅

---

## STEP 9 — Update `.env` in your React project

Open **`btech-loan-wala-loan-frontend/.env`** in VS Code and set the 2 values:

```env
VITE_SHEETS_WEB_APP_URL=https://script.google.com/macros/s/AKfycbwABC123.../exec
VITE_SHEETS_SHARED_SECRET=bTechLoan9xQ2vL8
```

- `VITE_SHEETS_WEB_APP_URL` = the `/exec` URL from Step 7.8
- `VITE_SHEETS_SHARED_SECRET` = the secret from Step 5 (must be identical)

---

## STEP 10 — Restart the dev server

```bash
cd btech-loan-wala-loan-frontend
npm run dev
```

> Vite reads `.env` at startup — you **must** restart after changing it.

---

## STEP 11 — Test the full flow

1. Open the app (e.g. http://localhost:5173)
2. Go to **Apply Now** (/apply-now)
3. Fill the form and submit
4. You should see the success message ✅
5. Open your Google Sheet: `https://docs.google.com/spreadsheets/d/1KwAI9b8Kvgx_t2V7Tpc4PZJjxkhnGZTZ84a0MMTEsdQ`
6. You'll see a tab **`LoanApplications`** with your row added ✅

---

## STEP 12 — Export to Excel (for internal team)

Your Google Sheet = your Excel data source. To download as Excel:
- **File → Download → Microsoft Excel (.xlsx)**

---

## Quick Reference — Files

| File | Purpose |
|------|---------|
| `google-apps-script/Code.gs` | The script you paste in STEP 4 |
| `.env` | Where you put the URL + secret (STEP 9) |
| `src/services/sheetsService.js` | React code that sends form data to your webhook |
| `DEPLOYMENT_ROADMAP.md` | This guide |

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| Seeing `OK` in browser but app says "Unauthorized request" | `.env` secret ≠ `Code.gs` secret. Make them identical. |
| App says "Simulated success" | `VITE_SHEETS_WEB_APP_URL` is empty or placeholder — did you set it correctly? |
| No tab created in sheet | `SPREADSHEET_ID` in `Code.gs` is wrong — verify it is `1KwAI9b8Kvgx_t2V7Tpc4PZJjxkhnGZTZ84a0MMTEsdQ` |
| CORS error | Ensure deployment type is **Web app** (not API Executable) and access is **Anyone** |