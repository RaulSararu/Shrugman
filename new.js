let cars = [
  "toyota",
  "mercedes",
  "dacia",
  "hyundai",
  "skoda",
  "audi",
  "bmw",
  "suzuki",
  "kia",
  "honda",
  "nissan",
  "fiat",
  "mazda",
  "mini",
  "peugeot",
  "renault",
  "citroen",
  "volkswagen",
  "jaguar",
  "bentley",
  "ford",
  "chevrolet",
  "ferrari",
  "mustang",
];

let cities = [
  "tokio",
  "shanghai",
  "cairo",
  "beijing",
  "istanbul",
  "moscow",
  "paris",
  "berlin",
  "london",
  "bucharest",
  "budapest",
  "chicago",
  "madrid",
  "miami",
  "barcelona",
  "sofia",
  "brussels",
  "rome",
  "dublin",
];

let countries = [
  "spain",
  "portugal",
  "romania",
  "greece",
  "turkey",
  "bulgaria",
  "france",
  "germany",
  "albania",
  "poland",
  "italy",
  "croatia",
  "serbia",
  "russia",
  "ukraine",
  "sweden",
  "norway",
  "finland",
  "austria",
  "belgium",
  "ireland",
];

let answer = "";
let maxWrong = 10;
let mistakes = 0;
let guessed = [];
let wordStatus = null;

function generateRandomCountryWord() {
  answer = countries[Math.floor(Math.random() * countries.length)];
}

function generateRandomCarWord() {
  answer = cars[Math.floor(Math.random() * cars.length)];
}

function generateRandomCityWord() {
  answer = cities[Math.floor(Math.random() * cities.length)];
}

function generateButtons() {
  let buttonsHTML = "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .map(
      (letter) =>
        `
      <button
        
        id='` +
        letter +
        `'
        onClick="keyboardType(),guees('` +
        letter +
        `')"
      >
        ` +
        letter +
        `
      </button>
    `
    )
    .join("");

  document.getElementById("keyboard").innerHTML = buttonsHTML;
}

function guees(chosenLetter) {
  guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
  document.getElementById(chosenLetter).setAttribute("disabled", true);

  if (answer.indexOf(chosenLetter) >= 0) {
    guessedWord();
    checkIfGameWon();
  } else if (answer.indexOf(chosenLetter) === -1) {
    mistakes++;
    updateMistakes();
    checkIfGameLost();
    updateShrugmanPic();
  }
}

function updateShrugmanPic() {
  document.querySelector("#shrugmanPic").src =
    "./shrugman/" + mistakes + ".png";
}

function checkIfGameWon() {
  if (wordStatus === answer) {
    document.querySelector("#keyboard").innerHTML = "You Won!!!";
  }
}

function checkIfGameLost() {
  if (mistakes === maxWrong) {
    document.querySelector("#wordSpotlight").innerHTML =
      "The answer was: " + answer;
    document.querySelector("#keyboard").innerHTML = "You Lost!!!";
  }
}

function guessedWord() {
  wordStatus = answer
    .split("")
    .map((letter) => (guessed.indexOf(letter) >= 0 ? letter : " _ "))
    .join("");

  document.querySelector("#wordSpotlight").innerHTML = wordStatus;
}

function updateMistakes() {
  document.querySelector("#mistakes").innerHTML = mistakes;
}

function reset() {
  mistakes = 0;
  guessed = [];
  document.querySelector("#shrugmanPic").src = "./shrugman/0.png";

  guessedWord();
  updateMistakes();
  generateButtons();
}

document.querySelector("#maxWrong").innerHTML = maxWrong;

const audio = document.getElementById("audioMusic");

function bell() {
  audio.play();
}

const type = document.getElementById("type");
function keyboardType() {
  type.play();
}

generateButtons();
guessedWord();
