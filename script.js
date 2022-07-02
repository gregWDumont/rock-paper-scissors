//User name request and text update
/*
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = ("Hello " + myName + "." + "\n" + "Play or die, lose and die...");
    }
}

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = ("Look who's back!" + "\n" + "I guess the last time wasn't enough for you, " + storedName);
  }

  //function to display text

  let i = 0;
  let txt = 'Are you ready?';
  let speed = 50;
  
  function typeWriter() {
      if (i < txt.length) {
          document.getElementById("gameh1").innerHTML += txt.charAt(i);
          i++;
          setTimeout(typeWriter, speed);
      }
  }

// Function to hide start div and show end div
let startContainer = document.getElementById('startcontainer');
let btn = document.querySelector("#startbutton");

btn.addEventListener('click', function(){
    startContainer.style.opacity = 0;
    startContainer.style.transform = 'scale(0)';
// Add timeout with length matching animation-duration 
    window.setTimeout(function(){
        startContainer.style.display = 'none';
    },700); 
    setTimeout(() => {  typeWriter(); }, 1000);
// Add event listener to all of the game buttons
    gameButtons = document.querySelectorAll(".gameselection").forEach(item => {
        item.addEventListener("click");
    })
}); */
  
// Game events
// Computer and user score

let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    if (
    (playerSelection === 'Paper') && (computerSelection === 'Rock') || 
    (playerSelection === 'Rock' && computerSelection === 'Scissors') || 
    (playerSelection === 'Scissors' && computerSelection === 'Paper')
    ) {
        playerScore++
        roundWinner = 'player'
    }

    else if (playerSelection === computerSelection) {
        roundWinner = 'none'
    }
    else { 
        computerScore++
        roundWinner = 'robot'
    }
    updateScoreMessage(roundWinner, playerSelection, computerSelection);
  }


// computer choice

const myArray = ["Rock", "Paper", "Scissors"];

function computerPlay() {
    return myArray[Math.floor(Math.random() * myArray.length)];
}

// Game over

  function isGameOver() {
    return playerScore === 5 || computerScore === 5
  }

const scoreInfo = document.getElementById('scoreInfo')
const scoreMessage = document.getElementById('scoreMessage')
const playerScorePara = document.getElementById('playerScore')
const computerScorePara = document.getElementById('computerScore')
const playerSign = document.getElementById('playerSign')
const computerSign = document.getElementById('computerSign')
const rockClick = document.getElementById('#Rock')
const paperClick = document.getElementById('#Paper')
const scissorsClick = document.getElementById('#Scissors')
const rockRobClick = document.getElementById('#RobRock')
const paperRobClick = document.getElementById('#RobPaper')
const scissorsRobClick = document.getElementById('#RobScissors')

const endgameModal = document.getElementById('endgameModal')
const endgameMsg = document.getElementById('endgameMsg')
const overlay = document.getElementById('overlay')
const restartBtn = document.getElementById('restartBtn')

rockClick.addEventListener('click', () => handleClick('#Rock'))
paperClick.addEventListener('click', () => handleClick('#Paper'))
scissorsClick.addEventListener('click', () => handleClick('#Scissors'))
restartBtn.addEventListener('click', restartGame)
overlay.addEventListener('click', closeEndgameModal)

function handleClick(playerSelection) {
    if (isGameOver()) {
      openEndgameModal()
      return
    }
  
    const computerSelection = computerPlay()
    playRound(playerSelection, computerSelection)
    updateChoices(playerSelection, computerSelection)
    updateScore()
  
    if (isGameOver()) {
      openEndgameModal()
      setFinalMessage()
    }
  }
  
  function updateScore() {
    if (roundWinner === 'none') {
      scoreInfo.textContent = "It's a tie!"
    } else if (roundWinner === 'player') {
      scoreInfo.textContent = 'You won!'
    } else if (roundWinner === 'robot') {
      scoreInfo.textContent = 'You lost!'
    }
  
    playerScorePara.textContent = `Player: ${playerScore}`
    computerScorePara.textContent = `Computer: ${computerScore}`
  }