/* References to HTML */

const gameInfoModal = document.querySelector("#game-info");
const showGameInfoBtn = document.querySelector("#get-started");
const closeGameInfoBtn = document.querySelector(".btn-close");

// When the user clicks the button, open the modal
showGameInfoBtn.addEventListener("click", () => {
  gameInfoModal.style.display = "block";
});

// When the user clicks on <span> (x), close the modal
closeGameInfoBtn.addEventListener("click", () => {
  gameInfoModal.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", event => {
  if (event.target == gameInfoModal) {
    gameInfoModal.style.display = "none";
  }
});

/* Game */
const game = () => {
  const scoreLabel = document.querySelector("#score");
  const score = {
    player: 0,
    computer: 0
  };

  //Play Game
  const playGame = playerInput => {
    const getMoveName = argMoveId => {
      if (argMoveId == 1) return "rock";
      else if (argMoveId == 2) return "paper";
      else if (argMoveId == 3) return "scissors";
    };

    const displayResult = (argComputerMove, argPlayerMove) => {
      printMessage(
        "I played " + argComputerMove + ", and you " + argPlayerMove
      );
      if (
        (computerMove == "rock" && playerMove == "paper") ||
        (computerMove == "scissors" && playerMove == "rock") ||
        (computerMove == "paper" && playerMove == "scissors")
      ) {
        printMessage("You Win");
        score.player++;
      } else if (computerMove === playerMove) {
        printMessage("It's A Draw");
      } else {
        printMessage("I Win");
        score.computer++;
      }
    };

    // Game round
    clearMessages();

    const computerMove = getMoveName(Math.floor(Math.random() * 3 + 1));
    const playerMove = getMoveName(playerInput);

    displayResult(computerMove, playerMove);

    scoreLabel.innerHTML = `<h2>Player: ${score.player}</h2>
    <h2>Computer: ${score.computer}</h2>`;
  };

  // Restart game
  const restartGame = () => {
    score.player = 0;
    score.computer = 0;
    scoreLabel.innerHTML = `<h2>Player: 0</h2><h2>Computer: 0</h2>`;
    messages.innerHTML = `Choose an option`;
  };

  document.getElementById("play-rock").addEventListener("click", () => {
    playGame("1");
  });
  document.getElementById("play-paper").addEventListener("click", () => {
    playGame("2");
  });
  document.getElementById("play-scissors").addEventListener("click", () => {
    playGame("3");
  });
  document.getElementById("btn-restart").addEventListener("click", () => {
    restartGame();
  });
};
game();
