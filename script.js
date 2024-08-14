// Function to get computer's play
function computerPlay() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomChoice = choices[Math.floor(Math.random() * choices.length)];
  return randomChoice;
}

// Function to play a single round
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

// Helper function to capitalize the first letter
function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  console.log(
    "Welcome, brave hero! The villainous AI has challenged you to a game of Rock, Paper, Scissors. Win to save the world!"
  );

  let playAgain = true;
  while (playAgain) {
    for (let i = 0; i < 5; i++) {
      const playerSelection = prompt(
        "Round " + (i + 1) + ": Choose Rock, Paper or Scissors:"
      );
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

    // final score and who won
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
        `It's a tie! The battle continues. Final score: ${playerScore} to ${computerScore}`
      );
    }
    playAgain = confirm(
      "Do you want to play again and continue the fight against the villainous AI?"
    );
  }
  console.log("Thank you for playing, brave hero! The world is safe for now.");
}
