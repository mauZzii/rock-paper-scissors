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

function playerChoice() {
    PLAYERBTN.forEach((item) => {
        item.addEventListener('click', () => {
            const playerIcons = document.querySelectorAll('.player-icon');
            if (item.classList.contains('rock-btn')) {
                playerSelection = 'rock';
              } else if (weapon.classList.contains('spock-btn')) {
                playerSelection = 'spock';
              } else {
                playerSelection = 'scissors';
              }
        })
    });
    return playerSelection;
};

function countLives(playerSelection, computerSelection) {  
    switch (true) {
      case (playerSelection === computerSelection):
        ROUNDOUTPUT.innerText = `Two ${playerSelection}s means a tie, no lives lost, try again!`;
        break;
      case (playerSelection === 'rock' && computerSelection === 'scissors'):
      case (playerSelection === 'scissors' && computerSelection === 'spock'):
      case (playerSelection === 'spock' && computerSelection === 'rock'):
        ROUNDOUTPUT.textContent = `Impressive! The enemy lost a life, because the power of your ${playerSelection} beat his ${computerSelection}!`;
        computerLives -= 1;
        break;
      default:
        ROUNDOUTPUT.innerText = `Unfortunate.. You lost a life, because your ${playerSelection} lacks power against the enemy's ${computerSelection}!`;
        playerLives -= 1;
        break;
    }
  
    const lives = document.querySelector('.lives');
    lives.innerText = `Your Lives: ${playerLives} ︱ Enemy's Lives: ${computerLives}`;
    return [playerLives, computerLives];
  }

function playGame() {

}
