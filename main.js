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
    } else if ((pSelection === 'scissors' && cSelection === 'paper') || 
    (pSelection === 'paper' && cSelection === 'rock') || 
    (pSelection === 'rock' && cSelection === 'scissors')){
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
    if (roundResult === 0){
        console.log('It\'s a tie! No winner here yet');
        return roundResult;
    } else if (roundResult === 1) {
        console.log('You win this one!');
        return roundResult;
    } else if (roundResult === 2){
        console.log('No dice... You\'ll get em next time');
        return roundResult;
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
    //add condition for being past the 1st round to change message
    let playerChoice = prompt('Welcome to RPS! Please choose your attack using an integer!:\n 1. Scissors\n 2. Paper\n 3. Rock', '');
    if (playerChoice > 0 && playerChoice < 4) {
        return simplifyChoice(playerChoice);
    }
    else {
        console.log('Invalid choice. Use 1, 2, or 3')
    }
}

function game(){
    //a match lasts 5 rounds. tab points during each loop. after the last round print the winner.
    let roundNum = 1;
    let playerPoints = 0;
    let computerPoints = 0;

    for (i = 0; i < 5; i++){
        //fix the match printing issue by incorporating into getPlayerChoice()
        console.log(`Match: ${roundNum}!`)
        let result = playRound();
        if (result === 1){
            playerPoints += 1;
        } else if (result === 2) {
            computerPoints += 1;
        }
        roundNum++;
    }

    let matchResults = `${playerPoints} to ${computerPoints}!`;
    console.log(matchResults);

    if (playerPoints > computerPoints){
        console.log('You win! I don\'t know how you did it...');
    } else if (computerPoints > playerPoints){
        console.log('Sorry pal. Guess it wasn\'t in the silicon cards.');
    } else {
        console.log('A tie?! Mein Gott! Time for a rematch.');
    }

}

game();