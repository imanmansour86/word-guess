// declare variables to reference DOM elements
// word bank stored in array

// function where user presses a button to start the game
// use setInterval() to set at 60 seconds and countdown at every 1 seconds (1,000 ms)
// have a function display the parts of the word with underscores as missing letters
// function with eventListeners that enable users to guess letters
// function to display outcome message and update scoreboard

// have a function display the parts of the word with underscores as missing letters
// use random number generator to pick an element in the array as the word

// function with eventListeners that enable users to guess letters
// reference eventListener to a variable
// use for loop to compare the eventListener to the element at the index of the array
// If true, display the letter
// Else, do nothing

// function that uses localStorage to keep track of wins and losses
// use JSON.stringify to turn the word into a string for localStorage

// function that reads localStorage to display on the web browser for the user to see
// use JSON.parse to turn the JSON string into actual usable information to display

// function to display outcome message and update scoreboard
// If user wins, increment wins and display message
// Else statement when user losses, increment losses and display message

var time = 10;
var start = document.getElementById("start-game");
var timeText = document.getElementById("time");
let enteredTxt = document.getElementById("letter");
let answer = document.getElementById("answer");
var words = ["array", "visual", "concatenate", "increment"];
var randomWord = words[Math.floor(Math.random() * words.length)]; //choose a random word

var userGuess = [];

start.addEventListener("click", function setTime() {
  playGame();
  var timeInterval = setInterval(function () {
    if (time > 0) {
      timeText.textContent = "Time remaining " + time;
      time--;
    }
    if (time === 0) {
      clearInterval(timeInterval);
      timeText.textContent = "Time is up!";
    }
  }, 1000);
});
//randomword= [array]

enteredTxt.addEventListener("input", (e) => {
  console.log(e);
  console.log(`Key "${e.data}" input  [event: input]`);
  for (i = 0; i < randomWord.length; i++) {
    if (randomWord.includes(e.data)) {
      console.log("found a match");
      //   answer.textContent = e.data;
    } else {
      console.log("no match");
    }
  }
});

function playGame() {
  //populate the letter to be guessed with "_"
  for (let i = 0; i < randomWord.length; i++) {
    userGuess[i] = "_";
    console.log("random word is " + randomWord);
  }
  letterToGuess = userGuess.join(" ");
  console.log(letterToGuess);
  answer.textContent = letterToGuess;
}
