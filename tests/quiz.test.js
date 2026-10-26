import { test } from "node:test";
import assert from "node:assert/strict";
import { QUESTIONS, RESULTS } from "../quiz-data.js";

test("has exactly 8 questions", () => {
  assert.equal(QUESTIONS.length, 8);
});

test("every question has exactly 4 options", () => {
  for (const q of QUESTIONS) {
    assert.equal(q.options.length, 4, `"${q.prompt}" needs exactly 4 options`);
  }
});

test("every basics question has a valid correct answer", () => {
  for (const q of QUESTIONS.filter((q) => q.correct !== undefined)) {
    assert.ok(q.correct >= 0 && q.correct < q.options.length, `"${q.prompt}" has a bad correct index`);
  }
});

test("every career option maps to a real result", () => {
  for (const q of QUESTIONS.filter((q) => q.correct === undefined)) {
    for (const opt of q.options) {
      assert.ok(
        RESULTS[opt.result],
        `"${opt.text}" points to unknown result "${opt.result}"`
      );
    }
  }
});

test("every result is reachable by at least one option", () => {
  const used = new Set(QUESTIONS.flatMap((q) => q.options.map((o) => o.result)));
  for (const key of Object.keys(RESULTS)) {
    assert.ok(used.has(key), `result "${key}" is never used by any option`);
  }
});
