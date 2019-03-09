// Press any key to get started
// Change the above message to greeting "Welcome!"
var wordSelection = [
  "Assent",
  "Blessed",
  "Compliment",
  "Decency",
  "Eager",
  "Fabulous",
  "Goodness",
  "Handy",
  "Idea",
  "Joke",
  "Keen",
  "Lively",
  "Made",
  "Neat",
  "Obliging",
  "Pacify",
  "Quality",
  "Reliable",
  "Simplify",
  "Timeless",
  "Ultimate",
  "Value",
  "Warm",
  "Xerox",
  "Yea",
  "Zeal",
];

var guess = 0;
var selectedWord = "";
var blank = "";
var guessed = [];
var totalGuesses = 0;

function include(arr, obj){
  for (var i = 0; i = arr.length; i++){
    if (arr[i] == obj) return true;
  }
}

document.addEventListener("keypress", function (startGame) {


  document.getElementById("welcome").innerHTML = "Welcome!";
  newBlank = "";
  guessed = [];
  document.getElementById("guessed").innerHTML = guessed;
  blank = "";
  var current = Math.floor(Math.random() * 25);

  selectedWord = wordSelection[current];
  guess = 0;
  // console.log(selectedWord);
  // console.log(selectedWord.length);

  guess = 1 + selectedWord.length;
  document.getElementById("guesses").innerHTML = guess;
  for (var i = 0; i < selectedWord.length; i++){
    blank = blank + " _";
  }
  document.getElementById("correctWord").innerHTML = blank;
});

function word() {
  for (var i  = 0; i < selectedWord.length; i++){
    if(getWord === selectedWord[i]){
      blank[2 * i - 1] = getWord;
    }
  }

}



document.addEventListener("keypress", function(guessWord){
  document.getElementById("lose").innerHTML = "";
  var newBlank = "";
  var getWord = document.getElementById("guess").value;
  document.getElementById("lose").innerHTML = "";
  document.getElementById("enterLetter").innerHTML = "";
  var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
  "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  if (include(alphabet, getWord) != true){
    document.getElementById("enterLetter").innerHTML = "Please enter a letter";
    return;
  }

  var pre = "False";
  for (var i = 0; i < guessed.length; i++){
    if (guessed[i] == getWord){
      document.getElementById("enterLetter").innerHTML = "Please enter a different letter";
      pre = "True";
      console.log("Duplicate letter");
    }
  }

  if (pre == "False"){
    guessed.push(getWord);
    document.getElementById("guessed").innerHTML = guessed;
    guess -= 1;
  }

  totalGuesses += 1;
  console.log(totalGuesses + "total guesses");
  var success = 0;
  for (var i = 0; i < selectedWord.length; i++){
    if (include(guessed, selectedWord[i])){
      newBlank = newBlank + selectedWord[i];
    } else if (selectedWord[i] == getWord){
      newBlank = newBlank + getWord;
    } else if (newBlank[i] != "_"){
      newBlank = newBlank + "_";
    }
  }


  var selectedWordArray = selectedWord.split("");
  for (var i = 0; i < selectedWord.length; i++){
    if (include(selectedWord, getWord)){
      success = 1;
    }
  }

  if (success == 1 && pre == "False"){
    guess += 1;
  }
  document.getElementById("guesses").innerHTML = guess;
  document.getElementById("wordSelection").innerHTML = newBlank;
  if (newBlank == selectedWord) {
    document.getElementById("lose").innerHTML = "You Win";
    guessWord();
  } else if (guess == 0){
    document.getElementById("lose").innerHTML = "You Lose";
    guessWord();
  }
});
