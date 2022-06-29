let playerSelection;
let playerScore = 0;
let computerSelection;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    if (
    (playerSelection === 'Paper') && (computerSelection === 'Rock') || 
    (playerSelection === 'Rock' && computerSelection === 'Scissors') || 
    (playerSelection === 'Rock' && computerSelection === 'Scissors')
    ) {
        playerScore++
        roundWinner = userName
    }

    else if (playerSelection === computerSelection) {
        roundWinner = 'None'
    }
    else { 
        computerScore++
        roundWinner = 'Robot'
    }
    updateScoreMessage(roundWinner, playerSelection, computerSelection);
  }

const myArray = ["Rock", "Paper", "Scissors"];

function computerPlay() {
    return myArray[Math.floor(Math.random() * myArray.length)];
}
console.log(computerPlay());