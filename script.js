import {
  buildCheckinModel,
  buildMealFeedbackModel,
  buildQuizModel,
  buildResultModel,
  progressRatio,
  quizQuestions,
} from "./ui-state.js";

const state = {
  screen: "landing",
  quizStep: 0,
  answers: {},
  selectedMeal: null,
};

function showScreen(screen) {
  state.screen = screen;
  document.querySelectorAll(".campaign-screen").forEach((element) => {
    element.classList.toggle("is-active", element.dataset.screen === screen);
  });
}

function macroMarkup(items) {
  return items
    .map(
      (item) => `
        <article class="macro-card macro-card--${item.tone}">
          <div>
            <span>${item.label}</span>
            <strong>${item.value}${item.unit}</strong>
          </div>
          <small>建议 ${item.target}${item.unit}</small>
          <div class="macro-track">
            <i style="width:${Math.min(progressRatio(item.value, item.target) * 100, 100)}%"></i>
          </div>
        </article>
      `
    )
    .join("");
}

function renderQuiz() {
  const model = buildQuizModel({ stepIndex: state.quizStep });
  const question = model.question;

  document.querySelector("#quiz-progress-text").textContent = `${model.currentStep} / ${model.totalSteps}`;
  document.querySelector("#quiz-progress-fill").style.width = `${model.progress * 100}%`;
  document.querySelector("#question-kicker").textContent = question.kicker;
  document.querySelector("#question-title").textContent = question.title;
  document.querySelector("#answer-list").innerHTML = question.answers
    .map(
      (answer) => `
        <button class="answer-card" data-answer="${answer.key}" type="button">
          <span>${answer.label}</span>
          <small>${answer.tags.join(" · ")}</small>
        </button>
      `
    )
    .join("");
}

function renderResult() {
  const model = buildResultModel(state.answers);
  document.querySelector("#persona-title").textContent = model.title;
  document.querySelector("#persona-summary").textContent = model.summary;
  document.querySelector("#challenge-title").textContent = model.challenge.title;
  document.querySelector("#challenge-copy").textContent = model.challenge.copy;
  document.querySelector("#signal-list").innerHTML = model.signals
    .map((signal) => `<span>${signal}</span>`)
    .join("");
}

function renderCheckin() {
  const model = buildCheckinModel(state.answers);
  document.querySelector("#checkin-tip").textContent = model.tip;
  document.querySelector("#recipe-title").textContent = model.plan.recipeTitle;
  document.querySelector("#recipe-goal").textContent = model.plan.goalLabel;
  document.querySelector("#macro-grid").innerHTML = macroMarkup(model.plan.macros);
  document.querySelector("#meal-choice-list").innerHTML = model.meals
    .map(
      (meal) => `
        <button class="meal-choice${meal.key === state.selectedMeal ? " is-active" : ""}" data-meal="${meal.key}" type="button">
          <strong>${meal.title}</strong>
          <span>${meal.copy}</span>
        </button>
      `
    )
    .join("");

  const feedback = document.querySelector("#instant-feedback");
  if (!state.selectedMeal) {
    feedback.hidden = true;
    return;
  }

  const mealFeedback = buildMealFeedbackModel({ mealKey: state.selectedMeal });
  feedback.hidden = false;
  document.querySelector("#feedback-title").textContent = mealFeedback.feedbackTitle;
  document.querySelector("#feedback-copy").textContent = mealFeedback.feedbackCopy;
  document.querySelector("#feedback-progress").innerHTML = macroMarkup(mealFeedback.macros);
}

function render() {
  if (state.screen === "quiz") renderQuiz();
  if (state.screen === "result") renderResult();
  if (state.screen === "checkin") renderCheckin();
}

function moveToQuiz() {
  state.quizStep = 0;
  state.answers = {};
  showScreen("quiz");
  renderQuiz();
}

function chooseAnswer(answerKey) {
  const question = quizQuestions[state.quizStep];
  state.answers[question.key] = answerKey;

  if (state.quizStep < quizQuestions.length - 1) {
    state.quizStep += 1;
    renderQuiz();
    return;
  }

  showScreen("result");
  renderResult();
}

document.querySelector("#start-quiz").addEventListener("click", moveToQuiz);

document.querySelector("#back-to-landing").addEventListener("click", () => {
  showScreen("landing");
});

document.querySelector("#retake-quiz").addEventListener("click", moveToQuiz);

document.querySelector("#enter-checkin").addEventListener("click", () => {
  state.selectedMeal = null;
  showScreen("checkin");
  renderCheckin();
});

document.querySelector("#back-to-result").addEventListener("click", () => {
  showScreen("result");
  renderResult();
});

document.querySelector("#finish-day-one").addEventListener("click", () => {
  document.querySelector("#finish-day-one").textContent = "已完成第一餐打卡";
  document.querySelector("#finish-day-one").disabled = true;
});

document.addEventListener("click", (event) => {
  const answerButton = event.target.closest("[data-answer]");
  if (answerButton) {
    chooseAnswer(answerButton.dataset.answer);
    return;
  }

  const mealButton = event.target.closest("[data-meal]");
  if (mealButton) {
    state.selectedMeal = mealButton.dataset.meal;
    renderCheckin();
  }
});

function bootCaptureMode() {
  const params = new URLSearchParams(window.location.search);
  const captureScreen = params.get("capture");
  if (!captureScreen) return;

  state.answers = {
    rhythm: "late",
    load: "high",
    feeling: "hungry",
    goal: "fatLoss",
  };

  if (captureScreen === "quiz") {
    state.quizStep = 1;
    showScreen("quiz");
    renderQuiz();
    return;
  }

  if (captureScreen === "result") {
    showScreen("result");
    renderResult();
    return;
  }

  if (captureScreen === "checkin") {
    state.selectedMeal = "heavy";
    showScreen("checkin");
    renderCheckin();
  }
}

bootCaptureMode();
