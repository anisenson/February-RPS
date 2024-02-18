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

    // If else to Determine the winner (Googled)
    if (playerChoice === computerChoice) {
        outcomeElement.textContent = 'It\'s a tie!';
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        outcomeElement.textContent = 'You win!';
        playerScore++;
    } else {
        outcomeElement.textContent = 'You lose!';
        computerScore++;
    }

    // Update scores
    playerScoreElement.textContent = playerScore;
    computerScoreElement.textContent = computerScore;
}

