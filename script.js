/**
 * Generates a random choice for the computer.
 * 
 * @returns {string} The computer's choice: "Rock", "Paper", or "Scissors".
 */
function computerPlay() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomChoice = choices[Math.floor(Math.random() * choices.length)];
  return randomChoice;
}

/**
 * Plays a single round of Rock, Paper, Scissors.
 * 
 * @param {string} playerSelection - The player's choice.
 * @param {string} computerSelection - The computer's choice.
 * @returns {string} The result of the round.
 */
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return "It's a tie!";
  }

  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return `You Win! ${capitalize(playerSelection)} beats ${capitalize(
      computerSelection
    )}`;
  } else {
    return `You Lose! ${capitalize(computerSelection)} beats ${capitalize(
      playerSelection
    )}`;
  }
}

/**
 * Capitalizes the first letter of a word.
 * 
 * @param {string} word - The word to be capitalized.
 * @returns {string} The word with the first letter capitalized.
 */
function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

/**
 * Prompts the player to make a selection and validates the input.
 * 
 * @param {number} round - The current round number.
 * @returns {string|null} The player's selection or null if the game is cancelled.
 */
function getPlayerSelection(round) {
  let playerSelection;
  while (true) {
    playerSelection = prompt(
      "Round " + round + ": Choose Rock, Paper or Scissors:"
    );
    if (playerSelection === null) {
      alert("Game cancelled. The world is in danger!");
      return null;
    }
    if (["rock", "paper", "scissors"].includes(playerSelection.toLowerCase())) {
      return playerSelection;
    } else {
      alert("Invalid choice. Please enter Rock, Paper, or Scissors.");
    }
  }
}

function displayFinalScore(playerScore, computerScore) {
  if (playerScore > computerScore) {
    console.log(
      `Congratulations, hero! You have defeated the villainous AI! Final score: ${playerScore} to ${computerScore}`
    );
  } else if (computerScore > playerScore) {
    console.log(
      `Oh no! The villainous AI has won this time. Final score: ${computerScore} to ${playerScore}. Try again to save the world!`
    );
  } else {
    console.log(
      `It's a tie! Start your battle again and save the world. Final score: ${playerScore} to ${computerScore}`
    );
  }
}

/**
 * Plays a single game of 5 rounds.
 */
function playGame() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const playerSelection = getPlayerSelection(i + 1);
    if (playerSelection === null) {
      return; // Game was cancelled
    }
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);

    console.log(
      `Round ${i + 1}: You chose ${capitalize(
        playerSelection
      )}, Computer chose ${capitalize(computerSelection)}.`
    );
    console.log(result);

    if (result.startsWith("You Win")) {
      playerScore++;
    } else if (result.startsWith("You Lose")) {
      computerScore++;
    }
    // score report after every round
    console.log(
      `Current Score: You ${playerScore} - Computer ${computerScore}`
    );
  }

  displayFinalScore(playerScore, computerScore);
}

/**
 * Main function to start and manage the game.
 */
function game() {
  console.log(
    "Welcome, brave hero! The villainous AI has challenged you to a game of Rock, Paper, Scissors. Win to save the world!"
  );

  let playAgain = true;
  while (playAgain) {
    playGame();
    playAgain = confirm(
      "Do you want to play again and continue the fight against the villainous AI?"
    );
  }
  console.log("Thank you for playing, brave hero! The world is safe for now.");
}

// Start the game
game();
