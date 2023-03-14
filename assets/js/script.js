let startButton = document.getElementById('btn-start')
let userName = document.getElementById('username');
let userScore = document.getElementById("user-score");
let totalScore = document.getElementById("total-score");
let message = document.getElementById('message');
let questionCounter = document.getElementById("question-counter");
let displayQuestion = document.getElementById('question-area');
let optionA = document.getElementById('answer-a');
let optionB = document.getElementById('answer-b');
let optionC = document.getElementById('answer-c');
let optionD = document.getElementById('answer-d');

let currentQuestion = 0;
let questionNumber = 1;
let score = 0;
let selectedAnswer;

nextBtn.addEventListener("click",next);

// getting username and displaying messages
let user = userName;
let messageEmpty = "Please enter a username without using spaces or numbers";
let characterMessage = "Username needs to be more than 3 characters";

// validating username
function checkUser() {
    //username validation idea taken from https://www.youtube.com/watch?v=1iw5sdQAxAY
    var letters = /^[A-Za-z]+$/; //no blank spaces and numbers are accepted
    //doesn't accept empty spaces
    if (!user.value.match(letters)) {
        message.innerHTML = messageEmpty;

    //checks if the username is more than 3 characters
    } else if (user.value.length <= Number(3)) {
        message.innerHTML = characterMessage;

    //allows username if more than 3 characters
    } else if (user.value.length >= Number(3)) {
        beginQuiz();
    }
}

// start quiz event listener
startButton.onclick = () => {
    checkUser();
};


function beginQuiz() {
    currentQuestion = 0;
    totalScore.innerHTML = questions.length;
    questionText.innerHTML = questions[currentQuestion].question;
}

