import { test } from "node:test";
import assert from "node:assert/strict";
import { QUESTIONS, RESULTS } from "../quiz-data.js";

test("has exactly 5 questions", () => {
  assert.equal(QUESTIONS.length, 5);
});

test("every question has at least 3 options", () => {
  for (const q of QUESTIONS) {
    assert.ok(q.options.length >= 3, `"${q.prompt}" needs at least 3 options`);
  }
});

test("every option maps to a real result", () => {
  for (const q of QUESTIONS) {
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
