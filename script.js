//create a function called computerPlay.
//computerPlay should randomly return either
//'rock', 'paper', or 'scissors'.

const shapes = ["rock", "paper", "scissors"];

function computerPlay() {
  return shapes[Math.floor(Math.random() * 3)];
}

//create a function that plays a round of Rock Paper Scissors

function playRound(playerSelection, computerSelection) {
  //rock choice
  if (playerSelection === computerSelection) {
    return draw;
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    return playerWinRound;
  }
  //paper choice
  else if (playerSelection === "paper" && computerSelection === "rock") {
    return playerWinRound;
  }
  //scissors choice
  else if (playerSelection === "scissors" && computerSelection === "paper") {
    return playerWinRound;
  } else {
    return computerWinRound;
  }
}

//create a variable for playerScore
//create a variable for computerScore
//create a variable for a draw

let playerScore = 0;
let computerScore = 0;
let drawScore = 0;

//create a variable for the outcomes of each round/game

let playerWinRound = "Player wins this round!";
let computerWinRound = "Computer wins this round!";
let draw = "It's a draw. Try again!";
let playerWinGame = "Congratulations! You win the game!";
let computerWinGame = "You Lose. Computer wins the game!";

//create a loop that plays 5 rounds of roshambo,
//asks player for a selection with the prompt function
//logs the result of each round to the console
//keeps score of each player

function game() {
  for (let i = 0; i < 5; i++) {
    playerSelection = prompt("Rock, Paper, Scissors, SHOOT!").toLowerCase();
    const computerSelection = computerPlay();
    let roundResult = playRound(playerSelection, computerSelection);
    console.log(roundResult);
    gameScore(roundResult);
    console.log("Your Score is " + playerScore);
    console.log("The computer's score is " + computerScore);
  }
}

//create a function that increments the winners score
//determine a winner based on the highest score

function gameScore(roundResult) {
  if (roundResult === playerWinRound) {
    playerScore++;
  } else if (roundResult === draw) {
    drawScore++;
  } else {
    computerScore++;
  }
}
