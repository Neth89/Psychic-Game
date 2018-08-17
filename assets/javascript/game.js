// start game with default properties
var wins = 0;
var losses = 0;
var numGuess = 10;
var guessedLetters = [];

//set array for selecting options
var letterOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//set a function for pressing keys
document.onkeyup = function(event) {

    var user = event.key;

//have computer select random equation
    var computer = letterOptions[Math.floor(Math.random() * letterOptions.length)];


    if (letterOptions.indexOf(user) > -1) {

//set condition for user selecting correct letter
        if (user === computer) {
            wins++;
            numGuess = 10;
            guessedLetters = [];
        }
    }
//set condition for user selecting incorrect letter
        if (user != computer) {
            numGuess --;
            guessedLetters.push(user);
        }
//set condition for if guess equals zero, add 1 to losses
        if (numGuess === 0) {
            numGuess = 10;
            losses ++;
            guessedLetters = [];

        }
//change scoreboard
        var html = 
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Guesses Left: " + numGuess + "</p>" +
        "<p>Your Guesses so far: " + guessedLetters.join(", ") + "</p>";

        document.querySelector(".container1").innerHTML = html;

}
