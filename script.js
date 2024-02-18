// Set starting score to 0
let playerScore = 0;
let computerScore = 0;

// variables
const playerScoreElement = document.getElementById('playerScore');
const computerScoreElement = document.getElementById('ComputerScore');
const outcomeElement = document.getElementById('outcome');

const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');
const resetBtn = document.getElementById('resetBtn');


// Event Listeners (Googled)
rockBtn.addEventListener('click', () => playGame('rock'));
paperBtn.addEventListener('click', () => playGame('paper'));
scissorsBtn.addEventListener('click', () => playGame('scissors'));
resetBtn.addEventListener('click', resetGame);

// function to actually play the game
function playGame(playerChoice) {
    const choices = ['rock', 'paper', 'scissors']; //the choices
    const computerChoice = choices[Math.floor(Math.random() * 3)]; //math 

  