const beginButton = document.getElementById('begin-btn');
const submitbtn = document.getElementById('submit-btn');
let questionContainerElement = document.getElementById('question-container');
let shuffledQuestions;
const questionElement = document.getElementById('question');
const choicesButtonElement = document.getElementById('choices');
var score = 100;
var counter = 100; // 
let currentQuestionIndex = 0;
// const scoreInput = document.querySelector;
const counterContainer = document.getElementById('count');


function startQuiz() {
    // start the counter
    startCounter();

    beginButton.classList.add('hide')

    shuffledQuestions = questionsArray.sort(() => Math.random() - .5);

    questionContainerElement.classList.remove('hide');

    quizReset();

    showNextQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showNextQuestion(question) {
    questionElement.innerText = question.question;
    question.choices.forEach(choice => {
        const button = document.createElement('button');
        button.innerText = choice.text;
        button.classList.add('btn');
        if (choice.correct) {
            button.dataset.correct = choice.correct
        }
        button.addEventListener('click', submitAnswer);
        choicesButtonElement.appendChild(button);
    });
}

function startCounter() {
    const theIntervalId = setInterval(function () {
        console.log(('counter is', counter));
        counter--;
        counterContainer.innerText = counter;
        if (counter <= 0) {
            clearInterval(theIntervalId);
            counterContainer.innerHTML = "TimeUp!&#128553;";
            questionContainerElement.classList.add('hide');
        }
    }, 1000);
}

function quizReset() {

    while (choicesButtonElement.firstChild) {
        choicesButtonElement.removeChild(choicesButtonElement.firstChild);
    }
}

function submitAnswer(e) {
    // after an answer is selected, increment the question index
    currentQuestionIndex++
    // store a reference to the clicked button element in a const
    const chosenAnswer = e.target
    // if the dataset correct does not exist, user chose wrong so subtract from score
    if (!chosenAnswer.dataset.correct) {
        counter = counter - 5;
        score = score - 20;
        console.log(`User score is now ${score}`);
        scoreCard.innerHTML = ('Your score is now' + score);
        const scoreInput = document.querySelector('.storage');
        const text = document.querySelector('.text');
        const saveButton = document.querySelector('.button');
        scoreInput.addEventListener('input', letter => {
            text.textContent = letter.target.value

        })
        const userSave = () => {
            localStorage.setItem('textinput', text.textContent, scoreCard.innerHTML);
            saveButton.addEventListener('click', userSave);
        }

    }



    quizReset();
    // on to the next question regardless of right or wrong choice
    showNextQuestion(shuffledQuestions[currentQuestionIndex]);




}



function correct() {

    score = score + 20;

}

const questionsArray = [
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

beginButton.addEventListener('click', startQuiz);

submitbtn.addEventListener('click', () => {
    currentQuestionIndex++

    showNextQuestion()
})


