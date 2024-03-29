getComputerChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  let computerChoice = choices[Math.floor(Math.random() * 3)];
  return computerChoice;
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

function game(playerSelection) {
  let computerSelection = getComputerChoice()
  let result = playRound(playerSelection, computerSelection)
  
  if (result.startsWith("Player")) {
        return "player"
    } else if (result.startsWith('Computer')) {
        return "computer"
    } else {
        return "tie"
    }
}

// Used event delegation to lower the amount of listeners i'd have to use

const userChoice = document.querySelector(".select-buttons");
const gameResult = document.querySelector(".results")

userChoice.addEventListener("click", (e) => {
  let target = e.target;
  let result = null

  switch (target.id) {
    case "rock":
      result = game(target.id)
    case "scissors":
      result = game(target.id)
      
    case "paper":
      result = game(target.id)

    // Incrementing the wins by targeting the id of the game result
    let scoreBoard = document.getElementById(result)
    scoreBoard.innerHTML = parseInt(document.getElementById(result).innerHTML) + 1
    // Making sure a tie isn't counted as a win
    if (scoreBoard.innerHTML == 5 && result !== "tie") {
        alert(`${result} wins!`)

        // Bringing each value to zero when someone wins
        let resetAll = document.querySelectorAll('small')
        resetAll.forEach((value) => {
            value.innerHTML = 0
        })
    }
  }
 
});
