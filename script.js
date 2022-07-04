//Ask user name

let userName = prompt("Enter you name: ");
if (userName != null) { 
    document.getElementById("player-name").innerText = userName;      
};

//function to get a random computer move

let weapArray = ["rock", "paper", "scissors"];

function computerPlay() {
    return weapArray[Math.floor(Math.random() * weapArray.length)];
}


//function to get input from user

const rockClick = document.getElementById('rock');
const paperClick = document.getElementById('paper');
const scissorsClick = document.getElementById('scissors');

rockClick.addEventListener('click', () => handleClick('rock'));
paperClick.addEventListener('click', () => handleClick('paper'));
scissorsClick.addEventListener('click', () => handleClick('scissors'));


function handleClick(playerSelection) {
    if (gameOver()) {
      return
    }

    playRound(playerSelection, computerSelection)
    /*updateScore()*/
  
    if (gameOver()) {
      finalMessage()
    }
  }


//Function to define scores

let playerScore = 0;
let computerScore = 0;

/*document.querySelectorAll('choice').addEventListener("click", function() {
    let playerSelection = ""
    if (getPlayerSelection == 'rock') {
        playerSelection = 'rock';
    }
    else if (getPlayerSelection == 'paper') {
        playerSelection = 'paper';
    }
    else if (getPlayerSelection == 'scissors') {
        playerSelection = 'scissors';
    }
    return playerSelection;
})*/

//Game functionalities

let computerSelection = computerPlay();

//Rules of the game, score and winner declaration

function playRound(playerSelection, computerSelection) 
{
    let winner = "";
    let infoResult = "";
    if (playerSelection === computerSelection) {
            winner = 'Nobody wins';
            infoResult = "It's a tie";
    }
    else if (
        (playerSelection == 'rock') && (computerSelection == 'paper') ||
        (playerSelection == 'paper') && (computerSelection == 'scissors') ||
        (playerSelection == 'scissors') && (computerSelection == 'paper')
        ) {
            winner = 'Computer wins';
            infoResult = 'You lose, ' + playerSelection + ' beats ' + playerSelection;
            }
    else {
        winner = userName + ' wins';
        infoResult = 'You win, ' + playerSelection + ' beats ' + computerSelection;
    };
    document.getElementById('winner').innerHTML = winner;
    document.getElementById('message').innerHTML = infoResult;
}

//Game over

function gameOver() {
    return playerScore === 5 || computerScore === 5
  }

//Final message

function finalMessage() {
    return playerScore > computerScore
      ? (endgameMsg.textContent = 'You won!')
      : (endgameMsg.textContent = 'You lost...')
  }

/*

function game(computerScore, playerScore) {
    if (winner == 'Computer wins') {
        computerScore++;
    }
    else if (winner == "userName + ' wins'") {
        playerScore++;
    }
    document.getElementById('score').innerHTML = playerScore;
    }*/

