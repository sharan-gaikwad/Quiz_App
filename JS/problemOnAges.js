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
    document.getElementById("problemOnAgesBox").style.display = "block";

}
const questions = [
    {
        questions: "Father is aged three times more than his son Ronit. After 8 years, he would be two and a half times of Ronit's age. After further 8 years, how many times would he be of Ronit's age?",
        answers: [
            { text: "2 times", correct: true },
            { text: "2(1/2)", correct: false },
            { text: "3(3/4)", correct: false },
            { text: "3 times", correct: false },
        ]
    },
    {
        questions: "The sum of ages of 5 children born at the intervals of 3 years each is 50 years. What is the age of the youngest child?",
        answers: [
            { text: "4 years", correct: true },
            { text: "8 years", correct: false },
            { text: "10 years", correct: false },
            { text: "None of these", correct: false},
        ]
    },
    {
        questions: "A father said to his son,I was as old as you are at the present at the time of your birth. If the father's age is 38 years now, the son's age five years back was:",
        answers: [
            { text: "14 years", correct: true },
            { text: "19 years", correct: false },
            { text: "33 years", correct: false },
            { text: "38 years", correct: false },
        ]
    },
    {
        questions: "A is two years older than B who is twice as old as C. If the total of the ages of A, B and C be 27, then how old is B?",
            answers: [
            { text: "7", correct: false },
            { text: "8", correct: false },
            { text: "9", correct: false },
            { text: "10", correct: true },
        ]
    },
    {
        questions: "Present ages of Sameer and Anand are in the ratio of 5 : 4 respectively. Three years hence, the ratio of their ages will become 11 : 9 respectively. What is Anand's present age in years?",
        answers: [
            { text: "24", correct: true },
            { text: "27", correct: false },
            { text: "40", correct: false },
            { text: "Cannot be determined", correct: false },
        ]
    },
    {
        questions: "Present ages of Sameer and Anand are in the ratio of 5 : 4 respectively. Three years hence, the ratio of their ages will become 11 : 9 respectively. What is Anand's present age in years?",
        answers: [
            { text: "14 years", correct: false },
            { text: "18 years", correct: true },
            { text: "20 years", correct: false },
            { text: "22 years", correct: false },
        ]
    },
    {
        questions: "Six years ago, the ratio of the ages of Kunal and Sagar was 6 : 5. Four years hence, the ratio of their ages will be 11 : 10. What is Sagar's age at present?        ",
        answers: [
            { text: "16 years", correct: true },
            { text: "18 years", correct: false },
            { text: "20 years", correct: false },
            { text: "Cannot be determined", correct: false },
        ]
    },
    {
        questions: "The sum of the present ages of a father and his son is 60 years. Six years ago, father's age was five times the age of the son. After 6 years, son's age will be:",
        answers: [
            { text: "12 years", correct: false },
            { text: "14 years", correct: false },
            { text: "18 years", correct: false },
            { text: "20 years", correct: true },
        ]
    },
    {
        questions: "At present, the ratio between the ages of Arun and Deepak is 4 : 3. After 6 years, Arun's age will be 26 years. What is the age of Deepak at present ?",
        answers: [
            { text: "12 years", correct: false },
            { text: "15 years", correct: true },
            { text: "19 and half", correct: false },
            { text: "21 years", correct: false },
        ]
    },
    {
        questions: "Sachin is younger than Rahul by 7 years. If their ages are in the respective ratio of 7 : 9, how old is Sachin?",
        answers: [
            { text: "16 years", correct: false },
            { text: "18 years", correct: true },
            { text: "28 years", correct: false },
            { text: "24.5 years", correct: false },
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
    let resultdata=document.getElementById("problemOnAgesBox");
    resultdata.innerHTML=`${score}/${questions.length}`;
}
function showResult() {
    resetState();
    let resultdata=document.getElementById("problemOnAgesBox");
    resultdata.innerHTML=``;
    document.getElementById("showResult").style.display="block";
    document.getElementById("getName").innerHTML=` ${localStorage.getItem("Username")} Your Result Is:`;
    document.getElementById("totalQ").innerHTML=`Total Question:10`;
    document.getElementById("AttemptQ").innerHTML=`Attempt:${questionAttempt}`;
    document.getElementById("correctA").innerHTML=`Correct:${score}`;
    document.getElementById("wrongA").innerHTML=`Wrong:${10-score}`;
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