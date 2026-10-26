// ON-STAGE "BREAK IT LIVE" SNIPPET
//
// How to use: open quiz-data.js, find the last option in the final question
// ("A login system nobody can hack", currently `result: "security"`), and change it to
// `result: "sekurity"` (typo, on purpose). Commit + push. The test job fails
// immediately with a clear assertion message naming the bad option, the
// deploy job never runs because it needs the test job to pass first.
//
// Narrate: "This typo would've shipped silently an hour ago. Now it can't."
//
// Then fix it back to "security", commit + push again, and watch it go green
// and redeploy.

// Before (correct):
// { text: "A login system nobody can hack", result: "security" },

// After (broken, for the demo):
// { text: "A login system nobody can hack", result: "sekurity" },
