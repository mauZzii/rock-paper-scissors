let computerSelection, userSelection; //declaring local variables for user and computer selections
let playerScore = 0; //keeping player score
let computerScore = 0; //keeping computer score

function computerChoice() {
    let choice = ['rock', 'paper', 'scissors'];
    let randomChoice = choice[(Math.floor(Math.random() * choice.length))]; //gets random choice from the array
    return randomChoice;
}
function playRound(userSelection, computerSelection) {
    let userChoice = prompt('rock, paper, or scissors: '); //prompts the user for a choice
    userSelection = userChoice.toLowerCase(); //allows for all typecases to be used - can type 'scISsorS' and it will return 'scissors'
    computerSelection = computerChoice();

    switch (true) { //looks for a true statement in cases
        case (userSelection === computerSelection): //looks for the userChoice and computerChoice to be the same
            console.log('Tie game');
            break;
        
            //winning cases
        case (userSelection == 'rock' && computerSelection == 'scissors'):
        case (userSelection == 'paper' && computerSelection == 'rock'): 
        case (userSelection == 'scissors' && computerSelection == 'paper'):
            console.log('You won');
            playerScore++; //add 1 to the player score for winning
            break;

        default: //return false when the player loses
            console.log('You lost');
            computerScore++; //add 1 to computer score
    }
}