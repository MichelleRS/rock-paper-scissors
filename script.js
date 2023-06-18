import {
  renderPlayerSelectionsDiv,
  renderRoundResultsDiv,
} from "./render-utils.js";

/* get DOM elements */
const gameControls = document.getElementById("gameControls");
const roundNumSpan = document.getElementById("roundNumSpan");
const resultsMessage = document.getElementById("resultsMessage");
const resetScoresBtn = document.getElementById("resetScores");

/* state */
let playerWins = 0;
let computerWins = 0;
let ties = 0;
let roundNum = 0;

/* events */
window.addEventListener("load", () => {
  // TODO handle game controls
  // display player selections
  displayPlayerSelections();
  // handle player selection click
  handlePlayerSelection();
  // display round results
  displayRoundResults();
});

// reset game
resetScoresBtn.addEventListener("click", () => {
  location.reload();
});

/* functions */
function displayPlayerSelections() {
  // get #playerSelections div element
  let playerSelections = renderPlayerSelectionsDiv();
  // append #playerSelections div element to #gameControls section
  gameControls.append(playerSelections);
}

function handlePlayerSelection() {
  // handle rock
  const rockBtn = document.querySelector("[name='rock']");
  rockBtn.addEventListener("click", () => {
    handleRound("rock");
  });
  // handle paper
  const paperBtn = document.querySelector("[name='paper']");
  paperBtn.addEventListener("click", () => {
    handleRound("paper");
  });
  // handle scissors
  const scissorsBtn = document.querySelector("[name='scissors']");
  scissorsBtn.addEventListener("click", () => {
    handleRound("scissors");
  });
}

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
    // resultsMessage.textContent = "Tie";
    console.log("This round is a tie.");
  }
  // handle player win
  else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerWins++;
    // resultsMessage.textContent = "Player wins";
    console.log("Player wins this round.");
  }
  // handle computer win
  else {
    computerWins++;
    // resultsMessage.textContent = "Computer wins";
    console.log("Computer wins this round.");
  }

  displayScoreTally();
  displayRoundResults(resultsMessage);
  console.log("resultsMessage", resultsMessage);
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

function displayRoundResults() {
  let roundResults = renderRoundResultsDiv();
  gameControls.append(roundResults);
}
