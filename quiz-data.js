// Quiz content for the live DevOps demo. Edit THIS file on stage for the visible live change.
export const RESULTS = {
  ai: {
    title: "AI Engineer",
    blurb: "You see the pattern before anyone explains it. You'd rather teach a system than repeat yourself.",
  },
  devops: {
    title: "DevOps Engineer",
    blurb: "You're the one who asks 'but what happens when it breaks?' before anyone else does. Reliability is your love language.",
  },
  product: {
    title: "Product Manager",
    blurb: "You care less about how it's built and more about whether anyone actually needed it. Rare and valuable.",
  },
  data: {
    title: "Data Analyst",
    blurb: "Numbers tell you things people won't say out loud. You just want to see the real story in the mess.",
  },
  security: {
    title: "Security Engineer",
    blurb: "You already found the hole in this quiz's logic. Good. That instinct is the whole job.",
  },
};

export const QUESTIONS = [
  {
    prompt: "A project just broke in production. Your first move?",
    options: [
      { text: "Check the logs and the last deploy, calmly", result: "devops" },
      { text: "Ask who it affects and how badly, first", result: "product" },
      { text: "Pull the data to see how often this actually happens", result: "data" },
      { text: "Wonder if someone got in who shouldn't have", result: "security" },
    ],
  },
  {
    prompt: "Pick a Sunday afternoon project.",
    options: [
      { text: "Train a small model on something dumb and fun", result: "ai" },
      { text: "Automate a chore you're tired of doing by hand", result: "devops" },
      { text: "Interview 5 friends about a problem they complain about", result: "product" },
      { text: "Build a spreadsheet that answers a question you're curious about", result: "data" },
    ],
  },
  {
    prompt: "Your group project has a tight deadline. You gravitate toward...",
    options: [
      { text: "Making sure the build never breaks for anyone else", result: "devops" },
      { text: "Deciding what actually ships vs. what gets cut", result: "product" },
      { text: "Checking who has access to what, and why", result: "security" },
      { text: "The one teammate trying to make it 'smart' somehow", result: "ai" },
    ],
  },
  {
    prompt: "Which sentence sounds most like you?",
    options: [
      { text: "\"It works, but can it explain why it decided that?\"", result: "ai" },
      { text: "\"It works on my machine isn't an answer.\"", result: "devops" },
      { text: "\"Just because we can build it doesn't mean we should.\"", result: "product" },
      { text: "\"Trust, but verify. Mostly verify.\"", result: "security" },
    ],
  },
  {
    prompt: "Pick the win that would feel best.",
    options: [
      { text: "A model that gets noticeably smarter with your changes", result: "ai" },
      { text: "A dashboard that changes how a team makes decisions", result: "data" },
      { text: "A feature that was actually missing, now shipped", result: "product" },
      { text: "Catching a vulnerability before anyone else noticed it", result: "security" },
    ],
  },
];
