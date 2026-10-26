# Capture quiz results into a Google Sheet (5 minutes)

1. Create a new Google Sheet. Name it "Career quiz results".
2. Extensions > Apps Script. Delete the sample code, paste `apps-script.gs`, save.
3. Deploy > New deployment > type **Web app**.
   - Execute as: **Me**
   - Who has access: **Anyone**
   - Deploy, authorise, copy the **Web app URL**.
4. Paste that URL into `config.js` as `ENDPOINT`, commit and push (the pipeline redeploys).
5. Test: take the quiz, press Submit, a new row appears in the sheet. Open `results.html` for the big-screen view.

Rehearse the big screen without any backend: open `results.html?demo`.

Notes
- Anyone with the quiz URL can submit, so treat the numbers as fun, not exact.
- The sheet stores only result, optional first name and optional year. Tell students that.
- If you change the Apps Script code later, use Deploy > Manage deployments > edit > new version, or the URL keeps serving the old code.
