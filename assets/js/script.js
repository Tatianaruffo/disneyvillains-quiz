const startButton = document.getElementById('btn-start');
const nextButton = document.getElementById('next');
const questionContainerElement = document.getElementById('question-container');
const questionCounterText = document.getElementById('questionCounter');
const scoreText = document.getElementById('score');
const questionElement = document.getElementById('question-area');
const answerButtonsElement = document.getElementById('answers');
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 10;

let score = 0;
let questionCounter = 0;

let shuffledQuestions, currentQuestionsIndex; 

//code idea taken from https://www.youtube.com/watch?v=riDzcEQbX6k

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionsIndex++
    setNextQuestion()
})

function startGame () {
    startButton.classList.add('hide');
    questionContainerElement.classList.remove('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionsIndex = 0
    setNextQuestion()
}

// Score and question counter taken from https://www.youtube.com/watch?v=4bctmtuZVcM&list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx&index=7
function setNextQuestion () {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionsIndex])
    questionCounterText.innerText = `${currentQuestionsIndex}/${MAX_QUESTIONS}`;

    if (currentQuestionsIndex > shuffledQuestions.length) {
        startButton.classList.remove('hide');
        questionContainerElement.classList.add('hide')
    } else if (shuffledQuestions.length <= MAX_QUESTIONS) { 
        nextButton.classList.remove('hide')
    } 
}

function showQuestion(questions) {
    questionElement.innerText = questions.question
    questions.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn', 'answer-btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer (e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    
    if (correct === "true") {
        incrementScore(CORRECT_BONUS);
      }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('btn-correct')
    } else {
        element.classList.add('btn-wrong')
    }

}

function clearStatusClass(element) {
    element.classList.remove('btn-correct')
    element.classList.remove('btn-correct')
}

incrementScore = num => {
    score += num;
    scoreText.innerText = score;
  };