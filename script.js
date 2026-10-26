import { QUESTIONS, RESULTS } from "./quiz-data.js";
import { ENDPOINT } from "./config.js";

const LETTERS = ["A", "B", "C", "D"];
const state = { index: 0, answers: [], scores: {}, basics: 0 };

const el = {
  quiz: document.getElementById("quiz"),
  result: document.getElementById("result"),
  progress: document.getElementById("progress"),
};

function render() {
  if (state.index >= QUESTIONS.length) return renderResult();

  const q = QUESTIONS[state.index];
  el.progress.textContent = `Question ${state.index + 1} of ${QUESTIONS.length}`;
  el.quiz.innerHTML = `
    <h2>${q.prompt}</h2>
    <div class="options">
      ${q.options
        .map(
          (opt, i) =>
            `<button class="option" data-i="${i}"><span class="letter">${LETTERS[i]}</span>${opt.text}</button>`
        )
        .join("")}
    </div>
  `;

  el.quiz.querySelectorAll(".option").forEach((btn) => {
    btn.addEventListener("click", () => {
      const i = Number(btn.dataset.i);
      state.answers.push(i);
      if (q.correct !== undefined) {
        if (i === q.correct) state.basics += 1;
      } else {
        const key = q.options[i].result;
        state.scores[key] = (state.scores[key] || 0) + 1;
      }
      state.index += 1;
      render();
    });
  });
}

function renderResult() {
  const winner = Object.entries(state.scores).sort((a, b) => b[1] - a[1])[0][0];
  const r = RESULTS[winner];
  const basicsTotal = QUESTIONS.filter((q) => q.correct !== undefined).length;
  el.progress.textContent = "Done";
  el.quiz.innerHTML = "";
  el.result.classList.remove("hidden");
  el.result.innerHTML = `
    <p class="eyebrow">Today's basics</p>
    <h1>${state.basics} / ${basicsTotal} correct</h1>
    <p class="eyebrow">You'd thrive as a</p>
    <h1>${r.title}</h1>
    <p class="blurb">${r.blurb}</p>
    <form id="submit-form" class="submit-form">
      <p class="submit-hint">Add your answers to the big screen. It is anonymous.</p>
      <button id="submit-btn" type="submit">Submit my answers</button>
      <p id="submit-msg" class="submit-msg"></p>
    </form>
    <button id="restart" type="button">Take it again</button>
  `;

  document.getElementById("submit-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const btn = document.getElementById("submit-btn");
    const msg = document.getElementById("submit-msg");
    if (!ENDPOINT) {
      msg.textContent = "Submitting is not switched on yet.";
      return;
    }
    btn.disabled = true;
    btn.textContent = "Sending...";
    try {
      await fetch(ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({ answers: state.answers }),
      });
      btn.textContent = "Submitted";
      msg.textContent = "Thanks! Look at the big screen.";
    } catch (err) {
      btn.disabled = false;
      btn.textContent = "Submit my answers";
      msg.textContent = "Could not send. Check your internet and try again.";
    }
  });

  document.getElementById("restart").addEventListener("click", () => {
    state.index = 0;
    state.answers = [];
    state.scores = {};
    state.basics = 0;
    el.result.classList.add("hidden");
    render();
  });
}

render();
