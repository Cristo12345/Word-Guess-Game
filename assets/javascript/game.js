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

//html nodes to change upon game start
var introText = document.getElementById("intro-text");
var winText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var wordDisplay = document.getElementById("word-text");
var guessesRemainingText = document.getElementById("guessesRemaining-text");


document.onkeyup = function (event) {

    //initializing word to be guessed in global scope so it can be referenced in functions withour resetting it
    var word = wordBank[Math.floor(Math.random() * wordBank.length)];

    //User hits Enter: Starts/restarts the game, sets guesses remaining back to default as well as clearing the board and generating a new word.
    if (event.which == 13) {
        introText.textContent = "Good luck! Press Enter again to restart.";
        wordDisplay.textContent = "";

        //Restart Guesses left
        guessesLeft = 10;
        guessesRemainingText.textContent = "Guesses Left: " + guessesLeft;

        //generate random word from word bank
        var word = wordBank[Math.floor(Math.random() * wordBank.length)];

        //my method of creating the blank template for the word to be guessed.
        //idea is to split the word into an array of characters. If a character is a letter, make it a _; if it's a _, make it a -
        var wordSplit = word.split("");

        for (let i = 0; i < word.length; i++) {
            if (wordSplit[i] !== " ") {
                wordDisplay.textContent += "_ ";
            } else if (wordSplit[i] == " ") {
                wordDisplay.textContent += "-";
            };
        };
    }


    //User enters a valid character
    else  {
        var wordSplit = word.split("");

        //if-else block dealing with correct and incorrect responses
        if ((wordSplit.includes(event.key)) == false) {
            guessesLeft -= 1;
            guessesRemainingText.textContent = "Guesses Left: " + guessesLeft;
        }
    };
};
