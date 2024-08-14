The project can be viewed on this link: https://loredanau02.github.io/rock-paper-scissors/

# Rock Paper Scissors Game

Welcome to the Rock Paper Scissors game! In this game, you will face off against a villainous AI in a battle to save the world. The game is played entirely from the console.

## How to Play

1. **Start the Game**: Open the `index.html` file in your browser.
2. **Make Your Move**: When prompted, enter "Rock", "Paper", or "Scissors" to make your move.
3. **Round Results**: The game will display the result of each round in the console.
4. **Game Results**: After 5 rounds, the game will display the final score and declare the winner.
5. **Play Again**: You will be asked if you want to play again. Confirm to continue the fight against the villainous AI or cancel to end the game.

## Files

- `index.html`: The main HTML file that links to the JavaScript file.
- `script.js`: Contains the game logic and functions.

## Functions

### `computerPlay()`

Returns a random choice of "Rock", "Paper", or "Scissors" for the computer.

### `playRound(playerSelection, computerSelection)`

Plays a single round of Rock Paper Scissors. Takes the player's and computer's selections as parameters and returns the result of the round.

### `capitalize(word)`

Helper function that capitalizes the first letter of a given word.

### `game()`

Plays a 5-round game of Rock Paper Scissors. Keeps score and reports the final winner. Allows the user to play again after the game ends.

## Example

```javascript
// Start the game
game();