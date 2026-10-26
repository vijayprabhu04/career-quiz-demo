// Poll content for the live DevOps demo. Edit THIS file on stage for the visible live change.
// Questions 1-5: basics from today's sessions (one correct answer, `correct` = option index).
// Questions 6-8: career questions (each option points to a career in RESULTS).
export const RESULTS = {
  ai: {
    title: "AI Engineer",
    blurb: "You like making machines smart. Start with Python and one free machine learning course.",
  },
  devops: {
    title: "DevOps Engineer",
    blurb: "You want things to run smoothly and never break. Start with Git and Linux.",
  },
  product: {
    title: "Product Manager",
    blurb: "You think about people first and code second. Start by asking why for every app you use.",
  },
  data: {
    title: "Data Analyst",
    blurb: "You like finding the answer hiding in the numbers. Start with Excel, then SQL, then a little Python.",
  },
  security: {
    title: "Security Engineer",
    blurb: "You ask what could go wrong and who could misuse it. Start with how passwords and the internet really work.",
  },
};

export const QUESTIONS = [
  {
    prompt: "In the biryani order story, who decides how the app looks and feels?",
    correct: 1,
    options: [
      { text: "Backend engineer" },
      { text: "UI/UX designer" },
      { text: "Security engineer" },
      { text: "Data scientist" },
    ],
  },
  {
    prompt: "What can an AI agent do that a simple chatbot cannot?",
    correct: 2,
    options: [
      { text: "Only answer questions in a chat box" },
      { text: "Only draw pictures" },
      { text: "Plan, run code and fix its own mistakes (with your approval)" },
      { text: "Work without any electricity" },
    ],
  },
  {
    prompt: "In our Hacker News task, what is MCP?",
    correct: 0,
    options: [
      { text: "A standard plug that lets AI use tools like a browser" },
      { text: "A new programming language" },
      { text: "A type of laptop" },
      { text: "A social media app" },
    ],
  },
  {
    prompt: "What does a pipeline do after you push your code?",
    correct: 3,
    options: [
      { text: "Prints it" },
      { text: "Emails it to your teacher" },
      { text: "Nothing until you click deploy" },
      { text: "Tests it and publishes it automatically" },
    ],
  },
  {
    prompt: "Which statement about IT jobs is true?",
    correct: 1,
    options: [
      { text: "You must be a genius coder" },
      { text: "Half the people building an app never write code" },
      { text: "Only IT companies need IT people" },
      { text: "You need a CS degree for every IT job" },
    ],
  },
  {
    prompt: "Which job card would you like?",
    options: [
      { text: "I teach machines to learn", result: "ai" },
      { text: "I keep apps running 24/7", result: "devops" },
      { text: "I turn numbers into answers", result: "data" },
      { text: "I protect people's data", result: "security" },
    ],
  },
  {
    prompt: "The food app breaks on a busy Friday night. What do you do first?",
    options: [
      { text: "Check the logs and undo the last change", result: "devops" },
      { text: "Find out how many users are affected", result: "data" },
      { text: "Tell users what happened and when it will be fixed", result: "product" },
      { text: "Check if someone broke in on purpose", result: "security" },
    ],
  },
  {
    prompt: "You can build one thing for your college. What is it?",
    options: [
      { text: "A smart assistant that answers students' questions", result: "ai" },
      { text: "A dashboard showing which classes are most popular", result: "data" },
      { text: "A tool that collects what students really need", result: "product" },
      { text: "A login system nobody can hack", result: "security" },
    ],
  },
];
