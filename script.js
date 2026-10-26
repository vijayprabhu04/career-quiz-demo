import { QUESTIONS, RESULTS } from "./quiz-data.js";
import { ENDPOINT } from "./config.js";

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
    <form id="submit-form" class="submit-form">
      <p class="submit-hint">Add your result to the big screen:</p>
      <input id="f-name" type="text" maxlength="30" placeholder="First name (optional)" autocomplete="off" />
      <select id="f-year">
        <option value="">Year (optional)</option>
        <option>1st year</option>
        <option>2nd year</option>
        <option>3rd year</option>
        <option>4th year</option>
      </select>
      <button id="submit-btn" type="submit">Submit my result</button>
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
        body: JSON.stringify({
          result: winner,
          name: document.getElementById("f-name").value.trim(),
          year: document.getElementById("f-year").value,
        }),
      });
      btn.textContent = "Submitted";
      msg.textContent = "Thanks! Look at the big screen.";
    } catch (err) {
      btn.disabled = false;
      btn.textContent = "Submit my result";
      msg.textContent = "Could not send. Check your internet and try again.";
    }
  });

  document.getElementById("restart").addEventListener("click", () => {
    state.index = 0;
    state.scores = {};
    el.result.classList.add("hidden");
    render();
  });
}

render();
