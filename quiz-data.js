// Quiz content for the live DevOps demo. Edit THIS file on stage for the visible live change.
export const RESULTS = {
  ai: {
    title: "AI Engineer",
    blurb: "You like making machines smart. The AI sessions today were your zone. Start with Python and one free machine learning course.",
  },
  devops: {
    title: "DevOps Engineer",
    blurb: "You want things to run smoothly and never break. You are the person who keeps the app alive at 9 PM on a Friday. Start with Git and Linux.",
  },
  product: {
    title: "Product Manager",
    blurb: "You think about people first and code second. You decide what is worth building. Start by asking why for every app you use.",
  },
  data: {
    title: "Data Analyst",
    blurb: "You like finding the answer hiding in the numbers. Start with Excel, then SQL, then a little Python.",
  },
  security: {
    title: "Security Engineer",
    blurb: "You ask what could go wrong and who could misuse it. That instinct is the whole job. Start with how the internet and passwords really work.",
  },
};

export const QUESTIONS = [
  {
    prompt: "You open Swiggy to order biryani. What do you notice first?",
    options: [
      { text: "The 'recommended for you' list is oddly accurate", result: "ai" },
      { text: "It loads fast and never crashes", result: "devops" },
      { text: "Ordering takes only a few taps", result: "product" },
      { text: "Is my payment safe?", result: "security" },
    ],
  },
  {
    prompt: "ChatGPT gives you a wrong answer. What do you do?",
    options: [
      { text: "Wonder why it got it wrong and how to make it better", result: "ai" },
      { text: "Check the facts against real data", result: "data" },
      { text: "Wonder if someone could trick it into saying bad things", result: "security" },
      { text: "Think about how to make the tool more useful for people", result: "product" },
    ],
  },
  {
    prompt: "Today we got the top Hacker News stories three ways. Which part would you enjoy most?",
    options: [
      { text: "Teaching the AI to do it by itself", result: "ai" },
      { text: "Making it run automatically every morning", result: "devops" },
      { text: "Finding which stories get the most points", result: "data" },
      { text: "Deciding what a news app should show first", result: "product" },
    ],
  },
  {
    prompt: "You push your code and the website breaks for everyone. What do you do first?",
    options: [
      { text: "Check the logs and undo the last change", result: "devops" },
      { text: "Find out how many users are affected", result: "data" },
      { text: "Check if someone broke in on purpose", result: "security" },
      { text: "Tell users what happened and when it will be fixed", result: "product" },
    ],
  },
  {
    prompt: "Which line would you like on your future job card?",
    options: [
      { text: "I teach machines to learn", result: "ai" },
      { text: "I keep apps running 24/7", result: "devops" },
      { text: "I turn numbers into answers", result: "data" },
      { text: "I protect people's data", result: "security" },
    ],
  },
];
