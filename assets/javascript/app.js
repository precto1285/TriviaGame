
//game questions
var questions = [
    {
        qstn: '1. Who is the oldest Beatle by age?',

        answers: [
            { answerText: 'Paul', correct: false },
            { answerText: 'John', correct: false },
            { answerText: 'Ringo', correct: true },
            { answerText: 'George', correct: false }
        ]
    },
    {
        qstn: '2. What was their hairstyle called?',

        answers: [
            { answerText: 'The Mop Top', correct: true },
            { answerText: 'Comb Over', correct: false },
            { answerText: 'Rat Tail', correct: false },
            { answerText: 'The Mohawk', correct: false }
        ]
    },
    {
        qstn: '3. Where did George meet John?',

        answers: [
            { answerText: 'In Germany', correct: false },
            { answerText: 'In school', correct: false },
            { answerText: 'In a townhall', correct: false },
            { answerText: 'On a double decker bus', correct: true }
        ]
    },
    {
        qstn: '4. Who has the middle name "Winston"?',

        answers: [
            { answerText: 'Paul', correct: false },
            { answerText: 'George', correct: false },
            { answerText: 'John', correct: true },
            { answerText: 'Ringo', correct: false }
        ]
    },
    {
        qstn: '5. Where are The Beatles from?',

        answers: [
            { answerText: 'New York', correct: false },
            { answerText: 'London', correct: false },
            { answerText: 'Liverpool', correct: true },
            { answerText: 'Germany', correct: false }
        ]
    },
    {
        qstn: '6. What is the favorite accessory of Ringo?',

        answers: [
            { answerText: 'Cufflings', correct: false },
            { answerText: 'Necklaces', correct: false },
            { answerText: 'Rings', correct: true },
            { answerText: 'Hats', correct: false }
        ]
    },
    {
        qstn: '7. Who played the Lead Guitar in "While My Guitar Gently Weeps"?',

        answers: [
            { answerText: 'George', correct: false },
            { answerText: 'John', correct: false },
            { answerText: 'Eric', correct: true },
            { answerText: 'James', correct: false }
        ]
    },
    {
        qstn: '8. What would Paul eat?',

        answers: [
            { answerText: 'Cheeseburger', correct: false },
            { answerText: 'Surf & Turf', correct: false },
            { answerText: 'Kale Chips', correct: true },
            { answerText: 'Eggs Benedict', correct: false }
        ]
    },
    {
        qstn: '9. Who wrote the song "Yellow Submarine"?',

        answers: [
            { answerText: 'Starkey', correct: false },
            { answerText: 'Harrison', correct: false },
            { answerText: 'Lennon/McCartney', correct: true },
            { answerText: 'George Martin', correct: false }
        ]
    },
    {
        qstn: '10. Where did they make music?',
        answers: [
            { answerText: 'Apple Music Corp', correct: false },
            { answerText: 'Tower Records', correct: false },
            { answerText: 'Abbey Road', correct: true },
            { answerText: 'Lennon/McCartney Productions', correct: false }
        ]
    }
]
//This variable is for holding the number of correct answers guessed by the user.
var correctAnswers = 0;

//This variable is for holding the number of incorrect answers guessed by the user.
var incorrectAnswers = 0;

//This variable is for holding the number of times the question was skipped due to no answered selected.
var unanswered = 0;

var currentQuestion = 0;

var intervalId;

var timerRunning = false;

var timer = {
    time: 10,

    reset: function () {
        timer.time = 10;
        $('#time').html('10');
        clearInterval(intervalId);
        timerRunning = false;
    },
    start: function () {
        if (!timerRunning) {
            $('#time').html('<h3>' + 'Time Remaining: ' + timer.time + '</h3>')
            intervalId = setInterval(timer.count, 1000);
            timerRunning = true;
        }
    },
    count: function () {
        timer.time--;
        $('#time').html('<h3>' + 'Time Remaining: ' + timer.time + '</h3>');
        if (timer.time == 0) {
            answer();
        }
    }
}

function question() {
    timer.reset();
    timer.start();
    $('#answers').empty();
    $('#question').html(questions[currentQuestion].qstn);
    for (var i = 0; i < questions[currentQuestion].answers.length; i++) {
        var button = $('<button onclick="answer(' + i + ')" class="answerButton">' + questions[currentQuestion].answers[i].answerText + '</button>');
        $('#answers').append(button);
    }
}

function nextQuestion() {
    currentQuestion = currentQuestion + 1;
    if (currentQuestion < questions.length) {
        question();
    }
    else {
        gameSummary();
    }
}


function startGame() {
    correctAnswers = 0;
    incorrectAnswers = 0;
    unanswered = 0;
    currentQuestion = 0;
    question();
}

function answer(i) {
    var choice = questions[currentQuestion].answers[i];

    for (var i = 0; i < questions[currentQuestion].answers.length; i++) {
        if (questions[currentQuestion].answers[i].correct === true) {
            var rightAnswer = questions[currentQuestion].answers[i].answerText;
        }
    }

    if (timer.time > 0) {
        if (choice.correct === true) {
            setTimeout(function(){ alert("Correct"); }, 1000);
            $('#correctAnswer').empty();
            correctAnswers++;
            timer.reset();
            timer.start();
        }
        else {
            setTimeout(function(){ alert("Incorrect"); }, 1000);
            $("#correctAnswer").html('<h3>The Correct Answer: ' + rightAnswer + '</h3>');
            incorrectAnswers++;
            timer.reset();
            timer.start();
        }
    }

    if (timer.time === 0) {
        setTimeout(function(){ alert("Time's Up!"); }, 1000);
        $("#correctAnswer").html('<h3>The Correct Answer: ' + rightAnswer + '</h3>');
        unanswered++;

    }
    setTimeout('nextQuestion()', 1000);


}

function gameSummary() {
    timer.reset();
    if (correctAnswers <= 5) {
        $('#summary').html('Sorry, Try Again')
    }
    else {
        $('#correctAnswers').html('<h3>Correct Answers: ' + correctAnswers + '</h3>');
        $('#incorrectAnswers').html('<h3>Incorrect Answers: ' + incorrectAnswers + '</h3>');
        $('#unanswered').html('<h3>Unanswered Questions: ' + unanswered + '</h3>')
    }
}
