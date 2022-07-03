//function to randomly 

const weapArray = ["rock", "paper", "scissors"];

function computerPlay() {
    return weapArray[Math.floor(Math.random() * 3)];
}

//Ask user name

    let userName = prompt("Enter you name: ");
    if (userName != null) { 
        document.getElementById("player-name").innerText = userName;      
    };


let computerSelection = computerPlay();
let playerScore = 0;
let computerScore = 0;


function playRound(playerSelection, computerSelection) 
{
    let winner = "";
    let infoResult = "";
    if (playerSelection === computerSelection) {
            winner = none;
            infoResult = "It's a tie";
    }
    else if (
        (playerSelection == 'rock') && (computerSelection == 'paper') ||
        (playerSelection == 'paper') && (computerSelection == 'scissors') ||
        (playerSelection == 'scissors') && (computerSelection == 'paper')
        ) {
            computerScore++;
            winner = 'computer';
            infoResult = 'You lose, ' + playerSelection + ' beats ' + computerSelection;
            }
    else {
        playerScore++;
        winner = userName;
        infoResult = 'You win, ' + playerSelection + ' beats ' + computerSelection;
    };
    document.getElementById('winner').innerHTML = winner;
    document.getElementById('message').innerHTML = infoResult;
    return infoResult;
}

console.log(playRound('rock', computerSelection));
