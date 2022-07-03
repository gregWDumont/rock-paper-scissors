

let playerScore = 0;
let computerScore = 0;
let roundWinner = ''

// Event listener 

/* document.addEventListener("click", weaponListener);
function weaponListener(event) {
    let element = event.target;
    console.log(event.target);
    let rock = "rock";
    let paper = "paper";
    let scissors = "scissors";
    if (element.classList.contains("weapon") && element.id === ("rock")) {
        playRound(rock);
        console.log("submitted rock")
    }
    else if (element.classList.contains("weapon") && element.id === ("paper")) {
        playRound(paper);
        console.log("submitted paper")
    }
    else if (element.classList.contains("weapon") && element.id === ("scissors")) {
        playRound(scissors);
        console.log("submitted scissors")
    }
} */

// computer choice

const myArray = ["rock", "paper", "scissors"];

function computerPlay() {
    return myArray[Math.floor(Math.random() * myArray.length)];
}

// game functions

const rockSelected = document.getElementById('rock');
const paperSelected = document.getElementById('paper');
const scissorsSelected = document.getElementById("scissors");
const computerRockSelected = document.getElementById("robrock");
const computerPaperSelected = document.getElementById("robpaper");
const computerScissorsSelected = document.getElementById("robscissors");

rockSelected.addEventListener('click', () => handleClick('rock'))
paperSelected.addEventListener('click', () => handleClick('paper'))
scissorsSelected.addEventListener('click', () => handleClick('scissors'))

const computerSelection = computerPlay();
function playRound(playerSelection, computerSelection) {
    if (computerSelection == "rock") {
        computerRockSelected.style.backgroundColor = "white";}
    else if (computerSelection == "paper") {
        computerPaperSelected.style.backgroundColor = "white";
    }
    else if (computerSelection == "scissors") {
        computerScissorsSelected.style.backgroundColor = "white";
    }
    let playerSelectionString = String(playerSelection);
    let playerSelectionLowercase = playerSelectionString.toLowerCase();
    if (playerSelectionLowercase === "rock") {
        rockSelected.style.backgroundColor = "white";
    }
    else if (playerSelectionLowercase === "paper") {
        paperSelected.style.backgroundColor = "white";
    }
    else if (playerSelectionLowercase === "scissors") {
        scissorsSelected.style.backgroundColor = "white";
    }
    if (
    (playerSelection === 'paper') && (computerSelection === 'rock') || 
    (playerSelection === 'rock' && computerSelection === 'scissors') || 
    (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        const message = document.querySelector("#msg").innerHTML = `You win`;
        playerScore++
        roundWinner = 'player'
        const currentPlayerScore = document.querySelector("#playerscore").innerHTML = `Score: ${playerScore}`;    }
    else if (playerSelection === computerSelection) {
        roundWinner = 'none'
    }
    else { 
        const message = document.querySelector("#msg").innerHTML = `You lose`;
        computerScore++
        roundWinner = 'robot'
        const currentComputerScore = document.querySelector("#computerscore").innerHTML = `Score: ${computerScore}`;
    }
  }

  function game() {
    return playRound(playerSelection, computerSelection)
}

// Game over

  function isGameOver() {
    return playerScore === 5 || computerScore === 5
  }
