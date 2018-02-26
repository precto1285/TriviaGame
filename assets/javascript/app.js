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
    if(/*user clicks John*/){
        //start countdown 3 seconds after go alert click
        /*populate john question/ans random*/    
    }
    else if(/*user clicks Paul*/){
        //start countdown 3 seconds after go alert click
        /*populate paul question/ans random*/
    }
    else if(/*user clicks George*/){
        //start countdown 3 seconds after go alert click
        /*populate george question/ans random*/
    }
    else if(/*user clicks Ringo*/){
        //start countdown 3 seconds after go alert click
        /*populate ringo question/ans random*/
    }
});

//clicking on john lennon executes 10 questions about John Lennon
$("#john").on("click"(function () {

    //q1 = "Who was John Lennon's first wife?";
    //*trueAnswer = "Cynthia" 
    //falseAnswer = "Yoko"
    //falseAnswer = "Linda"
    //falseAnswer = "Sadie"

    //q2 = "What is the name of John's first son?"
    //*trueAnswer = "Julian"
    //falseAnswer = "Sean"
    //falseAnswer "James"
    //falseAnswer "Aaron"

    //q3 = "What is John Lennon known for wearing a lot?"
    //*trueAnswer = "Glasses"
    //falseAnswer "Slippers"
    //falseAnswer "Jackets"
    //falseAnswer "Hats"

    //q4 = "What was John Lennon's last album?""
    //*trueAnswer = "Double Fantasy"
    //falseAnswer = "Imagine"
    //falseAnswer = "Band on the Run"
    //falseAnswer = "Hard Days Night"

    //q5 = "What song did John Lennon sing in the Beatles?""
    //*trueAnswer = "Twist and Shout"
    //falseAnswer = "Long Tall Sally"
    //falseAnswer = "Boys"
    //falseAnswer = "Something"

    //q6 = "What was John Lennon's original middle name?"
    //*trueAnswer = "Winston"
    //falseAnswer = "Ono"
    //falseAnswer = "Patrick"
    //falseAnswer = "William"

    //q7 = "What was John Lennon's first band called?""
    //*trueAnswer = "The Quarry Men"
    //falseAnswer = "The Beatles"
    //falseAnswer = "Herman and the Hermits"
    //falseAnswer = "The Experience"

    //q8 = "Who was the famous songwriting partner of John Lennon?""
    //*trueAnswer = "Paul"
    //falseAnswer = "Ringo"
    //falseAnswer = "George"
    //falseAnswer = "Brian"

    //q9 = "Where is John Lennon from?""
    //*trueAnswer = "Liverpool"
    //falseAnswer = "Newcastle"
    //falseAnswer = "Manchester"
    //falseAnswer = "Leeds"

    //*q10 = "What instrument does John Lennon play?"
    //*trueAnswer = "All of the Above"
    //falseAnswer = "The Guitar"
    //falseAnswer = "The Bass"
    //falseAnswer = "The Piano"


}));

//clicking on paul mccartney executes 10 questions about paul mccartney
$("#paul").on("click"(function () {
    //q1 = "What is Paul's first name?""
    //*trueAnswer = "James"
    //falseAnswer = "Paul...Duh!"
    //falseAnswer = "Patrick"
    //falseAnswer = "Jude"

    //q2 = "Who was married to Paul and played keys with him in "Wings"?"
    //*trueAnswer = "Linda"
    //falseAnswer = "Lucy"
    //falseAnswer = "Judy"
    //falseAnswer = "Michelle"

    //q3 = "What instrument did Paul usually play?"
    //*trueAnswer = "The Bass"
    //falseAnswer = "The Trombone"
    //falseAnswer = "The Lead Guitar"
    //falseAnswer = "The Harmonica"

    //q4 = "What doesn't Paul eat?"
    //*trueAnswer = "meat"
    //falsaAnswer = "flowers"
    //falseAnswer = "cookies"   
    //falseAnswer = "bread"

    //q5 = "Who did Paul know first?"
    //*trueAnswer = "George"
    //falseAnswer = "John"
    //falseAnswer = "Ringo"
    //falseAnswer = "Brian"

    //q6 = "What song did Paul write?"
    //*trueAnswer = "Let it Be"
    //falseAnswer = "Lucy in the Sky With Diamonds"
    //falseAnswer = "Long Tall Sally"
    //falseAnswer = "Something"

    //q7 = "Who did not do a song with Paul?
    //*trueAnswer = "Elvis Presley"
    //falseAnswer = "Michael Jackson"
    //falseAnswer = "Stevie Wonder"
    //falseAnswer = "Kanye West"
    
    //q8 = "What instrument did Paul play in "Hey Jude"?"
    //*trueAnswer = "Piano"
    //falseAnswer = "Bass"
    //falseAnswer = "Guitar"
    //falseAnswer = "Violin"

    //q9 = "What TV show did Paul first come out in in America?"
    //*trueAnswer = "The Ed Sullivan Show"
    //falseAnswer = "Tonight with Johnny Carson"
    //falseAnswer = "Knight Rider"
    //falseAnswer = "Family Ties"

    //q10 = "Who played with Paul?"
    //*trueAnswer = "Dave Grohl"
    //falseAnswer = "David Hasselhoff"
    //falseAnswer = "David Spade"
    //falseAnswer = "David Arquette"


}));

//clicking on george harrison executes 10 questions about george harrison
$("#george").on("click"(function () {
    //q1 = "What did George practice religiously?"
    //*trueAnswer = "Hinduism"
    //falseAnswer = "Christianity"
    //falseAnswer = "Judaism"
    //falseAnswer = "Satanism"

    //q2 = "Who played the lead guitar in "While My Guitar Gently Weeps"?"
    //*trueAnswer = "Eric Clapton"
    //falseAnswer = "Paul McCartney"
    //falseAnswer = "George Harrison"
    //falseAnswer = "Jimi Hendrix"

    //q3 = "Who was George Harrison's Favorite Influence?"
    //*trueAnswer = "All of the Above"
    //falseAnswer = "Carl Perkins"
    //falseAnswer = "Chet Atkins"
    //falseAnswer = "Chuck Berry"

    //g4 = "What song is George Harrison known for?"
    //*trueAnswer = "Here Comes The Sun"
    //falseAnswer = "Penny Lane"
    //falseAnswer = "Tears in Heaven"
    //falseAnswer = "All Along the Watchtower"

    //q5 = "What is George known for playing?"
    //*trueAnswer = "Guitar"
    //falseAnswer = "Piano"
    //falseAnswer = "Drums"
    //falseAnswer = "Ukelele"

    //q6 = "Who did NOT play with George?"
    //*trueAnswer = "The Weekend"
    //falseAnswer = "Ringo Starr"
    //falseAnswer = "Eric Clapton"
    //falseAnswer = "Tom Petty"

    //q7 = "Where did George meet John?"
    //*trueAnswer = "In a Double Decker Bus"
    //falseAnswer = "At the Tavern"
    //falseAnswer = "At School"
    //falseAnswer = "In Germany"

    //q8 = "What is a phrase you might hear George say?"
    //*trueAnswer = "Hari Krishna"
    //falseAnswer = "A Whop Bop a Loo wop"
    //falseAnswer = "Hey Sugar!"
    //falseAnswer = "Smashing Daaaarling!"

    //q9 = "What instrument from India did George enjoy playing?"
    //*trueAnswer = "Sitar"
    //falseAnswer = "Ukelele"
    //falseAnswer = "Bongo's"
    //falseAnswer = "Snake Flute"

    //q10 = "Who is George's son?"
    //*trueAnswer = "Danny"
    //falseAnswer = "Eric"
    //falseAnswer = "John"
    //falseAnswer = "Harris"

}));

//clicking on ringo starr executes 10 questions about ringo starr
$("#ringo").on("click"(function () {
    //q1 = "What was the first band of Ringo Starr?"
    //*trueAnswer = "Rory Storm and the Hurricanes"
    //falseAnswer = "The Beatles"
    //falseAnswer = "The Rolling Stones"
    //falseAnswer = "Herman and the Hermits"

    //q2 = "What does Ringo play?"
    //*trueAnswer = "Drums"
    //falseAnswer = "Piano"
    //falseAnswer = "Flute"
    //falseAnswer = "Guitar"

    //q3 = "What is Ringo's real first name?"
    //*trueAnswer = "Richard"
    //falseAnswer = "Ronald"
    //falseAnswer = "Raymond"
    //falseAnswer = "Rudy"

    //q4 = "What is a song written by Ringo?"
    //*trueAnswer = "Photograph"
    //falseAnswer = "Boys"
    //falseAnswer = "Yellow Submarine"
    //falseAnswer = "Come Together"

    //q5 = "What has Ringo performed as in a movie?"
    //*trueAnswer = "A Cave Man"
    //falseAnswer = "A member of The Rolling Stones"
    //falseAnswer = "A vietnam veteran"
    //falseAnswer = "A muppet"

    //q6 = "What would Ringo say?"
    //*trueAnswer = "Peace and Love!"
    //falseAnswer = "Kawabonga!"
    //falseAnswer = "Hari Krishna!"
    //falseAnswer = "Yippidy Doo Dah!"

    //q7 = "What drum set does Ringo play?"
    //*trueAnswer = "Ludwig"
    //falseAnswer = "Yamaha"
    //falseAnswer = "Tama"
    //falseAnswer = "Slingerland"

    //q8 = "Who did Ringo's son play for?"
    //*true answer = "The Who"
    //falseAnswer = "The Led ZeppAgain"
    //falseAnswer = "Tom Jones"
    //falseAnswer = "Oasis"

    //q9 = "What is a famous feature of Ringo?"
    //*trueAnswer = "His rings"
    //falseAnswer = "His shirts"
    //falseAnswer = "His car"
    //falseAnswer = "His harmonica"

    //q10 = "Who did Ringo Starr replace?"
    //*trueAnswer = "Pete Best"
    //falseAnswer = "Keith Moon"
    //falseAnswer = "Brian Epstein"
    //falseAnswer = "Stuart Sutcliffe"

}));

//the game is timed and the user only has 10 seconds to answer each question or a null answer is filled. null equals wrong.


/*each question is a multiple choice question in which the user has to pick between 4 answers.
there is only 1 correct answer per question.
*/


//if answer is correct, best out of 10 populates by 1.
if (/*clicked*/ === true) {
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