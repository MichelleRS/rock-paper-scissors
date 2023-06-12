/* get DOM elements */
const rockBtn = document.querySelector("[name='rock']");
const paperBtn = document.querySelector("[name='paper']");
const scissorsBtn = document.querySelector("[name='scissors']");

/* state */
let roundNum = 0;
console.log("roundNum", roundNum);

/* events */
window.addEventListener("load", () => {
  // listen for player selection and send to handleRound()
  rockBtn.addEventListener("click", () => {
    handleRound("rock");
    console.log("roundNum", roundNum);
  });
  paperBtn.addEventListener("click", () => {
    handleRound("paper");
    console.log("roundNum", roundNum);
  });
  scissorsBtn.addEventListener("click", () => {
    handleRound("scissors");
    console.log("roundNum", roundNum);
  });
});

/* functions */
function getComputerSelection() {
  // initialize a variable to store random number between 0-2
  let randomNumber = Math.floor(Math.random() * 3);
  // declare a variable for computer selection
  let computerSelection = "";
  // evaluate the randomNumber generated, assign computerSelection the value of rock, paper, or scissors
  switch (randomNumber) {
    case 0:
      computerSelection = "rock";
      break;
    case 1:
      computerSelection = "paper";
      break;
    case 2:
      computerSelection = "scissors";
      break;
  }
  return computerSelection;
}

// handle round
function handleRound(playerSelection) {
  // increment round number
  roundNum++;
  // get computer selection
  let computerSelection = getComputerSelection();
  // declare a variable for round result
  let roundResult = "";

  // handle tie
  if (playerSelection === computerSelection) {
    console.log("playerSelection", playerSelection);
    console.log("computerSelection", computerSelection);
    console.log("Tie!");
  }
  // handle player win
  else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    console.log("playerSelection", playerSelection);
    console.log("computerSelection", computerSelection);
    console.log("Player wins!");
  }
  // handle computer win
  else {
    console.log("playerSelection", playerSelection);
    console.log("computerSelection", computerSelection);
    console.log("Computer wins!");
  }
}
