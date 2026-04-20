import test from "node:test";
import assert from "node:assert/strict";

import {
  buildCheckinModel,
  buildMealFeedbackModel,
  buildQuizModel,
  buildResultModel,
  progressRatio,
  quizQuestions,
} from "./ui-state.js";

test("quiz model exposes a four-question H5 activity flow", () => {
  const first = buildQuizModel({ stepIndex: 0 });
  const last = buildQuizModel({ stepIndex: 3 });

  assert.equal(quizQuestions.length, 4);
  assert.equal(first.currentStep, 1);
  assert.equal(first.totalSteps, 4);
  assert.equal(first.progress, 0.25);
  assert.match(first.question.title, /吃饭节奏/);
  assert.match(last.question.title, /最想先达成/);
});

test("result model combines worker persona, metabolic signals, and recommended challenge", () => {
  const model = buildResultModel({
    rhythm: "late",
    load: "high",
    feeling: "hungry",
    goal: "fatLoss",
  });

  assert.match(model.title, /晚餐补偿型打工人/);
  assert.equal(model.goalKey, "fatLoss");
  assert.equal(model.challenge.title, "3 天轻负担回稳挑战");
  assert.ok(model.signals.includes("晚餐补偿"));
  assert.ok(model.signals.includes("能量偏快"));
});

test("checkin model sends users directly into day-one challenge after result", () => {
  const model = buildCheckinModel({ goal: "build" });

  assert.equal(model.plan.goalLabel, "增肌");
  assert.equal(model.plan.recipeTitle, "恢复支持餐盘");
  assert.equal(model.meals.length, 3);
  assert.match(model.tip, /第一餐/);
});

test("meal feedback model returns concise feedback and macro progress data", () => {
  const model = buildMealFeedbackModel({ mealKey: "heavy" });

  assert.equal(model.title, "牛肉饭 + 奶茶");
  assert.match(model.feedbackTitle, /偏快/);
  assert.equal(model.macros.length, 3);
  assert.equal(model.macros[0].tone, "warm");
});

test("progress ratio is clamped for visual bars", () => {
  assert.equal(progressRatio(50, 100), 0.5);
  assert.equal(progressRatio(180, 100), 1.2);
});
