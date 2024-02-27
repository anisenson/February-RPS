// Set starting score to 0
let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

// variables
const playerScoreElement = document.getElementById('playerScore');
const computerScoreElement = document.getElementById('ComputerScore');
const outcomeElement = document.getElementById('outcome');
let roundsplayedElement = document.getElementById('roundsPlayed')


const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');
const resetBtn = document.getElementById('resetBtn');
const computerInput = document.getElementById('computerInput')
const playerInput = document.getElementById('playerInput')



// Event Listeners (Googled bc rest wasn't working)
rockBtn.addEventListener('click', () => playGame('rock'));
paperBtn.addEventListener('click', () => playGame('paper'));
scissorsBtn.addEventListener('click', () => playGame('scissors'));
resetBtn.addEventListener('click', resetGame);

// function to actually play the game
function playGame(playerChoice) {
    const choices = ['rock', 'paper', 'scissors']; //the choices
    const computerChoice = choices[Math.floor(Math.random() * 3)]; //math 

    // Update inputs
    playerInput.textContent = playerChoice;
    computerInput.textContent = computerChoice;

    // If else to Determine the winner (Googled)
    if (playerChoice === computerChoice) {
        outcomeElement.textContent = 'It\'s a tie!';
        roundsPlayed++;
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
       
    ) {
        outcomeElement.textContent = 'You win!';
        playerScore++; 
        roundsPlayed++;
    } else {
        outcomeElement.textContent = 'You lose!';
        computerScore++;
        roundsPlayed++;
    }

    // Update scores
    playerScoreElement.textContent = playerScore;
    computerScoreElement.textContent = computerScore;
    roundsplayedElement.textContent = `Rounds played: ${roundsPlayed}`
}

// Function to reset the game
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    roundsPlayed = 0;
    playerScoreElement.textContent = playerScore;
    computerScoreElement.textContent = computerScore;
    roundsplayedElement.textContent = `Rounds played: ${roundsPlayed}`
    outcomeElement.textContent = '';
}

// Alert message for name
let name = prompt("Please enter your name:");

if (name === null || !name.trim()) {
    alert("Please enter your name!");
    window.location.reload(); // Reload the page if the name is not entered
} else {
    alert("Hello " + name + "!");
    document.getElementById('userName').innerHTML = name;
}


