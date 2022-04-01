//create a function that plays a round of Rock Paper Scissors.
//set two parameters for the function (playerSelection (case-insensitive), computerSelection).
//return a string that declares the winner,
//'You Lose! Paper beats Rock.'

// if (playerSelection.toLowerCase() == "rock")

// function playRound(playerSelection, computerSelection) {
//   if (playerSelection === "rock" && computerSelection === "paper") {
//     return "You Lose! Paper beats Rock!";
//   } else if (playerSelection === "paper" && computerSelection === "scissors") {
//     return "You Lose! Scissors beats Paper!";
//   } else if (playerSelection === "scissors" && computerSelection === "rock") {
//     return "You Lose! Rock beats Scissors!";
//   } else if (playerSelection === computerSelection) {
//     return "It's a draw! Redemption awaits.";
//   } else {
//     return "YOU WIN!";
//   }
// }
// console.log(playRound(playerSelection, computerSelection));

//create a function called computerPlay.
//computerPlay should randomly return either,
//'rock', 'paper', or 'scissors'.

const shapes = ["rock", "paper", "scissors"];

function computerPlay() {
  return shapes[Math.floor(Math.random() * 3)];
}

//create a variable for user input that asks for the players selection
//make user input case-insensitive by converting input to lowercase

let userInput = prompt("Rock, Paper, Scissors, SHOOT!").toLowerCase();

//assign userInput to a constant variable called playerSelection

const playerSelection = userInput;

//assign computerPlay to a constant variable called computerSelection

const computerSelection = computerPlay();

//create a function that plays a round of Rock Paper Scissors.
//set two parameters for the function (playerSelection (case-insensitive), computerSelection).
//return a string that declares the winner,
//'You Lose! Paper beats Rock.'

// function playRound(playerSelection, computerSelection) {
//   if (
//     (playerSelection === "rock" && computerSelection === "paper") ||
//     (playerSelection === "paper" && computerSelection === "scissors") ||
//     (playerSelection === "scissors" && computerSelection === "rock")
//   ) {
//     console.log (
//       "You Lose! " + computerSelection + " beats" + playerSelection + " ."
//     );
//   } else if (
//     (computerSelection === "rock" && playerSelection === "paper") ||
//     (computerSelection === "paper" && playerSelection === "scissors") ||
//     (computerSelection === "scissors" && playerSelection === "rock")
//   ) {
//     console.log (
//       "You Win! " + playerSelection + " beats" + computerSelection + " ."
//     );
//   } else if (playerSelection == computerSelection) {
//     console.log ("It's a draw! Try again");
//   } else  ("You Lose!") ;
// }
// console.log(playRound());
// console.log(computerPlay());

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "paper") {
    console.log(
      "You Lose! " + computerSelection + " beats" + playerSelection + " ."
    );
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    console.log(
      "You Lose! " + computerSelection + " beats" + playerSelection + " ."
    );
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    console.log(
      "You Lose! " + computerSelection + " beats" + playerSelection + " ."
    );
  } else if (computerSelection === "rock" && playerSelection === "paper") {
    console.log(
      "You Win! " + playerSelection + " beats" + computerSelection + " ."
    );
  } else if (computerSelection === "paper" && playerSelection === "scissors") {
    console.log(
      "You Win! " + playerSelection + " beats" + computerSelection + " ."
    );
  } else if (computerSelection === "scissors" && playerSelection === "rock") {
    console.log(
      "You Win! " + playerSelection + " beats" + computerSelection + " ."
    );
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    console.log("It's a draw! Try again");
  } else if (playerSelection === "rock" && computerSelection === "rock") {
    console.log("It's a draw! Try again");
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "scissors"
  ) {
    console.log("It's a draw! Try again");
  } else {
    console.log("You Lose!");
  }
}
console.log(playRound());
console.log(computerPlay());
