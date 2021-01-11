var startbtn = document.getElementById('start');
var norway = document.getElementById('norway');
var desciption = document.getElementById('description')
var timer = document.getElementById('timer');
var startscreen = document.getElementById('startScreen')
var stats = document.getElementById('stats')
var questionText = document.getElementById('question')
var quiz = document.getElementById('quiz')
var highscore = document.getElementById('initials')
var choiceA = document.getElementById("a");
var choiceB = document.getElementById("b");
var choiceC = document.getElementById("c");
var finalScore = document.getElementById('score');
var score = 0;
var counter = 89;
let questions = [

    {

        question : "What is the name of the king in Norway?",

        choiceA : "Harald",

        choiceB : "Hallvar",

        choiceC : "Håkon",

        correct : "a"

    },{

        question : "When is Norways national day?",

        choiceA : "9 April",

        choiceB : "17 May",

        choiceC : "7 July",

        correct : "b"

    },{

        question : "What is the capital of Norway?",

        choiceA : "Bodø",

        choiceB : "Trondheim",

        choiceC : "Oslo",

        correct : "c"

    },{

        question : "Norway has two official languages - which ones?",

        choiceA : "Norwegian and Swedish",

        choiceB : "Norwegian and English",

        choiceC : "Norwegian and Sami",

        correct : "c"

    },{

        question : "What is the highest mountain in Norway called?",

        choiceA : "Glitterting",

        choiceB : "Galdhøpiggen",

        choiceC : "Storen",

        correct : "b"

    }

];

var lastQuestion = questions.length - 1;
var runningQuestion = 0;

// end game

function endGame() {
    stats.setAttribute("style", "display: none")
    quiz.setAttribute("style", "display:none")
    highscore.setAttribute("style", "display:block")
    finalScore.textContent = score + counter;

    
}
console.log(lastQuestion)
// check answers
function checkAnswer(answer) {
    if(answer == questions[runningQuestion].correct) {
        score++;
    } else {
        counter = counter - 5;
    }
    
    if(runningQuestion < lastQuestion) {
        runningQuestion++;
        renderQuestion();
    } else {
        clearInterval(count);
        endGame();
    }
}

//build the questions
function renderQuestion() {

    let q = questions[runningQuestion];

    question.innerHTML = "<p>"+ q.question +"</p>";

    choiceA.innerHTML = q.choiceA;

    choiceB.innerHTML = q.choiceB;

    choiceC.innerHTML = q.choiceC;
    
}

function count() {

    var time = setInterval(function() {
        if(counter > 0) {
            timer.textContent = counter;
            counter--;
        } else {
            clearInterval(time);
            endGame();
        }
    }, 1000)
};

// play the game
function game() {
    stats.setAttribute("style", "display: block")
    quiz.setAttribute("style", "display:block")

    renderQuestion();
}

// start the game
startbtn.addEventListener('click', function() {
startscreen.setAttribute("style", "display:none")
count();
game();
});