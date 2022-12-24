const question = document.querySelector("#question"); //can target both class and id
const choices = Array.from(document.querySelectorAll(".choice-text"));
const progressText = document.querySelector("#progressText"); //can target both class and id
const progressBarFull = document.querySelector("#progressBarFull"); //can target both class and id

/**
 * 这里获取dom的id是错误的，正确的方法是：
 * document.getElementById("rc1")
 *
 */

// const rc1 = document.getElementById("#rc1");
// const rc2 = document.getElementById("#rc2");
// const rc3 = document.getElementById("#rc3");

let currentQuestion = {};
let questionCounter = 0;
let availableQuestions = [];
let acceptingAnswers = true;

// local storage variables for the result page
let answers = [];
let answerData = [];

let questions = [
  {
    question: "What is your current grade year?",
    choice1: "Freshman",
    choice2: "Sophomore",
    choice3: "Junior",
    choice4: "Senior",
    choice5: "Not there yet (middle school)",
  },
  {
    question: "What is your Reach School?",
    choice1: "IVY LEAGUE",
    choice2: "Top 20",
    choice3: "Top 50",
    choice4: "State Universities",
    choice5: "I don't care",
  },
  {
    question: "What is your current GPA (unweighted)?",
    choice1: "4.0",
    choice2: "3.75+",
    choice3: "3.5+",
    choice4: "3.0+",
    choice5: "2.5+",
  },
  {
    question: "What is your highest/intended standardized test score?",
    choice1: "SAT 1550+ / ACT 35-36",
    choice2: "SAT 1500+ / ACT 34-35",
    choice3: "SAT 1400+ / ACT 31-33",
    choice4: "SAT 1250+ / ACT 26-30",
    choice5: "SAT less than 1250 / ACT less than 26",
  },
  {
    question:
      "By Summer 2023, how many AP exams will you complete/have you completed?",
    choice1: "less than 3",
    choice2: "4-6",
    choice3: "7-10",
    choice4: "more than 10",
    choice5: "None (My school does not offer)",
  },
  {
    question: "What is your intended Field of Study?",
    choice1: "STEM",
    choice2: "Social Science",
    choice3: "Pre-Med track",
    choice4: "Pre-Law track",
    choice5: "Undecided",
  },
];

const MAX_QUESTIONS = 6;

startGame = () => {
  questionCounter = 0;
  availableQuestions = [...questions];
  getNewQuestion();
};

getNewQuestion = () => {
  if (availableQuestions.length == 0 || questionCounter > MAX_QUESTIONS) {
    // endgame();
    // 存储用户选择的选项， result页面会用到
    localStorage.setItem("userAnswer", answers);
    //localStorage.setItem('userAnswerData', answerData)
    return window.location.assign("/result.html");
  }

  questionCounter++;
  // for hud bar
  progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

  // for quesiton
  const questionIndex = 0;
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach((choice) => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuestions.splice(questionIndex, 1);

  acceptingAnswers = true;
};

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;

    answers.push(selectedChoice.innerText); // 存储选项的文本 
    //answerData.push(selectedChoice.dataset)
    selectedChoice.parentElement.classList.add("selected");

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove("selected");
      getNewQuestion();
    }, 300);
  });
});

startGame();
