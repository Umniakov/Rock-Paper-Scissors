let playerChoice = document.querySelector('form');
let output = document.querySelector('.output');
let counter = document.querySelector('.counter');
let inputRock = document.querySelector('input.rock');
let inputPaper = document.querySelector('input.paper');
let inputScissors = document.querySelector('input.scissors');
let winCounter = 0;
let loseCounter = 0;
let getPlayerChoice = playerChoice.addEventListener('click', e => playRound(e.target.className));

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3 + 1);
    switch(computerChoice) {
        case 1:
            return 'rock';
        case 2:
            return 'paper';
        case 3:
            return 'scissors';
        default:
            console.log('Problem');
    }
}

function playRound(playerChoice) {
    console.log(playerChoice);
    let computerChoice = getComputerChoice()
    if (computerChoice === playerChoice) {
        messageDisplayed('Draw:c');
        return;
    } else if (computerChoice === 'rock' && playerChoice === 'scissors') {
        messageDisplayed('You Lose! Rock beats Scissors');
    } else if (computerChoice === 'paper' && playerChoice === 'rock') {
        messageDisplayed('You Lose! Paper beats Rock');
    } else if (computerChoice === 'scissors' && playerChoice === 'paper') {
        messageDisplayed('You Lose! Scissors beats Paper');
    } else {
        messageDisplayed('Win!');
        winCounter++;
        counterWinLose();
        return;
    }
    loseCounter++;
    counterWinLose();


}

function messageDisplayed(text) {
    output.innerHTML = '';
    let message = document.createElement('p');
    output.appendChild(message).textContent = text;
}

function counterWinLose() {
    counter.textContent = `Win: ${winCounter} Lose: ${loseCounter}`;
    if (winCounter === 5) {
        outOfFiveResult(true);
    } else if (loseCounter === 5) {
        outOfFiveResult(false);
    }
}

function outOfFiveResult(result) {
    if (result) {
        counter.textContent = `Congratulation! You Win!`;
    } else {
        counter.textContent = `ILLUMINATED`;
    }
    winCounter = 0;
    loseCounter = 0;
    // document.body.style.background = 'black';
    // playerChoice.style.opacity = 0;
    inputRock.disabled = true;
    inputPaper.disabled = true;
    inputScissors.disabled = true;
    document.querySelector('.winning-message');
}    


//to the center of the screen with a button to start again;