//User name 

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h2');

function setUserName() {
let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = ("It's you against the machines!" + "\n" + "Go on " + myName + "!");
    }
}

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = ("Hello back " + storedName + ", it's still you against the machines." + "\n" + "Go get them!");
  }
  
let playerSelection;
let computerSelection;
let playerScore = 0;
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