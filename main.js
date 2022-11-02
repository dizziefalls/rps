//returns a random number between 1 ans 3
function getRandNum(){
    let choice = Math.floor(Math.random() * 10) % 3;
    return choice;
}

//uses randNum to determine pc choice
function getComputerChoice(){
    let num = getRandNum();
    switch(num) {
        case 0: return 'scissors';
        case 1: return 'paper';
        case 2: return 'rock';
    }
}

function determineWinner(pSelection, cSelection){
    //0 = tie, 1 = win, 2 = loss
    let result = 0
    if (pSelection === cSelection) {
        return result = 0;
    } else if ((pSelection === 'scissors' && cSelection === 'paper') || (pSelection === 'paper' && cSelection === 'rock') || (pSelection === 'rock' && cSelection === 'scissors')){
       return result = 1;
    } //lazy but what can I say...
    else {
       return result = 2;
    }
}

//plays a single round of RPS given player and pc inputs
function playRound(){
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    console.log('You chose:', playerSelection, '\nThe computer chose:', computerSelection);
    const roundResult = determineWinner(playerSelection, computerSelection);
    //TODO: Add pPoints and cPoints funcs that are called here
    if (roundResult === 0){
        console.log('It\'s a tie! No winner here yet');
    } else if (roundResult === 1) {
        console.log('You win this one!');
    } else if (roundResult === 2){
        console.log('No dice... You\'ll get em next time');
    } else{
        console.log('Well I made a goober somewhere...');
    }
}

//changes user string into the same that getComputerChoice uses
function simplifyChoice(playerInput){
    let simpleChoice = playerInput;
    switch (simpleChoice){
        case '1': return 'scissors';
        case '2': return 'paper';
        case '3': return 'rock';
        default: console.warn('Invalid player input. func simplifyChoice received incorrect data');
    }
}

//prompts player for choice, checks for validity and returns
function getPlayerChoice(){
    let playerChoice = prompt('Welcome to RPS! Please choose your attack using an integer!:\n 1. Scissors\n 2. Paper\n 3. Rock', '');
    if (playerChoice > 0 && playerChoice < 4) {
        return simplifyChoice(playerChoice);
    }
    else {
        console.log('Invalid choice. Use 1, 2, or 3')
    }
}

function game(){
    
}

playRound();