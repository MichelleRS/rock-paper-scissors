export function renderPlayerSelectionsDiv() {
  // create div element
  const divEl = document.createElement("div");
  // set id
  divEl.setAttribute("id", "playerSelections");

  // create h2 element
  const h2 = document.createElement("h2");
  // create text node for h2 element
  let h2Text = document.createTextNode("Make your selection");
  // append text node to h2 element
  h2.appendChild(h2Text);

  // create buttons for rock, paper, and scissors
  // TODO refactor with type
  // rock
  let rockButton = document.createElement("button");
  rockButton.setAttribute("name", "rock");
  let rockText = document.createTextNode("Rock");
  rockButton.appendChild(rockText);
  // paper
  let paperButton = document.createElement("button");
  paperButton.setAttribute("name", "paper");
  let paperText = document.createTextNode("Paper");
  paperButton.appendChild(paperText);
  // scissors
  let scissorsButton = document.createElement("button");
  scissorsButton.setAttribute("name", "scissors");
  let scissorsText = document.createTextNode("Scissors");
  scissorsButton.appendChild(scissorsText);

  // append h2 and buttons to div
  divEl.append(h2, rockButton, paperButton, scissorsButton);

  // return div element
  return divEl;
}

/* helper functions */
// TODO helper function for setting multiple attributes
