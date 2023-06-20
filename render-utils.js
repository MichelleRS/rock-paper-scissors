export function renderPlayerSelectionsDiv() {
  // create div element
  const divEl = document.createElement("div");
  // set id
  divEl.setAttribute("id", "playerSelections");

  // create h2 element
  const h2 = document.createElement("h2");
  // create text node for h2 element
  const h2Text = document.createTextNode("Make your selection");
  // append text node to h2 element
  h2.appendChild(h2Text);

  // create div element for buttons
  const buttonsDivEl = document.createElement("div");
  // set class attribute
  buttonsDivEl.setAttribute("class", "playerButtonsContainer");

  // create rock button element
  const rockButton = document.createElement("button");
  // set attributes
  setAttributes(rockButton, {
    type: "button",
    name: "rock",
    class: "playerButton",
  });
  // create text node and append to button
  const rockText = document.createTextNode("Rock");
  rockButton.appendChild(rockText);

  // create paper button element
  const paperButton = document.createElement("button");
  // set attributes
  setAttributes(paperButton, {
    type: "button",
    name: "paper",
    class: "playerButton",
  });
  // create text node and append to button
  const paperText = document.createTextNode("Paper");
  paperButton.appendChild(paperText);

  // create scissors button element
  const scissorsButton = document.createElement("button");
  // set attributes
  setAttributes(scissorsButton, {
    type: "button",
    name: "scissors",
    class: "playerButton",
  });
  // create text node and append to button
  const scissorsText = document.createTextNode("Scissors");
  scissorsButton.appendChild(scissorsText);

  // append buttons to button div
  buttonsDivEl.append(rockButton, paperButton, scissorsButton);

  // append all elements to div
  divEl.append(h2, buttonsDivEl);

  // return div element
  return divEl;
}

export function renderRoundResultsDiv() {
  // create div element
  const divEl = document.createElement("div");
  // set id
  divEl.setAttribute("id", "roundResults");

  // create h2 element for round results message
  const h2El = document.createElement("h2");
  // set id
  h2El.setAttribute("id", "roundWinnerEl");

  // create player selection paragraph element
  const playerSelectionEl = document.createElement("p");
  // set id
  playerSelectionEl.setAttribute("id", "playerSelectionEl");

  // create computer selection paragraph element
  const computerSelectionEl = document.createElement("p");
  // set id
  computerSelectionEl.setAttribute("id", "computerSelectionEl");

  // create 'Next Round' button element
  const buttonEl = document.createElement("button");
  // set id attribute
  buttonEl.setAttribute("id", "nextRoundBtn");
  // create text node for button
  const buttonText = document.createTextNode("Next Round");
  // append text node to buttonEl
  buttonEl.appendChild(buttonText);

  // append all elements to div element
  divEl.append(h2El, playerSelectionEl, computerSelectionEl, buttonEl);

  // return div element
  return divEl;
}

// helper function for setting multiple attributes
function setAttributes(el, attrs) {
  for (let key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}
