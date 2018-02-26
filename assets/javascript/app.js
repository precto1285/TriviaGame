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

true = 0;
= false0;

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
        userChoice /*populate john question/ans random*/    
    }
    else if(paulBtn){
        //start countdown 3 seconds after go alert click
        userChoice /*populate paul question/ans random*/
    }
    else if(georgeBtn){
        //start countdown 3 seconds after go alert click
        userChoice /*populate george question/ans random*/
    }
    else if(ringoBtn){
        //start countdown 3 seconds after go alert click
        userChoice /*populate ringo question/ans random*/
    }
});

/*each question is a multiple choice question in which the user has to pick between 4 answers.
there is only 1 correct answer per question.
*/

//clicking on john lennon executes 10 questions about John Lennon
var johnBtn = $("#john").on("click" (function () {

    q1 = "Who was John Lennon's first wife?";
        "Cynthia" = true 
        "Yoko" =  false
        "Linda" = false 
        "Sadie" = false

    q2 = "What is the name of John's first son?"
     "Julian" = true    
     = "Sean" = false
     = "James" = false
     = "Aaron" = false

    q3 = "What is John Lennon known for wearing a lot?"
     "Glasses" = true
     "Slippers" = false
     "Jackets" = false
     "Hats" = false

    q4 = "What was John Lennon's last album?"
    "Double Fantasy"  = true
    "Imagine" = false
    "Band on the Run" = false
    "Hard Days Night" = false

    q5 = "What song did John Lennon sing in the Beatles?"
    "Twist and Shout" = true
    "Long Tall Sally" = false
    "Boys" = false
    "Something" = false

    q6 = "What was John Lennon's original middle name?"
    "Winston" = true
    "Ono" = false
    "Patrick" = false
    "William" = false

    q7 = "What was John Lennon's first band called?"
    "The Quarry Men"  = true
    "The Beatles" = false
    "Herman and the Hermits" = false
    "The Experience" = false

    q8 = "Who was the famous songwriting partner of John Lennon?"
    "Paul" = true  
    "Ringo" = false
    "George" = false
    "Brian" = false

    q9 = "Where is John Lennon from?"
    "Liverpool"  = true
    "Newcastle" = false
    "Manchester" = false
    "Leeds" = false

    q10 = "What instrument does John Lennon play?"
    "All of the Above"  = true
    "The Guitar" = false
    "The Bass" = false
    "The Piano" = false


}));

//clicking on paul mccartney executes 10 questions about paul mccartney
var paulBtn = $("#paul").on("click"(function () {
    q1 = "What is Paul's first name?"
     "James" = true   
    "Paul...Duh!"= false
    "Patrick"= false
    "Jude"= false

    q2 = "Who was married to Paul and played keys with him in 'Wings'?"
     "Linda" = true
    "Lucy"= false
    "Judy"= false
    "Michelle"= false

    q3 = "What instrument did Paul usually play?"
     "The Bass" = true
    "The Trombone"= false
    "The Lead Guitar"= false
    "The Harmonica"= false

    q4 = "What doesn't Paul eat?"
     "meat" = true  
    "flowers"= false
    "cookies"= false   
    "bread"= false

    q5 = "Who did Paul know first?"
     "George" = true    
    "John" = false 
    "Ringo" = false 
    "Brian" = false 

    q6 = "What song did Paul write?"
     "Let it Be"  = true
    "Lucy in the Sky With Diamonds" = false 
    "Long Tall Sally" = false 
    "Something" = false

    q7 = "Who did not do a song with Paul?
    "Elvis Presley"  = true
    "Michael Jackson" = false
    "Stevie Wonder" = false
    "Kanye West" = false
    
    q8 = "What instrument did Paul play in 'Hey Jude'?"
    "Piano" = true
    "Bass" = false
    "Guitar" = false
    "Violin" = false

    q9 = "What TV show did Paul first come out in in America?"
    "The Ed Sullivan Show"  = true
    "Tonight with Johnny Carson" = false
    "Knight Rider" = false
    "Family Ties" = false

    q10 = "Who played with Paul?"
    "Dave Grohl"  = true
    "David Hasselhoff" = false 
    "David Spade" = false
    "David Arquette" = false


}));

//clicking on george harrison executes 10 questions about george harrison
var georgeBtn = $("#george").on("click"(function () {
    q1 = "What did George practice religiously?"
     "Hinduism" = true
    "Christianity" = false
    "Judaism" = false
    "Satanism" = false

    q2 = "Who played the lead guitar in 'While My Guitar Gently Weeps'?"
     "Eric Clapton"  = true
    "Paul McCartney" = false
    "George Harrison" = false
    "Jimi Hendrix" = false

    q3 = "Who was George Harrison's Favorite Influence?"
     "All of the Above"  = true
    "Carl Perkins" = false
    "Chet Atkins" = false
    "Chuck Berry" = false

    g4 = "What song is George Harrison known for?"
     "Here Comes The Sun"  = true
    "Penny Lane" = false
    "Tears in Heaven" = false
    "All Along the Watchtower" = false

    q5 = "What is George known for playing?"
     "Guitar" = true    
    "Piano" = false
    "Drums" = false
    "Ukelele" = false

    q6 = "Who did NOT play with George?"
     "The Weekend" = true
    "Ringo Starr" = false
    "Eric Clapton" = false
    "Tom Petty" = false

    q7 = "Where did George meet John?"
     "In a Double Decker Bus"  = true
    "At the Tavern" = false
    "At School" = false
    "In Germany" = false

    q8 = "What is a phrase you might hear George say?"
     "Hari Krishna"  = true
    "A Whop Bop a Loo wop" = false
    "Hey Sugar!" = false
    "Smashing Daaaarling!" = false

    q9 = "What instrument from India did George enjoy playing?"
     "Sitar"= true   
    "Ukelele" = false
    "Bongo's" = false
    "Snake Flute" = false

    q10 = "Who is George's son?"
     "Danny" = true   
    "Eric" = false
    "John" = false
    "Harris" = false

}));

//clicking on ringo starr executes 10 questions about ringo starr
var ringoBtn = $("#ringo").on("click"(function () {
    q1 = "What was the first band of Ringo Starr?"
    "Rory Storm and the Hurricanes"  = true
    "The Beatles" = false
    "The Rolling Stones" = false
    "Herman and the Hermits" = false

    q2 = "What does Ringo play?"
    "Drums"   = true   
    "Piano" = false
    "Flute" = false
    "Guitar" = false

    q3 = "What is Ringo's real first name?"
    "Richard" = true
    "Ronald" = false
    "Raymond" = false
    "Rudy" = false

    q4 = "What is a song written by Ringo?"
    "Photograph"  = true
    "Boys" = false
    "Yellow Submarine" = false
    "Come Together" = false

    q5 = "What has Ringo performed as in a movie?"
    "A Cave Man"  = true
    "A member of The Rolling Stones" = false   
    "A vietnam veteran" = false
    "A muppet" = false

    q6 = "What would Ringo say?"
    "Peace and Love!"  = true
    "Kawabonga!" = false
    "Hari Krishna!" = false
    "Yippidy Doo Dah!" = false

    q7 = "What drum set does Ringo play?"
    "Ludwig" = true    
    "Yamaha" = false
    "Tama" = false
    "Slingerland" = false

    q8 = "Who did Ringo's son play for?"
     "The Who" = true
    "The Led ZeppAgain" = false
    "Tom Jones" = false
    "Oasis" = false

    q9 = "What is a famous feature of Ringo?"
    "His rings"  = true
    "His shirts" = false
    "His car" = false
    "His harmonica" = false

    q10 = "Who did Ringo Starr replace?"
    "Pete Best"  = true
    "Keith Moon" = false
    "Brian Epstein" = false
    "Stuart Sutcliffe" = false

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