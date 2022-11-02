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

//plays a single round of RPS given player and pc inputs
function playRound(playerSelection, computerSelection){
    
}

//changes user string into the same that getComputerChoice uses
function simplifyChoice(){
    let simpleChoice = -1;
    simpleChoice = getPlayerChoice();
    if (simpleChoice !== -1) {
        switch (simpleChoice){
            case '1': return 'scissors';
            case '2': return 'paper';
            case '3': return 'rock';
        }
    } else {
        console.warning('Invalid player input. func simplifyChoice received incorrect data')
    }
}

//prompts player for choice, checks for validity and returns
function getPlayerChoice(){
    let playerChoice = prompt('Welcome to RPS! Please choose your attack using an integer!:\n 1. Scissors\n 2. Paper\n 3. Rock', '');
    if (playerChoice > 0 && playerChoice < 4) {
        return playerChoice;
    }
    else {
        console.log('Invalid choice. Use 1, 2, or 3')
    }
}

console.log(simplifyChoice())