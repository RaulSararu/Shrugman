let cities = ["london", "cairo"];

let answer = "";
let maxWrong = 10;
let mistakes = 0;
let guessed = [];
let wordStatus = null;

//1 Function random word

function randomWord() {
  answer = cities[Math.floor(Math.random() * cities.length)];
}

//2 Generate buttons

//3 Guess

function handleTheGuess(chosenLetter) {
  guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;

  if (answer.indexOf(chosenLetter) >= 0) {
    guessedWord();
    checkIfGameWon();
  } else if (answer.indexOf(chosenLetter) === -1) {
    mistakes++;
    updateMIstakes();
    checkIfGameLost();
    updatePic();
  }
}


// 4 Update picture

// 5 Check if game won

function checkIfGameWon() {
    if(wordStatus === answer) {
        console.log("You won!!")
    }
}

// 6 Check if game lost

function checkIfGameLost() {
    if (mistakes === maxWrong) {
        console.log("The answer was " + answer)
    }
    console.log("You lost!")
}

// 7 Guessed Word

function guessedWord() {
    wordStatus = answer.split("").map(letter => (guessed.indexOf(letter) >= 0 ? letter: " _ ")).join("");
}

// 8 Update mistakes

// 9 Reset

function reset() {
    mistakes = 0;
    guessed = [];

    randomWord();
    guessedWord();
    updateMIstakes();
}
