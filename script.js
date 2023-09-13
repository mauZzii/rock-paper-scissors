const PLAYERBTN = document.querySelectorAll('.player-btn');
const ROUND = document.querySelector('.round-info');
const ROUNDOUTPUT = document.querySelector('.round-output-text');
const PLAYAGAINBTN = document.querySelector('.play-again');

let computerSelection, playerSelection;
let playerLives = 5;
let computerLives = 5;
let roundNum = 0;

function roundCount() {
    roundNum += 1;
    ROUND.textContent = `Round: ${roundNum}`;
    return roundNum;
}

function computerChoice() {
    let choice = ['rock', 'spock', 'scissors'];
    computerSelection = choice[(Math.floor(Math.random() * choice.length))]; //gets random choice from the array
    
    const compIcon = document.querySelector('.enemy-icon');

    compIcon.classList.remove('iconoir-emoji-quite', 'iconoir-drag-hand-gesture',
    'iconoir-spock-hand-gesture', 'iconoir-peace-hand');

    if (computerSelection === 'rock') {
        compIcon.classList.add('iconoir-drag-hand-gesture');
    } else if (computerSelection === 'spock') {
        compIcon.classList.add('iconoir-spock-hand-gesture');
    } else {
        compIcon.classList.add('iconoir-peace-hand');
    }
    return computerSelection;
};

// function playerChoice() {

//     return playerSelection;
// };

//this functions plays the round and then returns the lives left
function countLives(playerSelection, computerSelection) {  
    switch (true) {
      case (playerSelection === computerSelection):
        ROUNDOUTPUT.textContent = `Two ${playerSelection}s means a tie, no lives lost, try again!`;
        break;
      case (playerSelection === 'rock' && computerSelection === 'scissors'):
      case (playerSelection === 'scissors' && computerSelection === 'spock'):
      case (playerSelection === 'spock' && computerSelection === 'rock'):
        ROUNDOUTPUT.textContent = `Impressive! The enemy lost a life, because the power of your ${playerSelection} beat his ${computerSelection}!`;
        computerLives -= 1;
        break;
      default:
        ROUNDOUTPUT.textContent = `Unfortunate.. You lost a life, because your ${playerSelection} lacks power against the enemy's ${computerSelection}!`;
        playerLives -= 1;
        break;
    }
  
    const lives = document.querySelector('.lives');
    lives.textContent = `Your Lives: ${playerLives} ︱ Enemy's Lives: ${computerLives}`;
    return [playerLives, computerLives];
}

function endGame(playerHealth, computerHealth) {
    if (playerHealth === 0 || computerHealth === 0) {
        PLAYERBTN.forEach((button) => {
            button.setAttribute('disabled', '');
            button.classList.add('disabled-button', 'opacity');
      });
  
    const enemyIcon = document.querySelector('.enemy-icon');
    enemyIcon.style.opacity = '0.5';
  
    const gameEndText = document.querySelector('.end-text');
    if (playerLives > computerLives) {
        ROUNDOUTPUT.textContent = 'The enemy has no lives left! He barely holds himself together in one piece.';
        gameEndText.textContent = 'You Won';
        gameEndText.style.color = '#484848';
    } else {
        ROUNDOUTPUT.textContent = 'Oof.. You have no lives left. Your enemy is laughing at you!';
        gameEndText.textContent = 'You Lost!';
        gameEndText.style.color = '#484848';
    }
    PLAYAGAINBTN.style.visibility = 'visible';
    }
}

function resetGame() {
    PLAYAGAINBTN.addEventListener('click', () => {
      window.location.reload();
    });
}

function playGame() {
    PLAYERBTN.forEach((item) => {
        item.addEventListener('click', () => {
            const playerIcons = document.querySelectorAll('.player-icon');
            if (item.classList.contains('rock-btn')) {
                playerSelection = 'rock';
              } else if (item.classList.contains('spock-btn')) {
                playerSelection = 'spock';
              } else {
                playerSelection = 'scissors';
              }
    roundCount();
    countLives(playerSelection, computerChoice());
    endGame(playerLives, computerLives);
    resetGame();
        });
    });
    
};

playGame();
