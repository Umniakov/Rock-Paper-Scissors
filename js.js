const states = ['rock,scissors,win', 'paper,rock,win', 'scissors,paper,win',
     'scissors,rock,lose', 'rock,paper,lose', 'paper,scissors,lose'];

const userInput = document.querySelectorAll('.button');
const resultPlacement = document.querySelector('.output');
const scorePlayer = document.querySelector('.score-player')
const scorePc = document.querySelector('.score-pc')
let roundsCounter = 0;
let countWinPlayer = 0;
let countWinPc = 0;



let userChoice = userInput.forEach(e => e.addEventListener('click', getUserValue));

function getUserValue() {
    let userChoice = this.id
    playRound(userChoice, getComputerValue());
}

function getComputerValue() {
let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2: 
            return 'scissors';
    }
}

function playRound(user, comp) {
    roundsCounter++;
    let input = `${user},${comp}`;
    if (user === comp) {
        // console.log('draw')
    } else {
        let compare = states.filter(value => value.startsWith(input));
        let result = compare[0].split(',')
        scoreIteration(result[2]);
    }
    checkRoundsPlayed();
}

function checkRoundsPlayed() {

}

function screenInfoUpdate() {
    resultPlacement.textContent = 'hi';
    console.log('')
}

function scoreIteration(result) {
    if (result === 'win') {
        countWinPlayer++;
        scorePlayer.textContent = countWinPlayer;
    } else if (result === 'lose') {
        countWinPc++;
        scorePc.textContent = countWinPc;
    }
}
scoreIteration();
function createScore() {

}

function updateScore() {

}
screenInfoUpdate();