# Career Quiz: Session 5 DevOps Live demo

A tiny static app ("Which IT Career Are You?") used as the live-deploy demo.
No build step, no dependencies, plain HTML/CSS/JS, so the pipeline is easy
to narrate and nothing can fail from a flaky install on venue wifi.

## Pre-day setup (do this before Oct 28, not on stage)

1. Create a new **public** GitHub repo (e.g. `career-quiz-demo`) under your account.
2. From this folder:
   ```bash
   cd demo/career-quiz
   git init
   git add .
   git commit -m "Initial career quiz"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```
3. In the repo on GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. Push once more (or re-run the workflow from the Actions tab) to trigger the first deploy. Confirm the Pages URL loads and the quiz works end to end.
5. Note the live URL, this is what the QR code on the "DevOps Live" slide should point to. Update the QR placeholder in the slide deck once you have it.
6. Do one full dry run of the on-stage script below, timed.

## On-stage script (Session 5, 2:15–3:00)

1. Show the already-deployed quiz running live on the projector (pulled up on a phone too, if possible).
2. Open `quiz-data.js` on your laptop, screen projected. Make ONE small, visible change in front of the room, e.g. tweak a question's wording, or add a new answer option. Narrate what you're doing as you type.
3. Commit and push:
   ```bash
   git add -A && git commit -m "Live tweak from the room" && git push
   ```
4. Immediately switch to the repo's **Actions** tab, the workflow run appears within seconds. Narrate each step as it goes green: tests, then deploy.
5. Once deploy finishes (~30–60s), reload the live Pages URL on screen, the change is there. This is the "0 to live app on the internet" wow moment from the plan.
6. **Break it live:** open `break-demo/broken-quiz-data-snippet.js` for the exact one-line change, apply it to `quiz-data.js`, commit, push. The test job fails, deploy never runs. Narrate: "this would've shipped silently an hour ago; now it can't." Revert the change, commit, push, watch it go green again.

## Local test

```bash
npm test
```

Uses Node's built-in test runner (`node --test`), no dependencies to install, nothing to break on stage.
