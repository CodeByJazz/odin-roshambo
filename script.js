let playerScore = 0;
let computerScore = 0;
let drawScore = 0;

//computerselection

function computerPlay() {
  let computerChoices = ["rock", "paper", "scissors"];
  let randomChoice = [Math.floor(Math.random() * 3)];
  return computerChoices[randomChoice];
}

let playerWinRound = "Player wins this round!";
let computerWinRound = "Computer wins this round!";
let draw = "It's a tie. Try again!";
let playerWinGame = "Congratulations! You win the game!";
let computerWinGame = "You Lose. Computer wins the game!";

function playRound(playerSelection, computerSelection) {
  console.log(`Player Selected: "${playerSelection}"`);
  console.log(`Computer selected: "${computerSelection}"`);
  if (playerSelection === computerSelection) {
    drawScore++;
    document.getElementById("round-result").innerHTML = draw;
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    playerScore++;
    document.getElementById("round-result").innerHTML = playerWinRound;
    document.getElementById("player-score").innerHTML = playerScore;
  }
  //paper choice
  else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    document.getElementById("round-result").innerHTML = playerWinRound;
    document.getElementById("player-score").innerHTML = playerScore;
  }
  //scissors choice
  else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    document.getElementById("round-result").innerHTML = playerWinRound;
    document.getElementById("player-score").innerHTML = playerScore;
  } else {
    computerScore++;
    document.getElementById("round-result").innerHTML = computerWinRound;
    document.getElementById("computer-score").innerHTML = computerScore;
  }
}

function game(playerSelection) {
  let player = playerSelection;
  let computer = computerPlay();

  playRound(player, computer);

  if (playerScore === 5) {
    document.getElementById("game-result").innerHTML =
      "Cogratulations! YOU WIN THE GAME!";
    document.getElementById("round-result").innerHTML = "";
  } else if (computerScore === 5) {
    document.getElementById("game-result").innerHTML =
      "Sorry, you lost. Computer Wins the game!";
    document.getElementById("round-result").innerHTML = "";
  } else if (playerScore > 5) {
    document.getElementById("game-result").innerHTML = "GAME OVER.";
    document.getElementById("round-result").innerHTML = "";
  } else if (playerScore > 5) {
    document.getElementById("game-result").innerHTML = "GAME OVER.";
    document.getElementById("round-result").innerHTML = "";
  }
}

document.getElementById("rock").addEventListener("click", () => {
  game("rock");
});

document.getElementById("paper").addEventListener("click", () => {
  game("paper");
});

document.getElementById("scissors").addEventListener("click", () => {
  game("scissors");
});

document.getElementById("reset-game").addEventListener("click", function () {
  location.reload();
});
