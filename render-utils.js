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

  // create rock button element
  let rockButton = document.createElement("button");
  // set attributes
  setAttributes(rockButton, { type: "button", name: "rock" });
  // create text node and append to button
  let rockText = document.createTextNode("Rock");
  rockButton.appendChild(rockText);

  // create paper button element
  let paperButton = document.createElement("button");
  // set attributes
  setAttributes(paperButton, { type: "button", name: "paper" });
  // create text node and append to button
  let paperText = document.createTextNode("Paper");
  paperButton.appendChild(paperText);

  // create scissors button element
  let scissorsButton = document.createElement("button");
  //  set attributes
  setAttributes(scissorsButton, { type: "button", name: "scissors" });
  // create text node and append to button
  let scissorsText = document.createTextNode("Scissors");
  scissorsButton.appendChild(scissorsText);

  // append h2 and buttons to div
  divEl.append(h2, rockButton, paperButton, scissorsButton);

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
  // create text node for h2 element
  let h2Text = document.createTextNode("TODO results message");
  h2El.appendChild(h2Text);

  // TODO player selection
  // TODO computer selection
  // TODO 'Next Round' button

  // append all to div element
  divEl.append(h2El);

  // return div element
  return divEl;
}

// helper function for setting multiple attributes
function setAttributes(el, attrs) {
  for (let key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}
