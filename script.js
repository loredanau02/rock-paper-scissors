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
