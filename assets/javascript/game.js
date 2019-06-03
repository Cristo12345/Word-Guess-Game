//Variables 
var wins = 0;
var losses = 0;

var guessesLeft = 10;

//array of words
var wordBank = [
    "hagia sophia",
    "big ben",
    "eiffel tower"
];

// array to store incorrect letters guessed. Must be reset for each game
var lettersGuessed = [];

//html nodes to change upon game start
var introText = document.getElementById("intro-text");
var winText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var wordDisplay = document.getElementById("word-text");
var guessesRemainingText = document.getElementById("guessesRemaining-text");
var lettersGuessedText = document.getElementById("lettersGuessed-text");

//function to assign word to game, to be called upon page load
function startGame() {
    word = wordBank[Math.floor(Math.random() * wordBank.length)];
    console.log("Word selected is:", word);

    //clear displayed word
    wordDisplay.textContent = "";

    //clear lettersGuessed array
    lettersGuessed = [];


    //split Word into an array of single characters. For each space, put a hyphen. Else, put a '_ '
    var wordSplit = word.split("");

    for (let i = 0; i < word.length; i++) {
        if (wordSplit[i] !== " ") {
            wordDisplay.textContent += "_ ";
        } else if (wordSplit[i] == " ") {
            wordDisplay.textContent += "-";
        };
    };

    //Restart Guesses left
    guessesLeft = 10;
    guessesRemainingText.textContent = "Guesses Left: " + guessesLeft;
};

//check if user has run out of guesses. If so, end the game (with an alert for now), start a new game, and icrement Losses by 1
function lossCheck() {
    if (guessesLeft == 0) {
        alert("You lose!");
        startGame();
        losses++;
    }
}




//on page load, start function to start game - now first word is selected upon page load
document.addEventListener("load", startGame());
// console.log(word);

//onkey up events after is initialized

document.onkeyup = function (event) {

        //User hits Enter: Starts/restarts the game
        if (event.which == 13) {
            startGame();
        }


        //User enters a character besides Enter
        else {
            var wordSplit = word.split("");

            //if-else block dealing with correct and incorrect responses

            // Case to deal with incorrect character
            if ((wordSplit.includes(event.key)) == false) {

                // nested if to check if key selected has already been entered. If not, append it to LettersGuessed. Else, 
                if (!(lettersGuessed.includes(event.key))) {
                        guessesLeft -= 1;
                        guessesRemainingText.textContent = "Guesses Left: " + guessesLeft;

                        //updating list of incorrect guessed letters
                        lettersGuessed.push(event.key);
                        lettersGuessedText.textContent = lettersGuessed;
                        var lettersGuessedString = lettersGuessed.join(' ');
                    }}

                }

                // case to deal with if user enters a correct character - should also include a function here to check if user has guessed entire word
                // else {


                // }
            };