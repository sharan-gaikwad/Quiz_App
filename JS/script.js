function userDetailBtn() {
    let userDataStore = document.getElementById("inputName").value;
    if (userDataStore == "") {
        alert("Please Enter Your Name & Enter");
    }
    else {
        localStorage.setItem("Username", userDataStore);
    }
}

function pipesAndCisterns() {
    document.getElementById("userSection").style.display = "none"
    document.getElementById("categorySection").style.display = "none"
    document.getElementById("hr").style.display = "none";
    document.getElementById("pipesAndCisternsBox").style.display = "block";
    setInterval(function () {
        time.innerText = count;
        count++;
    }, 1000);

}
const questions = [
    {
        questions: "Three pipes A, B and C can fill a tank from empty to full in 30 minutes, 20 minutes, and 10 minutes respectively. When the tank is empty, all the three pipes are opened. A, B and C discharge chemical solutions P,Q and R respectively. What is the proportion of the solution R in the liquid in the tank after 3 minutes?",
        answers: [
            { text: "5/11", correct: false },
            { text: "6/11", correct: true },
            { text: "7/11", correct: false },
            { text: "8/11", correct: false },
        ]
    },
    {
        questions: "Pipes A and B can fill a tank in 5 and 6 hours respectively. Pipe C can empty it in 12 hours. If all the three pipes are opened together, then the tank will be filled in:",
        answers: [
            { text: "1*13/7", correct: false },
            { text: "2*8/11", correct: false },
            { text: "3*9/17", correct: true },
            { text: "4*1/2", correct: false },
        ]
    },
    {
        questions: "Two pipes A and B can fill a cistern in 37 1/2 minutes and 45 minutes respectively. Both pipes are opened. The cistern will be filled in just half an hour, if the B is turned off after:",
        answers: [
            { text: "5 Min", correct: false },
            { text: "9 Min", correct: true },
            { text: "10 Min", correct: false },
            { text: "15 Min", correct: false },
        ]
    },
    {
        questions: "A tank is filled by three pipes with uniform flow. The first two pipes operating simultaneously fill the tank in the same time during which the tank is filled by the third pipe alone. The second pipe fills the tank 5 hours faster than the first pipe and 4 hours slower than the third pipe. The time required by the first pipe is:",
        answers: [
            { text: "6 hours", correct: false },
            { text: "10 hours", correct: false },
            { text: "15 hours", correct: true },
            { text: "30 hours", correct: false },
        ]
    },
    {
        questions: "Two pipes can fill a tank in 20 and 24 minutes respectively and a waste pipe can empty 3 gallons per minute. All the three pipes working together can fill the tank in 15 minutes. The capacity of the tank is:",
        answers: [
            { text: "60 gallons", correct: true },
            { text: "100 gallons", correct: false },
            { text: "120 gallons", correct: false },
            { text: "180 gallons", correct: false },
        ]
    },
    {
        questions: "A tank is filled in 5 hours by three pipes A, B and C. The pipe C is twice as fast as B and B is twice as fast as A. How much time will pipe A alone take to fill the tank?",
        answers: [
            { text: "20 hours", correct: false },
            { text: "25 hours", correct: false },
            { text: "35 hous", correct: true },
            { text: "Cannot be determined", correct: false },
        ]
    },
    {
        questions: "Two pipes A and B together can fill a cistern in 4 hours. Had they been opened separately, then B would have taken 6 hours more than A to fill the cistern. How much time will be taken by A to fill the cistern separately?",
        answers: [
            { text: "1 hour", correct: false },
            { text: "2 hours", correct: false },
            { text: "6 hours", correct: true },
            { text: "8 hours", correct: false },
        ]
    },
    {
        questions: "One pipe can fill a tank three times as fast as another pipe. If together the two pipes can fill the tank in 36 minutes, then the slower pipe alone will be able to fill the tank in:",
        answers: [
            { text: "81 min", correct: false },
            { text: "108 min", correct: false },
            { text: "144 min", correct: true },
            { text: "192 min", correct: false },
        ]
    },
    {
        questions: "Two pipes A and B can fill a tank in 20 and 30 minutes respectively. If both the pipes are used together, then how long will it take to fill the tank? of the following is markup language?",
        answers: [
            { text: "12 min", correct: true },
            { text: "15 min", correct: false },
            { text: "25 min", correct: false },
            { text: "50 min", correct: false },
        ]
    },
    {
        questions: "Two pipes A and B can fill a tank in 15 minutes and 20 minutes respectively. Both the pipes are opened together but after 4 minutes, pipe A is turned off. What is the total time required to fill the tank?",
        answers: [
            { text: "10 min 20 sec", correct: false },
            { text: "11 min 45 sec", correct: false },
            { text: "12 min 30 sec", correct: false },
            { text: "14 min 40 sec", correct: true },
        ]
    },
]

const questionElement = document.getElementById("queBox");
const answerButtons = document.getElementById("answerButtonDiv");
const nextQuestionBtn = document.getElementById("nextQuestionBtn");
const time = document.getElementById("timerSec");
let currentQuestionIndex = 0;
let score = 0;
let questionAttempt = 0;
let count = 0;
function startquiz() {
    currentQuestionIndex = 0;
    score = 0;
    questionAttempt = 0;
    count = 0;
    showQuestion();

}
function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionsNo = currentQuestionIndex + 1;
    questionAttempt++;

    document.getElementById("questionAttempt").innerHTML = `${questionAttempt}/10`;
    questionElement.innerHTML = questionsNo + ". " + currentQuestion.questions;
    currentQuestion.answers.forEach(answers => {
        const button = document.createElement("button");
        button.innerHTML = answers.text;
        button.classList.add("answerButton");
        answerButtons.appendChild(button);
        if (answers.correct) {
            button.dataset.correct = answers.correct;
        }
        button.addEventListener("click", selectAnswer);


    });

}


function resetState() {
    nextQuestionBtn.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}


function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        score++;

        document.getElementById("score").innerHTML = `SCORE :${score}`;

        selectedBtn.classList.add("correct");

    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextQuestionBtn.style.display = "block";
}
function showResult() {
    resetState();
    let resultdata = document.getElementById("pipesAndCisternsBox");
    resultdata.innerHTML = ``;
    document.getElementById("showResult").style.display = "block";
    document.getElementById("getName").innerHTML = ` ${localStorage.getItem("Username")} Your Result Is:`;
    document.getElementById("totalQ").innerHTML = `Total Question:10`;
    document.getElementById("AttemptQ").innerHTML = `Attempt:${questionAttempt}`;
    document.getElementById("correctA").innerHTML = `Correct:${score}`;
    document.getElementById("wrongA").innerHTML = `Wrong:${10 - score}`;
    document.getElementById("percentageA").innerHTML = `Percentage:${score / 10 * 100}%`;

}

function startAgain() {
    alert("Hello World");
}

function handlenextQuestionBtn() {

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();

    } else {
        showResult();
    }
}
nextQuestionBtn.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handlenextQuestionBtn();
    }
});


startquiz();