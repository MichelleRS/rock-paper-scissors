import {
  renderPlayerSelectionsDiv,
  renderRoundResultsDiv,
} from "./render-utils.js";

/* get DOM elements */
const gameControls = document.getElementById("gameControls");
const roundNumSpan = document.getElementById("roundNumSpan");
const resultsMessage = document.getElementById("resultsMessage");
const resetScoresBtn = document.getElementById("resetScores");
const playerSelectionsDiv = renderPlayerSelectionsDiv();
const roundResultsDiv = renderRoundResultsDiv();

/* state */
let playerWins = 0;
let computerWins = 0;
let ties = 0;
let roundNum = 0;

/* events */
window.addEventListener("load", () => {
  // handle game controls
  handleGameControls();
});

// reset game
resetScoresBtn.addEventListener("click", () => {
  location.reload();
});

/* functions */
function handleGameControls() {
  // display player selections and round results in #gameControls
  gameControls.append(playerSelectionsDiv, roundResultsDiv);
  // hide round results
  roundResultsDiv.classList.add("hidden");

  // handle player selection clicks
  handlePlayerSelection();
  // handle 'Next Round' button click
  handleNextRound();
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

function handleNextRound() {
  // get button
  const nextRoundBtn = document.getElementById("nextRoundBtn");
  // listen for click
  nextRoundBtn.addEventListener("click", async () => {
    // hide round results and display player selections
    toggleGameControls();
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

  /* handle selections: 
    - update state
    - set text content for round winner, player and computer selection
    - hide player selections div and display round results div
  */
  // handle tie
  if (playerSelection === computerSelection) {
    ties++;
    roundWinnerEl.textContent = "This round is a tie.";
    playerSelectionEl.textContent = `Player chose ${playerSelection}`;
    computerSelectionEl.textContent = `Computer chose ${computerSelection}`;
    toggleGameControls();
  }
  // handle player win
  else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerWins++;
    roundWinnerEl.textContent = "Player wins this round.";
    playerSelectionEl.textContent = `Player chose ${playerSelection}`;
    computerSelectionEl.textContent = `Computer chose ${computerSelection}`;
    toggleGameControls();
  }
  // handle computer win
  else {
    computerWins++;
    roundWinnerEl.textContent = "Computer wins this round.";
    playerSelectionEl.textContent = `Player chose ${playerSelection}`;
    computerSelectionEl.textContent = `Computer chose ${computerSelection}`;
    toggleGameControls();
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

// use to toggle between player selections and round results
function toggleGameControls() {
  playerSelectionsDiv.classList.toggle("hidden");
  roundResultsDiv.classList.toggle("hidden");
}
