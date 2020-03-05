function getMoveName(argMoveId) {
  if (argMoveId == 1) {
    return "rock";
  } else if (argMoveId == 2) {
    return "paper";
  } else if (argMoveId == 3) {
    return "scissors";
  } else {
    printMessage("I don't know this move id " + argMoveId + ".");
    return "unknown move";
  }
}

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log("The drawn number is: " + randomNumber);

let computerMove = getMoveName(randomNumber);

/*
if (randomNumber == 1) {
  computerMove = "rock";
} else if (randomNumber == 2) {
  computerMove = "paper";
} else if (randomNumber == 3) {
  computerMove = "scissors";
}
*/

printMessage("My move is: " + computerMove);

let playerInput = prompt("Choose your move! 1: rock, 2: paper, 3: scissors.");

console.log("Player entered: " + playerInput);

let playerMove = getMoveName(playerInput);

printMessage("Your move is: " + playerMove);

/*
if (playerInput == "1") {
  playerMove = "rock";
} else if (playerInput == "2") {
  playerMove = "paper";
} else if (playerInput == "3") {
  playerMove = "scissors";
}
*/
function displayResult(argComputerMove, argPlayerMove) {
  printMessage("I played " + argComputerMove + ", and you " + argPlayerMove);
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
    printMessage("It is a tie");
  } else {
    printMessage("Try again!");
  }
}

displayResult(computerMove, playerMove);

/*
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
*/
