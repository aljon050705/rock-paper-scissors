const buttonPlay = document.querySelector('.button-play');
const playerMoveSelector = document.getElementById('playerMove')
const resultHook = document.querySelector('.result')
const scoreHook = document.querySelector('.score')


console.log(playerMoveSelector.value)

let score = {
    wins: 0,
    losses: 0,
    draws: 0,
}

let interpretMove = (move) => {
    if (move === 1) {
        return 'Rock';
    } else if (move === 2) {
        return 'Paper';
    } else if (move === 3) {
        return 'Scissors';
    } else {
        return 'Uninterpretable';
    }
}

let getComputerChoice = () => {
    let choice = Math.random()
    if (choice < 1/3) {
        /*console.log(interpretMove(1))*/
        return 1;
    } else if (choice >= 1/3 && choice <= 2/3) {
        /*console.log(interpretMove(2))*/
        return 2;
    } else {
        /*console.log(interpretMove(3))*/
        return 3;
    }
}

let getResults = () => {
    let playerMove = +playerMoveSelector.value;
    let computerMove = getComputerChoice();
    let result = "";
    console.log(interpretMove(playerMove) + " vs " + interpretMove(computerMove))
    if (playerMove === computerMove) {
        score.draws++;
        result = 'Tie';
    } else if ((playerMove) % 3 + 1 === computerMove) {
        score.losses++
        result = 'Computer Wins';
    } else {
        score.wins++
        result = 'Player Wins';
    }
    resultHook.textContent = `${interpretMove(playerMove)} vs ${interpretMove(computerMove)} ,${result}`;
    scoreHook.textContent = `Wins: ${score.wins}, Losses: ${score.losses}, Draws: ${score.draws}`
    return result;
}


buttonPlay.addEventListener("click", getResults)