export const quizQuestions = [
  {
    key: "rhythm",
    kicker: "Question 01",
    title: "最近工作日，你的吃饭节奏更像哪一种？",
    answers: [
      { key: "stable", label: "三餐大致稳定", tags: ["节奏平稳"] },
      { key: "late", label: "白天凑合，晚上补回来", tags: ["晚餐补偿", "节奏偏晚"] },
      { key: "skip", label: "经常忙到漏一餐", tags: ["能量波动", "饱腹不足"] },
    ],
  },
  {
    key: "load",
    kicker: "Question 02",
    title: "外卖、奶茶、夜宵这类高负担餐，最近频率如何？",
    answers: [
      { key: "low", label: "一周 1-2 次", tags: ["负担较轻"] },
      { key: "mid", label: "一周 3-4 次", tags: ["外卖偏多"] },
      { key: "high", label: "几乎每天都有", tags: ["能量偏快", "重口频繁"] },
    ],
  },
  {
    key: "feeling",
    kicker: "Question 03",
    title: "你最常出现的身体感受是？",
    answers: [
      { key: "hungry", label: "下午或晚上特别饿", tags: ["晚间饥饿"] },
      { key: "sleepy", label: "饭后很困，效率下降", tags: ["饭后困"] },
      { key: "dizzy", label: "少吃会心慌或低血糖感", tags: ["低血糖敏感"] },
      { key: "steady", label: "整体还算平稳", tags: ["体感稳定"] },
    ],
  },
  {
    key: "goal",
    kicker: "Question 04",
    title: "这次 3 天挑战，你最想先达成什么？",
    answers: [
      { key: "fatLoss", label: "减脂，轻一点但不要饿", tags: ["减脂"] },
      { key: "maintain", label: "维持，把饮食拉稳", tags: ["维持"] },
      { key: "build", label: "增肌，吃够恢复更好", tags: ["增肌"] },
    ],
  },
];

export const challengePlans = {
  fatLoss: {
    goalLabel: "减脂",
    title: "3 天轻负担回稳挑战",
    copy: "先把晚餐和蛋白质拉稳，不靠硬饿制造短期数字。",
    recipeTitle: "轻负担稳感餐盘",
    macros: [
      { label: "热量", value: 520, target: 560, unit: "kcal", tone: "calm" },
      { label: "蛋白质", value: 32, target: 36, unit: "g", tone: "soft" },
      { label: "碳水", value: 48, target: 54, unit: "g", tone: "calm" },
      { label: "脂肪", value: 17, target: 18, unit: "g", tone: "calm" },
    ],
  },
  maintain: {
    goalLabel: "维持",
    title: "3 天工作日稳定挑战",
    copy: "不追求极端干净，先让三餐结构和身体感受稳定下来。",
    recipeTitle: "平稳维持餐盘",
    macros: [
      { label: "热量", value: 640, target: 680, unit: "kcal", tone: "calm" },
      { label: "蛋白质", value: 30, target: 32, unit: "g", tone: "calm" },
      { label: "碳水", value: 68, target: 72, unit: "g", tone: "calm" },
      { label: "脂肪", value: 22, target: 22, unit: "g", tone: "calm" },
    ],
  },
  build: {
    goalLabel: "增肌",
    title: "3 天恢复补够挑战",
    copy: "重点不是少吃，而是把蛋白质和主食补到更利于恢复。",
    recipeTitle: "恢复支持餐盘",
    macros: [
      { label: "热量", value: 760, target: 780, unit: "kcal", tone: "calm" },
      { label: "蛋白质", value: 42, target: 46, unit: "g", tone: "soft" },
      { label: "碳水", value: 88, target: 92, unit: "g", tone: "calm" },
      { label: "脂肪", value: 24, target: 24, unit: "g", tone: "calm" },
    ],
  },
};

export const checkinMeals = [
  {
    key: "balanced",
    title: "鸡蛋牛肉饭 + 一份青菜",
    copy: "结构接近挑战餐盘，适合直接打卡。",
    feedbackTitle: "这餐挺稳，蛋白质和主食都有照顾到。",
    feedbackCopy: "下一餐继续保住蔬菜和蛋白质，不需要额外补偿。",
    macros: [
      { label: "热量", value: 548, target: 560, unit: "kcal", tone: "calm" },
      { label: "蛋白质", value: 34, target: 36, unit: "g", tone: "calm" },
      { label: "碳水", value: 52, target: 54, unit: "g", tone: "calm" },
    ],
  },
  {
    key: "heavy",
    title: "牛肉饭 + 奶茶",
    copy: "能量偏快，适合看下一餐怎么回稳。",
    feedbackTitle: "这餐偏快，饱得快也容易饿得快。",
    feedbackCopy: "下一餐先补蛋白质和蔬菜，主食照常吃就好。",
    macros: [
      { label: "热量", value: 921, target: 560, unit: "kcal", tone: "warm" },
      { label: "蛋白质", value: 24, target: 36, unit: "g", tone: "soft" },
      { label: "碳水", value: 108, target: 54, unit: "g", tone: "warm" },
    ],
  },
  {
    key: "light",
    title: "酸奶水果杯",
    copy: "看起来轻，但饱腹支撑可能不够。",
    feedbackTitle: "这餐偏轻，不一定真的更稳。",
    feedbackCopy: "如果还饿，补一点蛋白质比硬撑更适合挑战。",
    macros: [
      { label: "热量", value: 286, target: 560, unit: "kcal", tone: "soft" },
      { label: "蛋白质", value: 11, target: 36, unit: "g", tone: "soft" },
      { label: "碳水", value: 35, target: 54, unit: "g", tone: "soft" },
    ],
  },
];

function safeGoalKey(answers) {
  return answers.goal || "fatLoss";
}

export function buildQuizModel({ stepIndex }) {
  const question = quizQuestions[stepIndex];
  return {
    currentStep: stepIndex + 1,
    totalSteps: quizQuestions.length,
    progress: (stepIndex + 1) / quizQuestions.length,
    question,
  };
}

export function buildResultModel(answers) {
  const tags = quizQuestions.flatMap((question) => {
    const answerKey = answers[question.key];
    return question.answers.find((answer) => answer.key === answerKey)?.tags || [];
  });
  const goalKey = safeGoalKey(answers);
  const plan = challengePlans[goalKey];

  const persona =
    tags.includes("晚餐补偿")
      ? {
          title: "你是「晚餐补偿型打工人」",
          summary: "白天经常先扛过去，真正的饥饿感会在晚上集中出现。",
        }
      : tags.includes("低血糖敏感")
        ? {
            title: "你是「少吃会报警型打工人」",
            summary: "你不适合硬控，挑战会优先保证稳定能量和蛋白质。",
          }
        : tags.includes("能量偏快")
          ? {
              title: "你是「外卖续航型打工人」",
              summary: "高负担餐不是问题本身，关键是下一餐要知道怎么拉回来。",
            }
          : {
              title: "你是「节奏可塑型打工人」",
              summary: "你的基础节奏不差，3 天挑战适合帮你把结构变得更清楚。",
            };

  return {
    ...persona,
    signals: tags.slice(0, 4),
    challenge: plan,
    goalKey,
  };
}

export function buildCheckinModel(answers) {
  const goalKey = safeGoalKey(answers);
  const plan = challengePlans[goalKey];
  return {
    plan,
    tip: "今天不用做完美记录，先完成第一餐，就能开始看到反馈。",
    meals: checkinMeals,
  };
}

export function buildMealFeedbackModel({ mealKey }) {
  return checkinMeals.find((meal) => meal.key === mealKey) || checkinMeals[0];
}

export function progressRatio(value, target) {
  return Math.max(0, Math.min(value / target, 1.2));
}
