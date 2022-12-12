const beginButton = document.getElementById('begin-btn');
const submitbtn = document.getElementById('submit-btn');
let questionContainerElement = document.getElementById('question-container');
let shuffledQuestions, currentQuestionIndex
const questionElement = document.getElementById('question');
const choicesButtonElement = document.getElementById('choices');
beginButton.addEventListener('click', startQuiz);
submitbtn.addEventListener('click', () => {
    currentQuestionIndex++

    setNextQuestion()
})


function startQuiz() {
    var counter = 60;
    setInterval(function () {
        counter--;
        if (counter >= 0) {
            id = document.getElementById("count");
            id.innerHTML = counter;
            if (counter == 0) {
                document.getElementById("count").innerHTML = "GameOver!&#128553;";
            }
        }
    }, 1000);
    beginButton.classList.add('hide')
    shuffledQuestions = question.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}



function setNextQuestion() {
    quizReset()
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {

    questionElement.innerText = question.question;
    question.choices.forEach(choices => {
        const button = document.createElement('button');
        button.innerText = choices.text;
        button.classList.add('btn');
        if (choices.correct) {
            button.dataset.correct = choices.correct
        }
        button.addEventListener('click', submitAnswer);
        choicesButtonElement.appendChild(button);
    });


}

function quizReset() {

    /* submitbtn.classList.add('hide'); */
    while (choicesButtonElement.firstChild) {
        choicesButtonElement.removeChild(choicesButtonElement.firstChild);
    }

}

function submitAnswer(e) {

    const chosenAnswer = e.target
    const correct = chosenAnswer.dataset.correct
    answerStatus(document.body, correct);
    Array.from(choicesButtonElement.children).forEach(button => {
        chosenAnswer(button, button.dataset.correct);
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1);


}

function answerStatus(element, correct) {

    if (correct) {
        correct();
    }
    else {
        incorrect();
    }
}


function incorrect() {


}

function correct() {


}



const question = [

    {
        question: 'Which example displays proper camel case?',
        choices: [
            { text: 'Camelcase', correct: false },
            { text: 'camelcaSe', correct: false },
            { text: 'camelCase', correct: true }
        ]
    },

    {
        question: 'What is considered to be the "building-blocks" of webpages?',
        choices: [
            { text: 'HTML', correct: true },
            { text: 'CSS', correct: false },
            { text: 'JavaScript', correct: false }
        ]
    },

    {
        question: 'What allows us to add style to the elements of an HTML page?',
        choices: [
            { text: 'Java', correct: false },
            { text: 'JavaScript', correct: false },
            { text: 'CSS', correct: true }
        ]
    },

    {
        question: 'What allows us to create functions that make webpages interactive?',
        choices: [
            { text: 'HTML', correct: false },
            { text: 'JavaScript', correct: true },
            { text: 'CSS', correct: false }
        ]
    },

    {
        question: 'A script.js link should be placed where in the HTML page?',
        choices: [
            { text: 'Top', correct: false },
            { text: 'Middle', correct: false },
            { text: 'Bottom', correct: true }
        ]
    }
]