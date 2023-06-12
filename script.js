/* get DOM elements */

/* state */

/* events */
window.addEventListener("load", () => {
  // get computer selection
  let computerSelection = getComputerSelection();
  console.log("computerSelection", computerSelection);
});

/* functions */
function getComputerSelection() {
  // initialize a variable to store random number between 0-2
  let randomNumber = Math.floor(Math.random() * 3);
  console.log("randomNumber", randomNumber);
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
