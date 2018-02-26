//GLOBAL VARIABLES:
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

var win = 0;
var lose = 0;
var bestOutOf = 0;





//click on a category to start game. each category is a member of The Beatles.
startaGame();

//clicking on john lennon executes 10 questions about John Lennon
$("#john").on("click"(function () {

    //question  1: Who was John Lennon's first wife?
    //*true answer: Cynthia 
    //false answer: Yoko
    //false answer: Linda
    //false answer: Sadie

    //question  2: What is the name of John's first son?
    //*true answer: Julian
    //false answer: Sean
    //false answer: James
    //false answer: Aaron

    //question  3: What is John Lennon known for wearing a lot?
    //*true answer: Glasses
    //false answer: Slippers
    //false answer: Jackets
    //false answer: Hats

    //question  4: What was John Lennon's last album?
    //*true answer: Double Fantasy
    //false answer: Imagine
    //false answer: Band on the Run
    //false answer: Hard Days Night

    //question  5: What song did John Lennon sing in the Beatles?
    //*true answer: Twist and Shout
    //false answer: Long Tall Sally
    //false answer: Boys
    //false answer: Something

    //question  6: What was John Lennon's original middle name?
    //*true answer: Winston
    //false answer: Ono
    //false answer: Patrick
    //false answer: William

    //question  7: What was John Lennon's first band called?
    //*true answer: The Quarry Men
    //false answer: The Beatles
    //false answer: Herman and the Hermits
    //false answer: The Experience

    //question  8: Who was the famous songwriting partner of John Lennon?
    //*true answer: Paul
    //false answer: Ringo
    //false answer: George
    //false answer: Brian

    //question  9: Where is John Lennon from?
    //*true answer: Liverpool
    //false answer: Newcastle
    //false answer: Manchester
    //false answer: Leeds

    //*question 10: What instrument does John Lennon play?
    //*true answer: All of the Above
    //false answer: The Guitar
    //false answer: The Bass
    //false answer: The Piano

}));



//clicking on paul mccartney executes 10 questions about paul mccartney
$("#paul").on("click"(function () {
    //question  1: What is Paul's first name?
    //*true answer: James
    //false answer: Paul...Duh!
    //false answer: Patrick
    //false answer: Jude

    //question  2: Who was married to Paul and played keys with him in "Wings"?
    //*true answer: Linda
    //false answer: Lucy
    //false answer: Judy
    //false answer: Michelle

    //question  3: What instrument did Paul usually play?
    //*true answer: The Bass
    //false answer: The Trombone
    //false answer: The Lead Guitar
    //false answer: The Harmonica

    //question  4: What doesn't Paul eat?
    //*true answer: meat
    //false answer: flowers
    //false answer: cookies   
    //false answer: bread

    //question  5: Who did Paul know first?
    //*true answer: George
    //false answer: John
    //false answer: Ringo
    //false answer: Brian

    //question  6: What song did Paul write?
    //*true answer: Let it Be
    //false answer: Lucy in the Sky With Diamonds
    //false answer: Long Tall Sally
    //false answer: Something

    //question  7: Who did not do a song with Paul?
    //*true answer: MC Hammer
    //false answer: Michael Jackson
    //false answer: Stevie Wonder
    //false answer: Kanye West

    //question  8: What instrument did Paul play in "Hey Jude"?
    //*true answer: Piano
    //false answer: Bass
    //false answer: Guitar
    //false answer: Violin

    //question  9: What TV show did Paul first come out in in America?
    //*true answer: The Ed Sullivan Show
    //false answer: Tonight with Johnny Carson
    //false answer: Knight Rider
    //false answer: Family Ties

    //question 10: Who played with Paul?
    //*true answer: Dave Grohl
    //false answer: David Hasselhoff
    //false answer: David Spade
    //false answer: David Arquette

}));

//clicking on george harrison executes 10 questions about george harrison
$("#george").on("click"(function () {
    //question  1: What did George practice religiously?
    //*true answer: Hinduism
    //false answer: Christianity
    //false answer: Judaism
    //false answer: Satanism

    //question  2: Who played the lead guitar in "While My Guitar Gently Weeps"?
    //*true answer: Eric Clapton
    //false answer: Paul McCartney
    //false answer: George Harrison
    //false answer: Jimi Hendrix

    //question  3: Who was George Harrison's Favorite Influence?
    //*true answer: All of the Above
    //false answer: Carl Perkins
    //false answer: Chet Atkins
    //false answer: Chuck Berry

    //question  4: What song is George Harrison known for?
    //*true answer: Here Comes The Sun
    //false answer: Penny Lane
    //false answer: Tears in Heaven
    //false answer: All Along the Watchtower

    //question  5: What is George known for playing?
    //*true answer: Guitar
    //false answer: Piano
    //false answer: Drums
    //false answer: Ukelele

    //question  6: Who did NOT play with George?
    //*true answer: The Weekend
    //false answer: Ringo Starr
    //false answer: Eric Clapton
    //false answer: Tom Petty

    //question  7: Where did George meet John?
    //*true answer: In a Double Decker Bus
    //false answer: At the Tavern
    //false answer: At School
    //false answer: In Germany

    //question  8: What is a phrase you might hear George say?
    //*true answer: "Hari Krishna"
    //false answer: "A Whop Bop a Loo wop"
    //false answer: "Hey Sugar!"
    //false answer: "Smashing Daaaarling!"

    //question  9: What instrument from India did George enjoy playing?
    //*true answer: Sitar
    //false answer: Ukelele
    //false answer: Bongo's
    //false answer: Snake Flute

    //question 10: Who is George's son?
    //*true answer: Danny
    //false answer: Eric
    //false answer: John
    //false answer: Harris

}));

//clicking on ringo starr executes 10 questions about ringo starr
$("#ringo").on("click"(function () {
    //question  1: What was the first band of Ringo Starr?
    //*true answer: Rory Storm and the Hurricanes
    //false answer: The Beatles
    //false answer: The Rolling Stones
    //false answer: Herman and the Hermits

    //question  2: What does Ringo play?
    //*true answer: Drums
    //false answer: Piano
    //false answer: Flute
    //false answer: Guitar

    //question  3: What is Ringo's real first name?
    //*true answer: Richard
    //false answer: Ronald
    //false answer: Raymond
    //false answer: Rudy

    //question  4: What is a song written by Ringo?
    //*true answer: Photograph
    //false answer: Boys
    //false answer: Yellow Submarine   
    //false answer: Come Together

    //question  5: What has Ringo performed as in a movie?
    //*true answer: A Cave Man
    //false answer: A member of The Rolling Stones
    //false answer: A vietnam veteran
    //false answer: A muppet

    //question  6: What would Ringo say?
    //*true answer: "Peace and Love!"
    //false answer: "Kawabonga!"
    //false answer: "Hari Krishna!"
    //false answer: "Yippidy Doo Dah!"

    //question  7: What drum set does Ringo play?
    //*true answer: Ludwig
    //false answer: Yamaha
    //false answer: Tama
    //false answer: Slingerland

    //question  8: Who did Ringo's son play for?
    //*true answer: The Who
    //false answer: The Led ZeppAgain
    //false answer: Tom Jones
    //false answer: Oasis

    //question  9: What is a famous feature of Ringo?
    //*true answer: His rings
    //false answer: His shirts
    //false answer: His car
    //false answer: His harmonica

    //question 10: Who did Ringo Starr replace?
    //*true answer: Pete Best
    //false answer: Keith Moon
    //false answer: Brian Epstein
    //false answer: Stuart Sutcliffe

}));

//the game is timed and the user only has 10 seconds to answer each question or a null answer is filled. null equals wrong.


/*each question is a multiple choice question in which the user has to pick between 4 answers.
there is only 1 correct answer per question.
*/


//if answer is correct, best out of 10 populates by 1.
if (/*correct answer is clicked*/) {
    //populate bestOutOf + 1 
    //populate correctAnswer

}
//if the answer is wrong, no population of best out of 10.


//after 10 rounds if the user scores above 50%, you win and a win count populates by 1.
if (/*bestOutOf >= 5*/) {
    //Alert "You Win!"
    //Increment winCount + 1
    // clock stops
}
//after 10 rounds if the user scores below 50%, you lose and a loss count populates by 1.
else {
    //Alert "You Lose!"
    /*Increment loseCount + 1 */
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