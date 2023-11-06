getComputerChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  let computerChoice = choices[Math.floor(Math.random() * 3)];
  return computerChoice;
};

getPlayerSelection = () => {
  getInput = prompt("Pick your move");
  return getInput.toLowerCase();
};

playRound = (playerSelection, computerChoice) => {
  if (playerSelection === computerChoice) {
    return "Tie!";
  } else if (playerSelection === "rock" && computerChoice === "scissors") {
    return "Player wins!";
  } else if (playerSelection === "rock" && computerChoice === "paper") {
    return "Computer wins!";
  } else if (playerSelection === "scissors" && computerChoice === "rock") {
    return "Computer wins!";
  } else if (playerSelection === "scissors" && computerChoice === "paper") {
    return "Player wins!";
  } else if (playerSelection === "paper" && computerChoice === "scissors") {
    return "Computer wins!";
  } else if (playerSelection === "paper" && computerChoice === "rock") {
    return "Player wins!";
  }
};

function game() {
  let playerWins = 0;
  let computerWins = 0;
  let ties = 0;

  console.log(`Wins: ${playerWins}, Losses: ${computerWins}, Ties: ${ties}`);
}

// Used event delegation to lower the amount of listeners i'd have to use

const userChoice = document.querySelector(".select-buttons");

userChoice.addEventListener("click", (e) => {
  let target = e.target;

  switch (target.id) {
    case "rock":
      console.log("ROCK");
      break;
    case "scissors":
      console.log("SCISSORS");
      break;
    case "paper":
      console.log("PAPER");
      break;
  }
});
