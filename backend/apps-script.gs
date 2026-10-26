// Google Apps Script: paste into a Google Sheet's Extensions > Apps Script.
// Sheet tab "Responses" gets columns: time, result, name, year.
const SHEET = "Responses";

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const d = JSON.parse(e.postData.contents);
    const sh = SpreadsheetApp.getActive().getSheetByName(SHEET) || SpreadsheetApp.getActive().insertSheet(SHEET);
    sh.appendRow([new Date(), String(d.result || "").slice(0, 20), String(d.name || "").slice(0, 30), String(d.year || "").slice(0, 20)]);
    return ContentService.createTextOutput("ok");
  } finally {
    lock.releaseLock();
  }
}

function doGet() {
  const sh = SpreadsheetApp.getActive().getSheetByName(SHEET);
  const rows = sh && sh.getLastRow() > 0 ? sh.getRange(1, 1, sh.getLastRow(), 4).getValues() : [];
  const counts = {};
  rows.forEach((r) => { counts[r[1]] = (counts[r[1]] || 0) + 1; });
  const recent = rows.slice(-5).reverse().map((r) => r[2]);
  return ContentService.createTextOutput(JSON.stringify({ counts, recent })).setMimeType(ContentService.MimeType.JSON);
}
