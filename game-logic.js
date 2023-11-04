getComputerChoice = () => {
    const choices = ['rock', 'paper', 'scissors']
    let computerChoice = choices[(Math.floor(Math.random() * 3))]
    return computerChoice
};

getPlayerSelection = () => {
    getInput = prompt('Pick your move')
    return getInput.toLowerCase()
};

playRound = (playerSelection, computerChoice) => {
    if (playerSelection === computerChoice) {
        return "Tie!"
    } else if (playerSelection === 'rock' && computerChoice === 'scissors') {
        return "Player wins!"
    } else if (playerSelection === 'rock' && computerChoice === 'paper') {
        return "Computer wins!"
    } else if (playerSelection === 'scissors' && computerChoice === 'rock') {
        return "Computer wins!"
    } else if (playerSelection === 'scissors' && computerChoice === 'paper') {
        return "Player wins!"
    } else if (playerSelection === 'paper' && computerChoice === 'scissors') {
        return "Computer wins!"
    } else if (playerSelection === 'paper' && computerChoice === 'rock') {
        return "Player wins!"
    }
};

function game() {
    let playerWins = 0
    let computerWins = 0
    let ties = 0
    for (let rounds = 0; rounds !== 5; rounds++) {
        let player = getPlayerSelection()
        let computer = getComputerChoice()
        let result = playRound(player, computer)
        if (result.startsWith("Player")) {
            playerWins ++
        } else if (result.startsWith('Computer')) {
            computerWins ++
        } else {
            ties ++
        }
        console.log(result)
    }
    console.log(`Wins: ${playerWins}, Losses: ${computerWins}, Ties: ${ties}`)
}

game()