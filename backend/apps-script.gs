// Google Apps Script: paste into a Google Sheet's Extensions > Apps Script.
// Tab "Poll" gets one anonymous row per student: time, then the chosen option (0-3) for each question.
const SHEET = "Poll";
const QUESTIONS = 8;

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const d = JSON.parse(e.postData.contents);
    const sh = SpreadsheetApp.getActive().getSheetByName(SHEET) || SpreadsheetApp.getActive().insertSheet(SHEET);
    const row = [new Date()];
    for (let i = 0; i < QUESTIONS; i++) {
      const v = Number((d.answers || [])[i]);
      row.push(Number.isInteger(v) && v >= 0 && v <= 3 ? v : "");
    }
    sh.appendRow(row);
    return ContentService.createTextOutput("ok");
  } finally {
    lock.releaseLock();
  }
}

function doGet() {
  const sh = SpreadsheetApp.getActive().getSheetByName(SHEET);
  const rows = sh && sh.getLastRow() > 0 ? sh.getRange(1, 1, sh.getLastRow(), QUESTIONS + 1).getValues() : [];
  const qcounts = Array.from({ length: QUESTIONS }, () => [0, 0, 0, 0]);
  let total = 0;
  rows.forEach((r) => {
    if (!(r[0] instanceof Date)) return;
    total++;
    for (let q = 0; q < QUESTIONS; q++) {
      const v = r[q + 1];
      if (v !== "" && qcounts[q][v] !== undefined) qcounts[q][v]++;
    }
  });
  return ContentService.createTextOutput(JSON.stringify({ total, qcounts })).setMimeType(ContentService.MimeType.JSON);
}
