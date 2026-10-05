import { QUESTIONS, RESULTS } from "./quiz-data.js";

const state = { index: 0, scores: {} };

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
          (opt, i) => `<button class="option" data-i="${i}">${opt.text}</button>`
        )
        .join("")}
    </div>
  `;

  el.quiz.querySelectorAll(".option").forEach((btn) => {
    btn.addEventListener("click", () => {
      const opt = q.options[Number(btn.dataset.i)];
      state.scores[opt.result] = (state.scores[opt.result] || 0) + 1;
      state.index += 1;
      render();
    });
  });
}

function renderResult() {
  const winner = Object.entries(state.scores).sort((a, b) => b[1] - a[1])[0][0];
  const r = RESULTS[winner];
  el.progress.textContent = "Done";
  el.quiz.innerHTML = "";
  el.result.classList.remove("hidden");
  el.result.innerHTML = `
    <p class="eyebrow">You'd thrive as a</p>
    <h1>${r.title}</h1>
    <p class="blurb">${r.blurb}</p>
    <button id="restart">Take it again</button>
  `;
  document.getElementById("restart").addEventListener("click", () => {
    state.index = 0;
    state.scores = {};
    el.result.classList.add("hidden");
    render();
  });
}

render();
