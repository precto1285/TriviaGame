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



//These are variables for the timer:
var intervalId;

var timerRunning = false;

var timer = {
    time: 10,
    
    	//These are the functions that operate the timer:
	//function for reseting the timer:
	reset: function() {
		timer.time = 10;
		$('#counter').html('10');
		clearInterval(intervalId);
		timerRunning = false;
	},
	//function for starting the timer:
	start: function() {
		if (!timerRunning) {
			$('#counter').html('<h3>' + 'Time Remaining: ' + timer.time + '</h3>')
			intervalId = setInterval(timer.count, 1000);
			timerRunning = true;

		}
	},
	//function for the count of the clock:
	count: function() {
		timer.time--;
		$('#counter').html('<h3>' + 'Time Remaining: ' + timer.time + '</h3>');
		if (timer.time == 0) {
			answer();
		}
	}

}


//This function is for randomly loading questions to be answered.
function question() {
	timer.reset();
	timer.start();
	$('.btn').empty();
	$('#questionChoice').html('<h2>' + questions[currentQuestion].qstn + '</h2>');
	for (var i = 0; i < questions[currentQuestion].answers.length; i ++) {
		var button = $('<button onclick="answer('+i+')" class="answerButton">' + questions[currentQuestion].answers[i].answerText + '</button>');
		$('.btn').append(button)
	}




