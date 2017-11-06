//
// An array of the letters of the alphabet
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesList = '';
function pickAlphabetLetter(){
  return alphabet[Math.floor(Math.random()*alphabet.length)];
}
var computerChoice = pickAlphabetLetter();

//
    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {
    // Determines which key was pressed.
    var userGuess = event.key;
    //
    // Function to reset the variables
    function resetVariables(){
      guessesLeft = 9;
      guessesList = '';
      computerChoice = pickAlphabetLetter();
    };
    //
    console.log("Computer - " + computerChoice + '   User - ' + userGuess );
    //
    // Check to see if the user's Guess matches the computer's value.
    if ( userGuess === computerChoice ) {
      wins = wins + 1;
      resetVariables();
    }
    else {
      guessesLeft = guessesLeft - 1;
      guessesList = guessesList + ' ' + userGuess;
    }
    if ( guessesLeft === 0 ) {
      losses = losses + 1;
      resetVariables();
    }
    // Write out the current stats for each selection
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    document.getElementById("guessesList").innerHTML = guessesList;
  };

