const startButton = document.getElementById('btn-start');

let shuffledQuestions, currentQuestionsIndex; 
const questionElement = document.getElementById('question-area');
const answerButtonsElement = document.getElementById('answers');


startButton.addEventListener('click', startGame);

function startGame () {
    console.log('started')
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionsIndex = 0
    setNextQuestion()
}

function setNextQuestion () {
    showQuestion(shuffledQuestions[currentQuestionsIndex])

}

function showQuestion(questions) {
    questionElement.innerText = questions.question
}

function selectAnswer () {

}