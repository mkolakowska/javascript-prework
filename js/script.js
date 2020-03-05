let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log("The drawn number is: " + randomNumber);

let computerMove = "unknown move";

if (randomNumber == 1) {
  computerMove = "rock";
} else if (randomNumber == 2) {
  computerMove = "paper";
} else if (randomNumber == 3) {
  computerMove = "scissors";
}

printMessage("My move is: " + computerMove);

let playerInput = prompt("Choose your move! 1: rock, 2: paper, 3: scissors.");

console.log("Player entered: " + playerInput);

let playerMove = "unknown move";

if (playerInput == "1") {
  playerMove = "rock";
} else if (playerInput == "2") {
  playerMove = "paper";
} else if (playerInput == "3") {
  playerMove = "scissors";
}

printMessage("Your move is: " + playerMove);

if (
  (computerMove == "rock" && playerMove == "paper") ||
  (computerMove == "scissors" && playerMove == "rock") ||
  (computerMove == "paper" && playerMove == "scissors")
) {
  printMessage("You win!");
} else if (
  (computerMove == "paper" && playerMove == "rock") ||
  (computerMove == "rock" && playerMove == "scissors") ||
  (computerMove == "scissors" && playerMove == "paper")
) {
  printMessage("I win!");
} else if (
  (computerMove == "rock" && playerMove == "rock") ||
  (computerMove == "paper" && playerMove == "paper") ||
  (computerMove == "scissors" && playerMove == "scissors")
) {
  printMessage("Draw!");
} else {
  printMessage("Try again!");
}
