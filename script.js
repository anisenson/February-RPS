// Set starting score to 0
let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
let totalRounds = 5; // Define the total number of rounds

// variables
const playerScoreElement = document.getElementById('playerScore');
const computerScoreElement = document.getElementById('ComputerScore');
const outcomeElement = document.getElementById('outcome');
let roundsplayedElement = document.getElementById('roundsPlayed');

const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');
const resetBtn = document.getElementById('resetBtn');
const computerInput = document.getElementById('computerInput');
const playerInput = document.getElementById('playerInput');

// Event Listeners
rockBtn.addEventListener('click', () => playGame('rock'));
paperBtn.addEventListener('click', () => playGame('paper'));
scissorsBtn.addEventListener('click', () => playGame('scissors'));
resetBtn.addEventListener('click', resetGame);

// function to actually play the game
function playGame(playerChoice) {
    const choices = ['rock', 'paper', 'scissors']; //the choices
    const computerChoice = choices[Math.floor(Math.random() * 3)]; //random computer choice

    // Update inputs
    playerInput.textContent = playerChoice;
    computerInput.textContent = computerChoice;

    // Determine the winner
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

    // Increase rounds played
    roundsPlayed++;

    // Display total rounds played
    roundsplayedElement.textContent = `Total Rounds Played: ${roundsPlayed}`;

    // Check if all rounds played
    if (roundsPlayed === totalRounds) {
        endGame();
    }
}

// Function to end the game
function endGame() {
    // Hide the "Choose your move" header
    document.getElementById('moveHeader').style.display = 'none';

    // Hide the Buttons 
    document.getElementById('buttonRow').style.display = 'none';

    // Display total rounds played
    roundsplayedElement.textContent = `Total Rounds Played: ${roundsPlayed}`;

    // Declare overall winner/loser
    let resultMessage = '';
    if (playerScore > computerScore) {
        resultMessage = 'Good job, you actually won something! 🏆';
    } else if (playerScore < computerScore) {
        resultMessage = 'Womp Womp, how do you lose to the computer? 💀';
    } else {
        resultMessage = 'you tied 😐';
    }

    // Display message
    outcomeElement.textContent = resultMessage;
}

// Function to reset the game
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    roundsPlayed = 0;
    playerScoreElement.textContent = playerScore;
    computerScoreElement.textContent = computerScore;
    roundsplayedElement.textContent = '';
    outcomeElement.textContent = '';

        // put back the "Choose your move" header
        document.getElementById('moveHeader').style.display = '';

        // put back the Buttons 
        document.getElementById('buttonRow').style.display = '';
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
