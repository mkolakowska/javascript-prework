function playGame(playerInput) {
  clearMessages();
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

  printMessage("My move is: " + computerMove);

  console.log("Player entered: " + playerInput);

  let playerMove = getMoveName(playerInput);

  printMessage("Your move is: " + playerMove);

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
      printMessage("It is a tie!");
    } else {
      printMessage("Try again!");
    }
  }

  displayResult(computerMove, playerMove);
}

document.getElementById("play-rock").addEventListener("click", function() {
  playGame("1");
});
document.getElementById("play-paper").addEventListener("click", function() {
  playGame("2");
});
document.getElementById("play-scissors").addEventListener("click", function() {
  playGame("3");
});
