
function playAgain() {
    // set back to initial state
    roundsPlayed = 0;
    playerScore = 0;
    computerScore = 0;
    // clear text
    playerScoreText.textContent = "Player: ";
    computerScoreText.textContent = "Computer: ";
    roundCountText.textContent = `Round: ${roundsPlayed}`; 
    playerSelectionText.textContent = "Player: ";
    computerSelectionText.textContent = "Computer: ";
    resultRoundText.textContent = "";
    gameOverText.textContent = "";

    // activate buttons
    btnRock.disabled = false;
    btnPaper.disabled = false;
    btnScissors.disabled = false;
    // deactivate button
    btnAgain.disabled = true;

}


// function will return choice of computer
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

// function will play a round and return result
function playRound(player, computer) {
    console.log("Player: " + player + "  ||  Computer: " + computer);
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
        console.log("playAgain: " + playAgain + "   playerWon: " + playerWon );
    
        // check if round was not a tie
        if(playAgain === false) {
            roundsPlayed += 1;
            // check who won the round
            if(playerWon === true) {
                playerScore += 1;
                resultRoundText.textContent = `PLAYER WINS THIS ROUND!`;
                console.log(`Player won this round. Rounds played: ${roundsPlayed} || Player Score: ${playerScore} || Computerscore: ${computerScore}`);
            }
            else if(playerWon === false) {
                computerScore += 1;
                resultRoundText.textContent = `COMPUTER WINS THIS ROUND!`;
                console.log(`Computer won this round. Rounds played: ${roundsPlayed} || Player Score: ${playerScore} || Computerscore: ${computerScore}`);
            }
            roundCountText.textContent = `Round: ${roundsPlayed}`;    
        }
        // round was a tie
        else {
            resultRoundText.textContent = `TIE ! PLAY ROUND AGAIN.`;
            console.log(`It' a tie. Round must be played again. Rounds played: ${roundsPlayed} || Player Score: ${playerScore} || Computerscore: ${computerScore}`);  
        }
   
}

function gameOver() {
    if(playerScore > computerScore) {
        gameOverText.textContent = "CONGRATULATION! YOU WIN THIS MATCH!";
        console.log("CONGRATULATION YOU WON THE GAME!");
    } else {
        gameOverText.textContent = "YOU LOSE! COMPUTER WINS THIS MATCH ";
        console.log("YOU LOSE! COMPUTER WON THE GAME!");
    }
}


function game(player) {
    // get and show player selection
    playerSelection = player
    playerSelectionText.textContent = `Player: ${playerSelection}`;
    // get and show computer selection
    let computerSelection = getComputerChoice();
    computerSelectionText.textContent = `Computer: ${computerSelection}`;
    
    // show on ui what player and computer choses
    console.log(`Player: "${playerSelection}" || Computer: "${computerSelection}".`);

    // round is played and result returned
    let resultRound = playRound(playerSelection, computerSelection);
    getResult(resultRound);

    // less than 5 => continue
    // 5 => announce winner
    if(roundsPlayed >= 5) {
        console.log("5 rounds played GAME OVER");

        // deactivate buttons
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
const playerScoreText = document.querySelector("#playerScore");
const computerScoreText = document.querySelector("#computerScore");
const roundCountText = document.querySelector("#roundCount")
const playerSelectionText = document.querySelector("#playerSelection");
const computerSelectionText = document.querySelector("#computerSelection");
const resultRoundText = document.querySelector("#resultRound");
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