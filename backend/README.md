# Capture poll answers into a Google Sheet

The quiz sends one anonymous row per student (time plus the option each student picked for each question).

## First time
1. Open the Google Sheet. Extensions > Apps Script. Paste `apps-script.gs`, save.
2. Deploy > New deployment > Web app. Execute as **Me**, access **Anyone**. Copy the Web app URL into `config.js` as `ENDPOINT`.

## After changing the script (URL stays the same)
Deploy > Manage deployments > pencil icon > Version: **New version** > Deploy.

## Rehearse and run
- No backend needed to rehearse: open `results.html?demo`.
- Big screen: open `results.html`. Left and right arrow keys change the question. Press R to reveal the correct answer on basics questions.
- Before the real session: clear all rows in the "Poll" tab (the count comes from it).
