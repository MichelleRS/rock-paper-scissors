/* get DOM elements */
const rockBtn = document.querySelector("[name='rock']");
const paperBtn = document.querySelector("[name='paper']");
const scissorsBtn = document.querySelector("[name='scissors']");
const roundNumSpan = document.getElementById("roundNumSpan");
const resultsMessage = document.getElementById("resultsMessage");

/* state */
let roundNum = 0;
let ties = 0;
let playerWins = 0;
let computerWins = 0;

/* events */
window.addEventListener("load", () => {
  // listen for player selection and send to handleRound()
  rockBtn.addEventListener("click", () => {
    handleRound("rock");
  });
  paperBtn.addEventListener("click", () => {
    handleRound("paper");
  });
  scissorsBtn.addEventListener("click", () => {
    handleRound("scissors");
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
  // display round number in results section
  roundNumSpan.textContent = roundNum;
  // get computer selection
  let computerSelection = getComputerSelection();

  /* handle selection: update state and results message */
  // handle tie
  if (playerSelection === computerSelection) {
    ties++;
    resultsMessage.textContent = "Tie";
  }
  // handle player win
  else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerWins++;
    resultsMessage.textContent = "Player wins";
  }
  // handle computer win
  else {
    computerWins++;
    resultsMessage.textContent = "Computer wins";
  }

  displayScoreTally();
}

function displayScoreTally() {
  // get DOM elements
  let tiesEl = document.getElementById("ties");
  let playerWinsEl = document.getElementById("playerWins");
  let computerWinsEl = document.getElementById("computerWins");

  // set text content to current state
  tiesEl.textContent = ties;
  playerWinsEl.textContent = playerWins;
  computerWinsEl.textContent = computerWins;
}
