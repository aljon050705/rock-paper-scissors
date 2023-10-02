/*Pseudocode
1. Button gets clicked
2. Get result
3. Add red circle to loser, Add green circle to winner
*/


const resultHook = document.querySelector('.DOMresult')
const scoreHook = document.querySelector('.score')


let score = {
    playerWins: 0,
    playerLosses: 0,
    computerWins: 0,
    computerLosses: 0,
    gameTies: 0,
}

let updateScoreCircles = (target) => {
    if (target == 'player') {
        let playerScore = document.querySelector(`.player-score-${+score.playerWins}`);
        playerScore.classList.add('green');
    } else if (target == 'computer') {
        let computerScore = document.querySelector(`.computer-score-${+score.computerWins}`);
        computerScore.classList.add('green');
    }
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

let getResults = (playerMove) => {
    let computerMove = getComputerChoice();
    let result = "";
    console.log(interpretMove(playerMove) + " vs " + interpretMove(computerMove))
    if (playerMove === computerMove) {
        score.gameTies++;
        result = 'Tie';
    } else if ((playerMove) % 3 + 1 === computerMove) {
        score.computerWins++;
        updateScoreCircles('computer');
        result = 'Computer Wins';
    } else {
        score.playerWins++;
        updateScoreCircles('player');
        result = 'Player Wins';
    }
    console.log(result)
    resultHook.textContent = `${result}`;
    return result;
}


//buttonPlay.addEventListener("click", getResults)
//Event Listeners
const buttonRock = document.querySelector('.rock');
const buttonPaper = document.querySelector('.paper');
const buttonScissors = document.querySelector('.scissors');

buttonRock.addEventListener('click', () => {
    getResults(1)
    //buttonRock.classList.toggle('red');
    console.log(buttonRock);
    }
 );

 buttonPaper.addEventListener('click', () => {
    getResults(2)
    //buttonPaper.classList.toggle('red');
    console.log(buttonPaper);
    }
 );

 buttonScissors.addEventListener('click', () => {
    getResults(3)
    //buttonScissors.classList.toggle('red');
    console.log(buttonScissors);
    }
 );