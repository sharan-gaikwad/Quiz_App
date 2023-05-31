function userDetailBtn() {
    let userDataStore = document.getElementById("inputName").value;
    if (userDataStore == "") {
        alert("Please Enter Your Name & Enter");
    }
    else {
        localStorage.setItem("Username", userDataStore);
    }
}

const questions = [
    {
        questions: "The cost price of 20 articles is the same as the selling price of x articles. If the profit is 25%, then the value of x is:",
        answers: [
            { text: "15", correct: false },
            { text: "16", correct: true },
            { text: "18", correct: false },
            { text: "25", correct: false },
        ]
    },
    {
        questions: "If selling price is doubled, the profit triples. Find the profit percent.",
        answers: [
            { text: "(66)2/3", correct: false },
            { text: "100", correct: true },
            { text: "(105)1/3", correct: false },
            { text: "120", correct: false },
        ]
    },
    {
        questions: "In a certain store, the profit is 320% of the cost. If the cost increases by 25% but the selling price remains constant, approximately what percentage of the selling price is the profit?",
        answers: [
            { text: "30%", correct: false },
            { text: "70%", correct: true },
            { text: "100%", correct: false },
            { text: "250%", correct: false },
        ]
    },
    {
        questions: "A vendor bought toffees at 6 for a rupee. How many for a rupee must he sell to gain 20%?",
            answers: [
            { text: "3", correct: false },
            { text: "4", correct: false },
            { text: "5", correct: true },
            { text: "6", correct: false },
        ]
    },
    {
        questions: "The percentage profit earned by selling an article for Rs. 1920 is equal to the percentage loss incurred by selling the same article for Rs. 1280. At what price should the article be sold to make 25% profit?",
        answers: [
            { text: "2000", correct: true },
            { text: "2200", correct: false },
            { text: "2400", correct: false },
            { text: "Data inadequate", correct: false },
        ]
    },
    {
        questions: "A shopkeeper expects a gain of 22.5% on his cost price. If in a week, his sale was of Rs. 392, what was his profit?",
        answers: [
            { text: "Rs. 18.20", correct: false },
            { text: "Rs. 70", correct: false },
            { text: "Rs. 72", correct: true },
            { text: "Rs. 88.25", correct: false },
        ]
    },
    {
        questions: "A man buys a cycle for Rs. 1400 and sells it at a loss of 15%. What is the selling price of the cycle?",
        answers: [
            { text: "Rs. 1090", correct: false },
            { text: "Rs. 1160", correct: false },
            { text: "Rs. 1190", correct: true },
            { text: "Rs. 1202", correct: false },
        ]
    },
    {
        questions: "Sam purchased 20 dozens of toys at the rate of Rs. 375 per dozen. He sold each one of them at the rate of Rs. 33. What was his percentage profit?",
        answers: [
            { text: "3.5", correct: false },
            { text: "4.5", correct: false },
            { text: "5.6", correct: true },
            { text: "6.5", correct: false },
        ]
    },
    {
        questions: "On selling 17 balls at Rs. 720, there is a loss equal to the cost price of 5 balls. The cost price of a ball is:",
        answers: [
            { text: "Rs. 45", correct: false },
            { text: "Rs. 50", correct: false },
            { text: "Rs. 55", correct: false },
            { text: "Rs. 60", correct: true },
        ]
    },
    {
        questions: "When a plot is sold for Rs. 18,700, the owner loses 15%. At what price must that plot be sold in order to gain 15%?",
        answers: [
            { text: "Rs. 21,000", correct: false },
            { text: "Rs. 22,500", correct: false },
            { text: "Rs. 25,300", correct: true },
            { text: "Rs. 25,800", correct: false },
        ]
    },
]

const questionElement = document.getElementById("queBox");
const answerButtons = document.getElementById("answerButtonDiv");
const nextQuestionBtn = document.getElementById("nextQuestionBtn");

let currentQuestionIndex = 0;
let score = 0;
let questionAttempt = 0;
function startquiz() {
    currentQuestionIndex = 0;
    score = 0;
    questionAttempt = 0;
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
    let resultdata=document.getElementById("profitAndLossBox");
    resultdata.innerHTML=`${score}/${questions.length}`;

}

function showResult() {
    resetState();
    let resultdata=document.getElementById("profitAndLossBox");
    resultdata.innerHTML=``;
    document.getElementById("showResult").style.display="block";
    document.getElementById("getName").innerHTML=` ${localStorage.getItem("Username")} Your Result Is:`;
    document.getElementById("totalQ").innerHTML=`Total Question:10`;
    document.getElementById("AttemptQ").innerHTML=`Attempt:${questionAttempt}`;
    document.getElementById("correctA").innerHTML=`Correct:${score}`;
    document.getElementById("wrongA").innerHTML=`Wrong:${10-score}`;
    document.getElementById("percentageA").innerHTML=`Percentage:${score/10*100}%`;


}



function handlenextQuestionBtn() {

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();

    } else {
        nextQuestionBtn.innerHTML="SUBMIT";
        showResult();
    }
}
nextQuestionBtn.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handlenextQuestionBtn();
    }
});
startquiz();