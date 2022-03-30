//create a function called computerPlay.
//computerPlay should randomly return either,
//'Rock', 'Paper', or 'Scissors'.

function computerPlay() {
  const shapes = ["Rock", "Paper", "Scissors"];
  let choice = Math.floor(Math.random() * shapes.length);
  console.log(shapes[choice]);
}

//create a function that plays a round of Rock Paper Scissors.
//set two parameters for the function (playerSelection, computerSelection)
