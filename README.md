# Rock Paper Scissors

A player versus computer game of rock-paper-scissors.

## Project Status

- Currently refactoring

- Complete:
  - JavaScript MVP
  - Layout design
- Up next:
  - Style planning

## Project Planning

### Components Refactor

- main
  - section#gameControls
    - div#playerSelections
      - buttons for player selections: rock, paper, scissors
    - div#roundResults
      - round results message
      - button to start next round
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
- [] build renderRoundResults function
- [] in #gameControls section:
  - [] when player makes a selection, toggle to #roundResults div
  - [] when player clicks "Next Round", toggle to #playerSelections div

## Resources

[Setting multiple attributes for an element at once with JavaScript.](https://stackoverflow.com/questions/12274748/setting-multiple-attributes-for-an-element-at-once-with-javascript) Stack Overflow.
