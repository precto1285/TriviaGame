//GLOBAL VARIABLES:
var name = {
    john, paul, george, ringo
};
var questions = {
    q1, q2, q3, q4, q5, q6, q7, q8, q9, q10
};

var john = {
    q1: true,
    q2: true,
    q3: true,
    q4: true,
    q5: true,
    q6: true,
    q7: true,
    q8: true,
    q9: true,
    q10: true
};
var paul = {
    q1: true,
    q2: true,
    q3: true,
    q4: true,
    q5: true,
    q6: true,
    q7: true,
    q8: true,
    q9: true,
    q10: true
};
var george = {
    q1: true,
    q2: true,
    q3: true,
    q4: true,
    q5: true,
    q6: true,
    q7: true,
    q8: true,
    q9: true,
    q10: true
};
var ringo = {
    q1: true,
    q2: true,
    q3: true,
    q4: true,
    q5: true,
    q6: true,
    q7: true,
    q8: true,
    q9: true,
    q10: true
};

var userChoice = {
    a, b, c, d
}

var trueAAwer;
var falseAnswer;

var win = 0;
var lose = 0;
var bestOutOf = 0;

//random arrangement of answers to btn a thru d and random arrangement of questions.
for (var i=0; i < name.length; i++){
 var questions = Math.floor(Math.random() * i)
}


//click on a category to start game. each category is a member of The Beatles.
startGame (function(){
    if(johnBtn){
        //start countdown 3 seconds after go alert click
        /*populate john question/ans random*/    
    }
    else if(paulBtn){
        //start countdown 3 seconds after go alert click
        /*populate paul question/ans random*/
    }
    else if(georgeBtn){
        //start countdown 3 seconds after go alert click
        /*populate george question/ans random*/
    }
    else if(ringoBtn){
        //start countdown 3 seconds after go alert click
        /*populate ringo question/ans random*/
    }
});

/*each question is a multiple choice question in which the user has to pick between 4 answers.
there is only 1 correct answer per question.
*/

//clicking on john lennon executes 10 questions about John Lennon
var johnBtn = $("#john").on("click" (function () {

    q1 = "Who was John Lennon's first wife?";
    true = "Cynthia" 
    false = "Yoko"
    false = "Linda"
    false = "Sadie"

    q2 = "What is the name of John's first son?"
    true = "Julian"
    false = "Sean"
    false = "James"
    false = "Aaron"

    q3 = "What is John Lennon known for wearing a lot?"
    true = "Glasses"
    false = "Slippers"
    false = "Jackets"
    false = "Hats"

    q4 = "What was John Lennon's last album?"
    true = "Double Fantasy"
    false = "Imagine"
    false = "Band on the Run"
    false = "Hard Days Night"

    q5 = "What song did John Lennon sing in the Beatles?"
    true = "Twist and Shout"
    false = "Long Tall Sally"
    false = "Boys"
    false = "Something"

    q6 = "What was John Lennon's original middle name?"
    true = "Winston"
    false = "Ono"
    falseAnswer = "Patrick"
    falseAnswer = "William"

    q7 = "What was John Lennon's first band called?"
    true = "The Quarry Men"
    false = "The Beatles"
    false = "Herman and the Hermits"
    false = "The Experience"

    q8 = "Who was the famous songwriting partner of John Lennon?"
    true = "Paul"
    false = "Ringo"
    false = "George"
    false = "Brian"

    q9 = "Where is John Lennon from?"
    true = "Liverpool"
    false = "Newcastle"
    false = "Manchester"
    false = "Leeds"

    q10 = "What instrument does John Lennon play?"
    true = "All of the Above"
    false = "The Guitar"
    false = "The Bass"
    false = "The Piano"


}));

//clicking on paul mccartney executes 10 questions about paul mccartney
var paulBtn = $("#paul").on("click"(function () {
    q1 = "What is Paul's first name?"
    true = "James"
    false = "Paul...Duh!"
    false = "Patrick"
    false = "Jude"

    q2 = "Who was married to Paul and played keys with him in 'Wings'?"
    true = "Linda"
    false = "Lucy"
    false = "Judy"
    false = "Michelle"

    q3 = "What instrument did Paul usually play?"
    true = "The Bass"
    false = "The Trombone"
    false = "The Lead Guitar"
    false = "The Harmonica"

    q4 = "What doesn't Paul eat?"
    true = "meat"
    false = "flowers"
    false = "cookies"   
    false = "bread"

    q5 = "Who did Paul know first?"
    true = "George"
    false = "John"
    false = "Ringo"
    false = "Brian"

    q6 = "What song did Paul write?"
    true = "Let it Be"
    false = "Lucy in the Sky With Diamonds"
    false = "Long Tall Sally"
    false = "Something"

    q7 = "Who did not do a song with Paul?
    true = "Elvis Presley"
    false = "Michael Jackson"
    false = "Stevie Wonder"
    false = "Kanye West"
    
    q8 = "What instrument did Paul play in "Hey Jude"?"
    true = "Piano"
    false = "Bass"
    false = "Guitar"
    false = "Violin"

    q9 = "What TV show did Paul first come out in in America?"
    true = "The Ed Sullivan Show"
    false = "Tonight with Johnny Carson"
    false = "Knight Rider"
    false = "Family Ties"

    q10 = "Who played with Paul?"
    true = "Dave Grohl"
    false = "David Hasselhoff"
    false = "David Spade"
    false = "David Arquette"


}));

//clicking on george harrison executes 10 questions about george harrison
var georgeBtn = $("#george").on("click"(function () {
    q1 = "What did George practice religiously?"
    true = "Hinduism"
    false = "Christianity"
    false = "Judaism"
    false = "Satanism"

    q2 = "Who played the lead guitar in 'While My Guitar Gently Weeps'?"
    true = "Eric Clapton"
    false = "Paul McCartney"
    false = "George Harrison"
    false = "Jimi Hendrix"

    q3 = "Who was George Harrison's Favorite Influence?"
    true = "All of the Above"
    false = "Carl Perkins"
    false = "Chet Atkins"
    false = "Chuck Berry"

    g4 = "What song is George Harrison known for?"
    true = "Here Comes The Sun"
    false = "Penny Lane"
    false = "Tears in Heaven"
    false = "All Along the Watchtower"

    q5 = "What is George known for playing?"
    true = "Guitar"
    false = "Piano"
    false = "Drums"
    false = "Ukelele"

    q6 = "Who did NOT play with George?"
    true = "The Weekend"
    false = "Ringo Starr"
    false = "Eric Clapton"
    false = "Tom Petty"

    q7 = "Where did George meet John?"
    true = "In a Double Decker Bus"
    false = "At the Tavern"
    false = "At School"
    false = "In Germany"

    q8 = "What is a phrase you might hear George say?"
    true = "Hari Krishna"
    false = "A Whop Bop a Loo wop"
    false = "Hey Sugar!"
    false = "Smashing Daaaarling!"

    q9 = "What instrument from India did George enjoy playing?"
    true = "Sitar"
    false = "Ukelele"
    false = "Bongo's"
    false = "Snake Flute"

    q10 = "Who is George's son?"
    true = "Danny"
    false = "Eric"
    false = "John"
    false = "Harris"

}));

//clicking on ringo starr executes 10 questions about ringo starr
var ringoBtn = $("#ringo").on("click"(function () {
    q1 = "What was the first band of Ringo Starr?"
    true = "Rory Storm and the Hurricanes"
    false = "The Beatles"
    false = "The Rolling Stones"
    false = "Herman and the Hermits"

    q2 = "What does Ringo play?"
    true = "Drums"
    false = "Piano"
    false = "Flute"
    false = "Guitar"

    q3 = "What is Ringo's real first name?"
    true = "Richard"
    false = "Ronald"
    false = "Raymond"
    false = "Rudy"

    q4 = "What is a song written by Ringo?"
    true = "Photograph"
    false = "Boys"
    false = "Yellow Submarine"
    false = "Come Together"

    q5 = "What has Ringo performed as in a movie?"
    true = "A Cave Man"
    false = "A member of The Rolling Stones"
    false = "A vietnam veteran"
    false = "A muppet"

    q6 = "What would Ringo say?"
    true = "Peace and Love!"
    false = "Kawabonga!"
    false = "Hari Krishna!"
    false = "Yippidy Doo Dah!"

    q7 = "What drum set does Ringo play?"
    true = "Ludwig"
    false = "Yamaha"
    false = "Tama"
    false = "Slingerland"

    q8 = "Who did Ringo's son play for?"
    true = "The Who"
    false = "The Led ZeppAgain"
    false = "Tom Jones"
    false = "Oasis"

    q9 = "What is a famous feature of Ringo?"
    true = "His rings"
    false = "His shirts"
    false = "His car"
    false = "His harmonica"

    q10 = "Who did Ringo Starr replace?"
    true = "Pete Best"
    false = "Keith Moon"
    false = "Brian Epstein"
    false = "Stuart Sutcliffe"

}));


//the game is timed and the user only has 10 seconds to answer each question or a null answer is filled. null equals wrong.


//if answer is correct, best out of 10 populates by 1.
if (userChoice === true) {
    bestOutOf = bestOutOf + 1; 
    trueAnswer = trueAnswer + 1;

}

else{
    //no population of best out of 10.
    alert("Whoops!");//alert:"Whoops!" and pause the clock
    //when alert "ok"clicks, and resume the clock
}

//after 10 rounds if the user scores above 50%, you win and a win count populates by 1.
if (bestOutOf >= 5) {
    alert("You Win! Try Again?");
    winCount = winCount + 1;
    // clock stops
}
//after 10 rounds if the user scores below 50%, you lose and a loss count populates by 1.
else {
    alert("You Lose. Try Again?");
    loseCount = loseCount + 1;
    //clock stops
}

//hitting New Round button resets the game but not the win/loss count.
$("#newGame").on("click" (function () {
    $("#bestOutOf").empty()
    $("#WinCount").empty()
    $("#lossCount").empty();
    startGame();

}));

//hitting the reset button resets win/lose count to 0.
$("#reset").on("click" (function () {
    $(".score").empty()
    startGame();

}));