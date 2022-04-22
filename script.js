let playerChoice;
let playerSelection;
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
  if (playerSelection === computerSelection) {
    drawScore++;
    document.getElementById("game-result").innerHTML = draw;
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    playerScore++;
    document.getElementById("game-result").innerHTML = playerWinRound;
    document.getElementById("player-score").innerHTML = playerScore;
  }
  //paper choice
  else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    document.getElementById("game-result").innerHTML = playerWinRound;
    document.getElementById("player-score").innerHTML = playerScore;
  }
  //scissors choice
  else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    document.getElementById("game-result").innerHTML = playerWinRound;
    document.getElementById("player-score").innerHTML = playerScore;
  } else {
    computerScore++;
    document.getElementById("game-result").innerHTML = computerWinRound;
    document.getElementById("computer-score").innerHTML = computerScore;
  }
}

function scoreBoard() {
  let scoreCountPlayer = document.querySelector("p");
  scoreCountPlayer.innerHTML = "Your Score: " + playerScore;

  document.getElementById("computerScore").innerHTML =
    "Computer's Score: " + computerScore;

  document.createElement("p").innerHTML =
    "The computer chose: " + computerSelection;
}

document.getElementById("rock").addEventListener("click", function () {
  playGame("rock", computerSelection);
  scoreBoard();
});

document.getElementById("paper").addEventListener("click", function () {
  playGame("paper", computerSelection);
  scoreBoard();
});

document.getElementById("scissors").addEventListener("click", function () {
  playGame("scissors", computerSelection);
  scoreBoard();
});

// create a function that plays a round of Rock Paper Scissors

// let playRound = (playerSelection, computerSelection) => {
//   //rock choice
//   if (playerSelection === computerSelection) {
//     return draw;
//   } else if (playerSelection == "rock" && computerSelection == "scissors") {
//     return playerWinRound;
//   }
//   //paper choice
//   else if (playerSelection === "paper" && computerSelection === "rock") {
//     return playerWinRound;
//   }
//   //scissors choice
//   else if (playerSelection === "scissors" && computerSelection === "paper") {
//     return playerWinRound;
//   } else {
//     return computerWinRound;
//   }
// };

//create a variable for playerScore
//create a variable for computerScore
//create a variable for a draw

// let playerScore = 0;
// let computerScore = 0;
// let drawScore = 0;

//create a variable for the outcomes of each round/game

// let playerWinRound = "Player wins this round!";
// let computerWinRound = "Computer wins this round!";
// let draw = "It's a draw. Try again!";
// let playerWinGame = "Congratulations! You win the game!";
// let computerWinGame = "You Lose. Computer wins the game!";

//create a loop that plays 5 rounds of roshambo,
//asks player for a selection with the prompt function
//logs the result of each round to the console
//keeps score of each player

// function game() {
//   //   for (let i = 0; i < 5; i++) {
//   //     playerSelection = prompt("Rock, Paper, Scissors, SHOOT!").toLowerCase();
//   const computerSelection = computerPlay();
//   let roundResult = playRound(playerSelection, computerSelection);
//   console.log(roundResult);
//   gameScore(roundResult);
//   console.log("Your Score is " + playerScore);
//   console.log("The computer's score is " + computerScore);
// }

//create a function that increments the winners score
//determine a winner based on the highest score

// function gameScore(roundResult) {
//   if (roundResult === playerWinRound) {
//     playerScore++;
//   } else if (roundResult === draw) {
//     drawScore++;
//   } else {
//     computerScore++;
//   }
// }
