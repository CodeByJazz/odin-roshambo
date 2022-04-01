//create a function called computerPlay.
//computerPlay should randomly return either
//'rock', 'paper', or 'scissors'.

const shapes = ["rock", "paper", "scissors"];

function computerPlay() {
  return shapes[Math.floor(Math.random() * 3)];
}

//create a function called playerSelection
//store data inside a const variable called playerSelection
//make user input case-insensitive by converting input to lowercase
//return playerSelection

function playerSelection() {
  const playerSelection = prompt("Rock, Paper, Scissors, SHOOT!").toLowerCase();
  return playerSelection;
}

//assign computerPlay to a constant variable called computerSelection

const computerSelection = computerPlay();

//create a function that plays a round of Rock Paper Scissors
//set two parameters for the function: playerSelection and computerSelection
//create a conditional statement with all possible player outcomes
//use the AND && operator to run the code if both operands are true
//

function playRound(playerSelection, computerSelection) {
  //rock choice
  if (playerSelection == "rock" && computerSelection == "scissors") {
    return "You Win! Rock beats scissors!";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return "You Lose! Paper beats rock.";
  } else if (playerSelection === "rock" && computerSelection === "rock") {
    return "Its a Draw! Try again.";
  }
  //paper choice
  else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You win! Paper beats rock!";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "You Lose. Scissors beats paper";
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    return "It's a Draw! Try again.";
  }
  //scissors choice
  else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You win! Scissors beats paper!";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "You Lose. Rock beats scissors";
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "scissors"
  ) {
    return "It's a Draw! Try again.";
  } else {
    return "Something went horribly wrong.";
  }
}

// invoke the function in the console
console.log(playRound(playerSelection(), computerSelection));
//return computerSelection
console.log(computerSelection);
