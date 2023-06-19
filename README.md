# Rock Paper Scissors

A player versus computer game of rock-paper-scissors.

## Project Status

- Complete:
  - JavaScript MVP
  - Layout design
  - Toggle refactor
- Up next:
  - CSS

## Project Planning

### Components Refactor

- main
  - section#gameControls
    - div#playerSelections
      - buttons for player selection: rock, paper, scissors
    - div#roundResults
      - round winner
      - player selection
      - computer selection
      - 'Next Round' button
  - section#scoreboard
    - prominent display of scores: player, computer
    - round number
    - reset scoreboard button

### JavaScript Tasks

- [x] build index.html
- [x] get random computer selection
- [x] on player selection click:
  - [x] send player selection to handleRound()
  - [x] increment and display round number
  - [x] update score tally state and results message based on round result (tie, player win, computer win)
- [x] add 'Reset Score' button

### Refactor Tasks

- [x] render player selections on page load
  - [x] render-utils: refactor with helper function to set multiple attributes
- [x] build renderRoundResultsDiv function
- [x] in #gameControls section:
  - [x] when player makes a selection, toggle to #roundResults div
  - [x] when player clicks "Next Round", toggle to #playerSelections div
- [x] change #scoreTally div to #scoreboard

## Resources

- [Setting multiple attributes for an element at once with JavaScript.](https://stackoverflow.com/questions/12274748/setting-multiple-attributes-for-an-element-at-once-with-javascript) Stack Overflow.

- Toggle first tested in my repo [javascript-practice > modular-components](https://github.com/MichelleRS/javascript-practice/tree/main/modular-components)
