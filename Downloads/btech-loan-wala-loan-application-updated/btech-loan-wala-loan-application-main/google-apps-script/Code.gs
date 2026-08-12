const SPREADSHEET_ID = '1KwAI9b8Kvgx_t2V7Tpc4PZJjxkhnGZTZ84a0MMTEsdQ';
const SHEET_NAME = 'LoanApplications';

// IMPORTANT: This MUST be EXACTLY the same string as VITE_SHEETS_SHARED_SECRET
// in the frontend .env file. If they differ, requests are rejected.
const SHARED_SECRET = 'bTechLoan9xQ2vL8';

// Maps the loan-type ID sent by the frontend to a human-readable name.
// Used to auto-populate the Subject column so the team can see at a glance
// what the visitor came for (e.g. "Loan Enquiry - Personal Loan").
const LOAN_TYPE_NAMES = {
  'personal': 'Personal Loan',
  'home': 'Home Loan',
  'business': 'Business Loan',
  'lap': 'Loan Against Property',
  'new-car': 'New Car Loan',
  'home-bt': 'Home Loan Balance Transfer',
  'used-car': 'Used Car Loan',
  'project-funding': 'Project Funding'
};

/** Converts a loan-type ID into a readable name (falls back to the raw ID). */
function getLoanTypeName_(id) {
  if (!id) return '';
  return LOAN_TYPE_NAMES[id] || id;
}

function doGet() {
  return ContentService
    .createTextOutput('OK')
    .setMimeType(ContentService.MimeType.TEXT);
}

function doPost(e) {
  try {
    const body = JSON.parse(e.postData.contents);

    // --- Authorization: reject if the shared secret doesn't match ---
    if (body.secret !== SHARED_SECRET) {
      return jsonResponse_({
        ok: false,
        message: 'Unauthorized request.'
      });
    }

    const type = body.type || '';
    const data = body.data || {};

    const row = buildRow_(type, data);

    if (!row) {
      return jsonResponse_({
        ok: false,
        message: 'Invalid submission type.'
      });
    }

    const sheet = getSheet_();

    sheet.appendRow(row);

    return jsonResponse_({
      ok: true,
      message: 'Application submitted successfully.',
      rowNumber: sheet.getLastRow()
    });

  } catch (error) {
    console.error(error);

    return jsonResponse_({
      ok: false,
      message: error.toString()
    });
  }
}

function buildRow_(type, data) {
  const timestamp = new Date();

  switch (type) {

    case 'loan-application': {
      const loanName = getLoanTypeName_(data.loanType);
      return [
        timestamp,
        'Loan Application',
        data.fullName || '',
        data.mobile || '',
        data.email || '',
        data.loanType || '',
        data.amount || '',
        data.employment || '',
        data.income || '',
        data.city || '',
        loanName ? ('Loan Enquiry - ' + loanName) : 'Loan Enquiry',
        data.message || '',
        data.consent ? 'Yes' : 'No',
        'New'
      ];
    }

    case 'eligibility': {
      const loanName = getLoanTypeName_(data.loanType);
      return [
        timestamp,
        'Eligibility Check',
        data.fullName || '',
        data.mobile || '',
        data.email || '',
        data.loanType || '',
        data.amount || '',
        data.employment || '',
        data.income || '',
        data.city || '',
        loanName ? ('Eligibility Check - ' + loanName) : 'Eligibility Check',
        '',
        '',
        'New'
      ];
    }

    case 'contact':
      return [
        timestamp,
        'Contact Message',
        data.fullName || '',
        data.mobile || '',
        data.email || '',
        '',
        '',
        '',
        '',
        '',
        data.subject || 'Contact / General Enquiry',
        data.message || '',
        '',
        'New'
      ];

    default:
      return null;
  }
}

function getSheet_() {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);

  let sheet = ss.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);

    sheet.appendRow([
      'Timestamp',
      'Type',
      'Full Name',
      'Mobile',
      'Email',
      'Loan Type',
      'Loan Amount',
      'Employment Type',
      'Monthly Income',
      'City',
      'Subject',
      'Message',
      'Consent',
      'Status'
    ]);

    sheet.setFrozenRows(1);
  }

  return sheet;
}

function jsonResponse_(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}