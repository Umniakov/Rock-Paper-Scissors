const states = ['rock,scissors,win', 'paper,rock,win', 'scissors,paper,win',
     'scissors,rock,lose', 'rock,paper,lose', 'paper,scissors,lose'];

const userInput = document.querySelectorAll('.button');
const resultPlacement = document.querySelectorAll('.output > div');
const scorePlayer = document.querySelector('.score-player');
const scorePc = document.querySelector('.score-pc');
const final = document.querySelector('.final');
const finalMessage = document.querySelector('.message');
const restartButton = document.querySelector('#restart-button');
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
    let input = `${user},${comp}`;
    if (user === comp) {
        screenInfoUpdate(user, comp, 'draw')
        return;
    } else {
        let compare = states.filter(value => value.startsWith(input));
        let result = compare[0].split(',')
        scoreIteration(result[2]);
        screenInfoUpdate(user, comp, result[2]);
    }
}

function screenInfoUpdate(user, comp, result) {
    if (result === 'win') {
        resultPlacement[0].setAttribute('style', 'border: 1px solid green; border-radius: 10px;');
        resultPlacement[2].setAttribute('style', 'border: 1px solid red; border-radius: 10px;');
    } else if (result === 'lose') {
        resultPlacement[0].setAttribute('style', 'border: 1px solid red; border-radius: 10px;');
        resultPlacement[2].setAttribute('style', 'border: 1px solid green; border-radius: 10px;');
    } else {
        resultPlacement[0].setAttribute('style', 'border: 1px solid blue; border-radius: 10px;');
        resultPlacement[2].setAttribute('style', 'border: 1px solid blue; border-radius: 10px;');
    }
    resultPlacement[0].innerHTML = `<img width="80px" src="./img/${user}.png">`;
    resultPlacement[1].innerHTML = `<img width="80px" src="./img/hit.gif">`;
    resultPlacement[2].innerHTML = `<img width="80px" src="./img/${comp}.png">`;
}

function scoreIteration(result) {
    if (result === 'win') {
        countWinPlayer++;
        scorePlayer.textContent = countWinPlayer;
    } else if (result === 'lose') {
        countWinPc++;
        scorePc.textContent = countWinPc;
    }
    finishGameAfterFiveWins()
}

function finishGameAfterFiveWins() {
    console.log(final);
    if (countWinPlayer === 5){
        finalMessage.textContent = 'You won!';
        finalMessage.style.color = 'rgba(96, 243, 11, 0.849)';
        restartGame();
    } else if (countWinPc === 5) {
        finalMessage.textContent = 'You lost!';
        finalMessage.style.color = 'red';
        restartGame();
    }   
}

function restartGame() {
    final.classList.add('show');
    restartButton.addEventListener('click', () => {
        countWinPc = 0;
        countWinPlayer = 0;
        scorePlayer.textContent = '';
        scorePc.textContent = '';
        final.classList.remove('show');
        resultPlacement.forEach(e => {
            e.innerHTML = '';
            e.setAttribute('style', '');
        })
    })
}