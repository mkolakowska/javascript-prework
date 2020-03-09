// Get the modal

let modal = document.getElementById("read-modal");

// Get the button that opens the modal

let btn = document.getElementById("read");

// Get the <span> element that closes the modal

let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

const score = document.getElementById("score");
const restart = document.getElementById("restart");
const updateScore = {
  pScore: 0,
  cScore: 0
};
function playGame(playerInput) {
  clearMessages();
  function getMoveName(argMoveId) {
    if (argMoveId == 1) {
      return "rock";
    } else if (argMoveId == 2) {
      return "paper";
    } else if (argMoveId == 3) {
      return "scissors";
    }
  }

  let randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log("The drawn number is: " + randomNumber);

  let computerMove = getMoveName(randomNumber);

  /*printMessage("My move is: " + computerMove);*/

  console.log("Player entered: " + playerInput);

  let playerMove = getMoveName(playerInput);

  /*printMessage("Your move is: " + playerMove);*/

  function displayResult(argComputerMove, argPlayerMove) {
    printMessage("I played " + argComputerMove + ", and you " + argPlayerMove);
    if (
      (computerMove == "rock" && playerMove == "paper") ||
      (computerMove == "scissors" && playerMove == "rock") ||
      (computerMove == "paper" && playerMove == "scissors")
    ) {
      printMessage("You Win");
      updateScore.pScore++;
    } else if (
      (computerMove == "paper" && playerMove == "rock") ||
      (computerMove == "rock" && playerMove == "scissors") ||
      (computerMove == "scissors" && playerMove == "paper")
    ) {
      printMessage("I Win");
      updateScore.cScore++;
    } else if (computerMove === playerMove) {
      printMessage("It's A Draw");
    }
  }
  displayResult(computerMove, playerMove);
  //Update Score

  score.innerHTML = `<h2>Player: ${updateScore.pScore}</h2>
  <h2>Computer: ${updateScore.cScore}</h2>`;
}

// Restart game
function restartGame() {
  updateScore.pScore = 0;
  updateScore.cScore = 0;
  score.innerHTML = `
  <h2>Player: 0</h2>
  <h2>Computer: 0</h2>
  `;
  messages.innerHTML = `Choose an option`;
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
document.getElementById("restart").addEventListener("click", function() {
  restartGame();
});
