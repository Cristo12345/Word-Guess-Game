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


//var to choose a random word from wordBank
document.onkeyup = function(event) {    
    introText.textContent="Good luck!";

    var word = wordBank[Math.floor(Math.random()*wordBank.length)];
    
    for (let i = 0; i < word.length; i++) {
        if (word[i] == " ") {
            wordDisplay += '-';
        }
        else {
            wordDisplay += '_ ';
        }
        
    }

};



