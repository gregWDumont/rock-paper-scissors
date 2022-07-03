const weapArray = ["rock", "paper", "scissors"];

function computerPlay() {
    return weapArray[Math.floor(Math.random() * 3)];
}

let playerSelection = ""
let computerSelection = ""


function playRound(playerSelection, computerSelection) 
{
    let infoResult = "";
    if (playerSelection === computerSelection) {
            winner = none;
            infoResult = ("It's a tie");
    }
    else if (
        (playerSelection == 'rock') && (computerSelection == 'paper') ||
        (playerSelection == 'paper') && (computerSelection == 'scissors') ||
        (playerSelection == 'scissors') && (computerSelection == 'paper')
        ) {
            winner = 'computer';
            infoResult = 'You lose, ' + computerSelection + ' beats ' + playerSelection;
            }
    else {
        winner = 'user';
        infoResult = 'You win, ' + playerSelection + ' beats ' + computerSelection;
    };
    return infoResult;
}

console.log(playRound(rock, computerSelection));