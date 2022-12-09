// Selects element by class
//var timeEl = document.querySelector(".time");

// Selects element by id
//var mainEl = document.getElementById("main");


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
    document.getElementById("question-prompt").innerHTML;
    // hide some stuff now
    showQuestion()

}
function showQuestion() {
    var promptContainer = document.getElementById('prompt-holder')
    var choiceContainer = document.getElementById('choice-holder')
    console.log(choiceContainer)
    for (let i = 0; i < questions[currentIndex].choices.length; i++) {
        console.log(i)
        console.log(questions[currentIndex].choices[i])
        var button = document.createElement('button')
        //how am I going to put it on the screen? h1? button? div, and then put my buttons in there?
        button.innerHTML = questions[currentIndex].choices[i]
        choiceContainer.appendChild(button)
        button.addEventListener('click', checkIfCorrectOrWrong)

    }
    promptContainer.innerHTML = questions.prompt;
    var questioncontainer = document.createElement("h2");
    questioncontainer.innerHTML = questions.prompt[0];
    promptContainer.appendChild(questioncontainer);
    console.log(questioncontainer);
}

var questions = [{
    prompt: "Which example shows proper camel case?",
    choices: ["Camelcase", "camelcaSe", "camelCase"],
    answer: "camelCase",
}];
var currentIndex = 0

function checkIfCorrectOrWrong(event) {
    event.preventDefault()
    console.log(event.target.innerHTML)
    if (event.target.innerHTML === questions[currentIndex].answer) {
        console.log()
    } else {
        console.log()
    }

    //maybe check if you're done with the quiz, if you are
    if ("I'm done") {
        endQuiz()
    } else {
        currentIndex++
        showQuestion()
    }
}

function showQuestion() {
    var choiceContainer = document.getElementById('choice-holder')
    console.log(choiceContainer)
    for (let i = 0; i < questions[currentIndex].choices.length; i++) {
        console.log(i)
        console.log(questions[currentIndex].choices[i])
        var button = document.createElement('button')
        //how am I going to put it on the screen? h1? button? div, and then put my buttons in there?
        button.innerHTML = questions[currentIndex].choices[i]
        choiceContainer.appendChild(button)
        button.addEventListener('click', checkIfCorrectOrWrong)

    }
}


// Loop through checked options to store in array
