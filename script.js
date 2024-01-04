
function playAgain() {
    // set back to initial state
    roundsPlayed = 0;
    playerScore = 0;
    computerScore = 0;

    playerSelectionText.textContent = "Player:";
    resultRoundText.textContent = "";
    computerSelectionText.textContent = "Computer:";
    playerScoreText.textContent = "Player: 0";
    roundCountText.textContent = `Round: ${roundsPlayed}`; 
    computerScoreText.textContent = "Computer: 0";
    gameOverText.textContent = "";

    btnRock.disabled = false;
    btnPaper.disabled = false;
    btnScissors.disabled = false;
    // deactivate button
    btnAgain.disabled = true;
}

function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    let computerChoice;
    //console.log(randomNum);
    switch(randomNum) {
        case 0:
            computerChoice = "ROCK";
            break;
        case 1:
            computerChoice = "PAPER";
            break;
        case 2:
            computerChoice = "SCISSORS";
            break; 
    }
    return computerChoice;
}

function playRound(player, computer) {
    let playerWon = false;
    let playAgain = false;

    // Player chooses rock
    if(player === "ROCK") {
        switch(computer) {
            case "ROCK":
                playAgain = true;
                break;
            case "PAPER":
                playerWon = false;
                break;
            case "SCISSORS":
                playerWon = true;
                break;
        };
    }
    // Player chooses paper
    else if(player === "paper") {
        switch(computer) {
            case "ROCK":
                playerWon = true;
                break;
            case "PAPER":
                playAgain = true;
                break;
            case "SCISSORS":
                playerWon = false;
                break;
        };       
    }
    // Player chooses scissors
    else if(player === "SCISSORS") {
        switch(computer) {
            case "ROCK":
                playerWon = false;
                break;
            case "PAPER":
                playerWon = true;
                break;
            case "SCISSORS":
                playAgain = true;
                break;
        }
    } 
    // return result of game
    return [playAgain, playerWon];
}

function getResult(resultRound) {
        let playAgain = resultRound[0];
        let playerWon = resultRound[1];
    
        // check if round was not a tie
        if(playAgain === false) {
            roundsPlayed += 1;
            // check who won the round
            if(playerWon === true) {
                playerScore += 1;
                resultRoundText.textContent = `PLAYER WINS THIS ROUND!`;           
            }
            else if(playerWon === false) {
                computerScore += 1;
                resultRoundText.textContent = `COMPUTER WINS THIS ROUND!`;
            }
            playerScoreText.textContent = `Player: ${playerScore}`;
            roundCountText.textContent = `Round: ${roundsPlayed}`;
            computerScoreText.textContent = `Computer: ${computerScore}`;   
        }
        // round was a tie
        else {
            resultRoundText.textContent = `TIE ! PLAY ROUND AGAIN.`;
        }  
}

function gameOver() {
    if(playerScore > computerScore) {
        gameOverText.textContent = "CONGRATULATION! YOU WIN THIS MATCH!";
    } else {
        gameOverText.textContent = "YOU LOSE! COMPUTER WINS THIS MATCH ";
    }
}

function game(player) {
    // get and show player selection
    playerSelection = player
    playerSelectionText.textContent = `Player: ${playerSelection}`;
    // get and show computer selection
    let computerSelection = getComputerChoice();
    computerSelectionText.textContent = `Computer: ${computerSelection}`;
    
    // round is played and result returned
    let resultRound = playRound(playerSelection, computerSelection);
    getResult(resultRound);

    // 5 rounds => announce winner
    if(roundsPlayed >= 5) {
        btnRock.disabled = true;
        btnPaper.disabled = true;
        btnScissors.disabled = true;
        // activate button
        btnAgain.disabled = false;

        gameOver(); // shows winner
    }  
}

// variables
let roundsPlayed = 0;
let playerScore = 0;
let computerScore = 0;
// buttons
const btnRock = document.querySelector("#btnRock");
const btnPaper = document.querySelector("#btnPaper");
const btnScissors = document.querySelector("#btnScissors");
// text
const playerSelectionText = document.querySelector("#playerSelection");
const resultRoundText = document.querySelector("#resultRound");
const computerSelectionText = document.querySelector("#computerSelection");
const playerScoreText = document.querySelector("#playerScore");
const roundCountText = document.querySelector("#roundCount");
const computerScoreText = document.querySelector("#computerScore");
const gameOverText = document.querySelector("#gameOver");

btnAgain.disabled = true;

function callGame(e) {
    // e.target.value = player rock/paper/scissors
    game(e.target.value);
};

btnRock.addEventListener("click", callGame);
btnPaper.addEventListener("click", callGame);
btnScissors.addEventListener("click", callGame);
btnAgain.addEventListener("click", playAgain);