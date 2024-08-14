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

  console.log("Welcome to Rock, Paper, Scissors! Get ready to play 5 rounds against the computer.");

  for (let i = 0; i < 5; i++) {
      const playerSelection = prompt("Round " + (i + 1) + ": Choose Rock, Paper or Scissors:");
      const computerSelection = computerPlay();
      const result = playRound(playerSelection, computerSelection);

      console.log(`Round ${i + 1}: You chose ${capitalize(playerSelection)}, Computer chose ${capitalize(computerSelection)}.`);
      console.log(result);

      if (result.startsWith("You Win")) {
          playerScore++;
      } else if (result.startsWith("You Lose")) {
          computerScore++;
      }
      // score report after every round
      console.log(`Current Score: You ${playerScore} - Computer ${computerScore}`);
  }

  // final score and who won
  if (playerScore > computerScore) {
      console.log(`Congratulations! You won the game ${playerScore} to ${computerScore}!`);
  } else if (computerScore > playerScore) {
      console.log(`Oh no! The computer won the game ${computerScore} to ${playerScore}. Better luck next time!`);
  } else {
      console.log("It looks like the game is a tie!");
  }
}
