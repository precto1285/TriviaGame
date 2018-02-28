
//game questions
var questions = [
    {
        qstn:'1. Who is the oldest Beatle by age?', 

        answers: [
            {answerText:'Paul', correct: false},
            {answerText:'John', correct: false},
            {answerText:'Ringo', correct: true},
            {answerText:'George', correct: false}
        ]
    },
    {
        qstn:'2. What was their hairstyle called?', 

        answers: [
            {answerText:'The Mop Top', correct: true},
            {answerText:'Comb Over', correct: false},
            {answerText:'Rat Tail', correct: false},
            {answerText:'The Mohawk', correct: false}
        ]
    },
    {
        qstn:'3. Where did George meet John?', 

        answers: [
            {answerText:'In Germany', correct: false},
            {answerText:'In school', correct: false},
            {answerText:'In a townhall', correct: false},
            {answerText:'On a double decker bus', correct: true}
        ]
    },
    {
        qstn:'4. Who has the middle name "Winston"?', 

        answers: [
            {answerText:'Paul', correct: false},
            {answerText:'George', correct: false},
            {answerText:'John', correct: true},
            {answerText:'Ringo', correct: false}
        ]
    },
    {
        qstn:'5. Where are The Beatles from?', 

        answers: [
            {answerText:'New York', correct: false},
            {answerText:'London', correct: false},
            {answerText:'Liverpool', correct: true},
            {answerText:'Germany', correct: false}
        ]
    },
    {
        qstn:'6. What is the favorite accessory of Ringo?', 

        answers: [
            {answerText:'Cufflings', correct: false},
            {answerText:'Necklaces', correct: false},
            {answerText:'Rings', correct: true},
            {answerText:'Hats', correct: false}
        ]
    },
    {
        qstn:'7. Who played the Lead Guitar in "While My Guitar Gently Weeps"?', 

        answers: [
            {answerText:'George', correct: false},
            {answerText:'John', correct: false},
            {answerText:'Eric', correct: true},
            {answerText:'James', correct: false}
        ]
    },
    {
        qstn:'8. What would Paul eat?', 

        answers: [
            {answerText:'Cheeseburger', correct: false},
            {answerText:'Surf & Turf', correct: false},
            {answerText:'Kale Chips', correct: true},
            {answerText:'Eggs Benedict', correct: false}
        ]
    },
    {
        qstn:'9. Who wrote the song "Yellow Submarine"?', 

        answers: [
            {answerText:'Starkey', correct: false},
            {answerText:'Harrison', correct: false},
            {answerText:'Lennon/McCartney', correct: true},
            {answerText:'George Martin', correct: false}
        ]
    },
    {
        qstn:'10. Where do they make music?', 
        answers: [
            {answerText:'Apple Music Corp', correct: false},
            {answerText:'Tower Records', correct: false},
            {answerText:'Abbey Road', correct: true},
            {answerText:'Lennon/McCartney Productions', correct: false}
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

//variables for timer.
var intervalId;

var timerRunning = false;

var timer = {

	time: 30,

	//functions for timer.
	reset: function() {
		timer.time = 30;
		$('#counter').html('30');
		clearInterval(intervalId);
		timerRunning = false;
	},
	start: function() {
		if (!timerRunning) {
			$('#counter').html('<h3>' + 'Time Remaining: ' + timer.time + '</h3>')
			intervalId = setInterval(timer.count, 1000);
			timerRunning = true;
		}
	},
	count: function() {
		timer.time--;
		$('#counter').html('<h3>' + 'Time Remaining: ' + timer.time + '</h3>');
		if (timer.time == 0) {
			answer();
		}
	}
}

function gameStart(){

for(var i = 0; i < questions.length; i++){
	$("#question").html('', questions[i]++);
	
};

var userChoice = $(".btn").on("click", function() {
	if(userChoice === true){
		$("#outOfTenCount").html(correctAnswers = correctAnswers + 1);
		alert("Correct!");
	}
});
}
gameStart();


/*
function startQuiz(){

	for(var i = 0; i < questions.length; i++){
		
		var userChoice = $(".btn").on("click", function(){
				
			if(userChoice = true){
					correctAnswers = correctAnswers + 1;
				}
				else{
					incorrectAnswers = incorrectAnswers + 1
				}
			});
	}}
	

//this function is for loading the next page when answer/no answer has been executed.
function question() {
	timer.reset();
	timer.start();
	$('#answers').empty();
	$('#questionChoice').html(questions[currentQuestion].qstn);
	for(var i = 0; i < questions[currentQuestion].answers.length; i++){
		var button = $('<button onclick="answer('+i+')" class="answerButton">' + questions[currentQuestion].answers[i].answerText + '</button>');
		$('#answers').append(button)
	}
}
//this function is for loading the next page when answer/no answer has been executed.
function nextQuestion() {
	$('.startingDiv').hide();
	$('.correctAnswer').hide();
	$('.summary').hide();
	$('.questionsDiv').show();
	currentQuestion = currentQuestion + 1;
	if (currentQuestion < questions.length){
		question();	
	} else {
		gameSummary();
	}
}
//This function starts the Trivia Game
function startQuiz() {	
	$('.startingDiv').hide();
	$('.correctAnswer').hide();
	$('.summary').hide();
	$('.questionsDiv').show();
	correctAnswers = 0;
	incorrectAnswers = 0;
	unanswered = 0;
	currentQuestion = 0;
	question();
}

//This function is for processing the users answer
function answer(i) {
	$('.startingDiv').hide();
	$('.correctAnswer').show();
	$('.summary').hide();
	$('.questionsDiv').hide();
	var choice = questions[currentQuestion].answers[i];
	/*var correctImage = questions[currentQuestion].correctImageUrl;
	var wrongImage = questions[currentQuestion].wrongImageUrl;

	//This is for the computer to randomly choose between 10 questions for the user to answer.
	for (var i = 0; i < questions[currentQuestion].answers.length; i++) {
		if (questions[currentQuestion].answers[i].correct === true) {
			var rightAnswer = questions[currentQuestion].answers[i].answerText;
		}
	}
	//This happens when the user answers correctly before the timer hits 0.
	if (timer.time > 0) {
		if (choice.correct === true) {
			$('#message').html('<h2>Correct!</h2>')
			$('#correctAnswer').empty();
			correctAnswers++;
		//This happens when the user answers incoorectly before the timer hits 0.
		} else {
			$('#message').html('<h2>Wrong!</h2>');
			$('#correctAnswer').html('<h3>The correct answer was: ' + rightAnswer + '</h3>');
			incorrectAnswers++;
		}
	}
	//This happens when the user does not pick an answer before the timer hits 0.
	if (timer.time === 0) {
		$('#message').html('<h2>Time\'s up!</h2>');
		$('#correctAnswer').html('<p>The correct answer was: ' + rightAnswer + '</p>');
		unanswered++;
	}
	setTimeout('nextQuestion()', 5000)
}
//This function sumarizes the game and shows the overall user stats after 10 questions.
function gameSummary() {
	timer.reset();
	$('.startingDiv').hide();
	$('.correctAnswer').hide();
	$('.summary').show();
	$('.questionsDiv').hide();
	if (correctAnswers <= 5) {
		// $('#summaryImage').html('<img src="assets/images/muchToLearn.gif"/>');
		$('#summary').html('Sorry, You Lose!')
	} else {
		//$('#summaryImage').html('<img src="assets/images/medal.gif"/>')
		$('#summary').html('You Win!')
	}
	$('#correctAnswers').html('<h3>Correct Answers: '+ correctAnswers + '</h3>');
	$('#incorrectAnswers').html('<h3>Incorrect Answers: ' + incorrectAnswers + '</h3>');
	$('#unanswered').html('<h3>Unanswered Questions: '+ unanswered + '</h3>')
}
*/