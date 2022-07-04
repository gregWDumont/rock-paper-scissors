//Ask user name

let userName = prompt("Enter you name: ");
if (userName != null) { 
    document.getElementById("player-name").innerText = userName;      
};

//function to get a random computer move

let weapArray = ['rock', 'paper', 'scissors'];

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
    if (computerScore == 5 || playerScore == 5) {
        endGame();
    }
    else {
        computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
    }
  }

//Function to define scores

let playerScore = 0;
let computerScore = 0;

//Game functionalities

let isSameRock = 'rock'.toUpperCase() === 'Rock'.toUpperCase() === 'ROCK'.toLocaleUpperCase();
let isSamePaper = 'paper'.toUpperCase() === 'Paper'.toUpperCase() === 'PAPER'.toLocaleUpperCase();
let isSameScissors = 'scissors'.toUpperCase() === 'Scissors'.toUpperCase() === 'SCISSORS'.toLocaleUpperCase();


//Rules of the game, score and winner declaration

let winner = "";
let infoResult = "";

function playRound(playerSelection, computerSelection) 
{
    computerSelection = computerPlay();
    if (computerScore < 5 || playerScore < 5) {
        if (playerSelection == computerSelection) {
                winner = 'Nobody wins';
                infoResult = "It's a tie";
                document.getElementById("winner").style.color = "white";
        }
        else if (
            (playerSelection == 'rock') && (computerSelection == 'paper') ||
            (playerSelection == 'paper') && (computerSelection == 'scissors') ||
            (playerSelection == 'scissors') && (computerSelection == 'rock')
            ) {
                computerScore++;
                winner = 'Computer wins';
                infoResult = 'You lose, ' + computerSelection + ' beats ' + playerSelection;
                document.getElementById("winner").style.color = "red";
                document.getElementById("user-img").src = "./user-img/Cartman-loses-Fit2.png";
                }
        else if (
            (playerSelection == 'paper') && (computerSelection == 'rock') ||
            (playerSelection == 'rock') && (computerSelection == 'scissors') ||
            (playerSelection == 'scissors') && (computerSelection == 'paper')
        ) {
            playerScore++;
            winner = userName + ' wins';
            infoResult = 'You win, ' + playerSelection + ' beats ' + computerSelection;
            document.getElementById("winner").style.color = "green";
            document.getElementById("user-img").src = "./user-img/Cartman-wins-Fit2.png"
        };
        document.getElementById('winner').innerHTML = winner;
        document.getElementById('message').innerHTML = infoResult;
        document.getElementById('computer-score').innerHTML = 'Score = ' + computerScore;
        document.getElementById('player-score').innerHTML = 'Score = ' + playerScore;
    }
    else {
        endGame();
    }
}

//Game over

function endGame() {
    if (playerScore === 5) {
        document.getElementById('winner').innerHTML = userName + ' wins the game';
    }
    else if (computerScore === 5) {
        document.getElementById('winner').innerHTML = ' The computer wins the game'
    }
  }

//Doc style

const style = document.createElement('style');
style.innerHTML = `

    #user-img {
        margin: 5px;
        height: 50px;
        width: 50px;
        
    }
    
    #rock:hover, #paper:hover, #scissors:hover{
        background-color: white;
        cursor: pointer;
      }

    #winner {
        text-shadow: 4px 5px 0px black;
    }
    `;
document.head.appendChild(style);