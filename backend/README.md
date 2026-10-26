# Capture poll answers into a Google Sheet

The quiz sends one anonymous row per student (time plus the option each student picked for each question).

## First time
1. Open the Google Sheet. Extensions > Apps Script. Paste `apps-script.gs`, save.
2. Deploy > New deployment > Web app. Execute as **Me**, access **Anyone**. Copy the Web app URL into `config.js` as `ENDPOINT`.

## After changing the script (URL stays the same)
Deploy > Manage deployments > pencil icon > Version: **New version** > Deploy.

## Rehearse and run
- No backend needed to rehearse: open `results.html?demo`.
- Big screen: open `results.html`. All 8 questions show on one screen. Press R to reveal the correct answers on questions 1 to 5, or click one question.
- Before the real session: clear all rows in the "Poll" tab (the count comes from it).
