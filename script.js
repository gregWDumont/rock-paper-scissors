//User name request and text update

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
        item.addEventListener("click", playSound);
    })
});
  
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


// computer choice

const myArray = ["Rock", "Paper", "Scissors"];

function computerPlay() {
    return myArray[Math.floor(Math.random() * myArray.length)];
}

// game over

  function isGameOver() {
    return playerScore === 5 || computerScore === 5
  }

console.log(computerPlay());