function userDetailBtn() {
    let userDataStore = document.getElementById("inputName").value;
    if (userDataStore == "") {
        alert("Please Enter Your Name & Enter");
    }
    else {
        localStorage.setItem("Username", userDataStore);
    }
}
const time = document.getElementById("timerSec");
let count = 0;
setInterval(function () {
    time.innerText = count;
    count++;
}, 1000);
const questions = [
    {
        questions: "There are 15 boys and 10 girls in a class. If three students are selected at random, what is the probability that 1 girl and 2 boys are selected?        ",
        answers: [
            { text: "1/40", correct: false },
            { text: "1/2", correct: false },
            { text: "21/46", correct: true },
            { text: "7/41", correct: false },
        ]
    },
    {
        questions: "Two friends Harish and Kalyan appeared for an exam. Let A be the event that Harish is selected and B is the event that Kalyan is selected. The probability of A is 2/5 and that of B is 3/7. Find the probability that both of them are selected.",
        answers: [
            { text: "35/36", correct: false },
            { text: "5/36", correct: false },
            { text: "5/12", correct: false },
            { text: "6/35", correct: true },
        ]
    },
    {
        questions: "A card is drawn from a well shuffled pack of 52 cards. What is the probability of getting queen or club card?",
        answers: [
            { text: "17/52", correct: false },
            { text: "15/52", correct: false },
            { text: "4/13", correct: true },
            { text: "3/13", correct: false },
        ]
    },
    {
        questions: "16 persons shake hands with one another in a party. How many shake hands took place?        ",
            answers: [
            { text: "124", correct: false },
            { text: "120", correct: true },
            { text: "165", correct: false },
            { text: "150", correct: false },
        ]
    },
    {
        questions: "2 dice are thrown simultaneously. What is the probability that the sum of the numbers on the faces is divisible by either 3 or 5?",
        answers: [
            { text: "7/36", correct: false },
            { text: "19/36", correct: true },
            { text: "9/36", correct: false },
            { text: "2/7", correct: false },
        ]
    },
    {
        questions: "Daniel speaks truth in 2/5 cases and Sherin lies in 3/7cases. What is the percentage of cases in which both Daniel and Sherin contradict each other in stating a fact?",
        answers: [
            { text: "72.6%", correct: false },
            { text: "51.4%", correct: true },
            { text: "62.3", correct: false },
            { text: "47.5%", correct: false },
        ]
    },
    {
        questions: "The names of 5 students from section A, 6 students from section B and 7 students from section C were selected. The age of all the 18 students was different. Again, one name was selected from them and it was found that it was of section B. What was the probability that it was the youngest student of the section B?",
        answers: [
            { text: "1/18", correct: false },
            { text: "1/15", correct: false },
            { text: "1/6", correct: true },
            { text: "1/12", correct: false },
        ]
    },
    {
        questions: "There are total 18 balls in a bag. Out of them 6 are red in colour, 4 are green in colour and 8 are blue in colour. If Vishal picks three balls randomly from the bag, then what will be the probability that all the three balls are not of the same colour?",
        answers: [
            { text: "95/102", correct: false },
            { text: "19/23", correct: false },
            { text: "21/23", correct: false },
            { text: "46/51", correct: true },
        ]
    },
    {
        questions: "Bag A contains 3 green and 7 blue balls. While bag B contains 10 green and 5 blue balls. If one ball is drawn from each bag, what is the probability that both are green?",
        answers: [
            { text: "29/30", correct: false },
            { text: "1/5", correct: true },
            { text: "1/3", correct: false },
            { text: "1/30", correct: false },
        ]
    },
    {
        questions: "Ram and Shyam are playing chess together. Ram knows the two rows in which he has to put all the pieces in but he doesn’t know how to place them. What is the probability that he puts all the pieces in the right place?",
        answers: [
            { text: "8!/16!", correct: false },
            { text: "8!/(2*15!)", correct: true },
            { text: "(2*8!)/16!", correct: false },
            { text: "8!/15!", correct: false },
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
    let resultdata=document.getElementById("probabilityBox");
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