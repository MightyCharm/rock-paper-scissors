console.log("start")

// function will return choice of computer
function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    let computerChoice;
    //console.log(randomNum);
    switch(randomNum) {
        case 0:
            computerChoice = "rock";
            break;
        case 1:
            computerChoice = "paper";
            break;
        case 2:
            computerChoice = "scissors";
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
    if(player === "rock") {
        switch(computer) {
            case "rock":
                playAgain = true;
                break;
            case "paper":
                playerWon = false;
                break;
            case "scissors":
                playerWon = true;
                break;
        };
    }
    // Player chooses paper
    else if(player === "paper") {
        switch(computer) {
            case "rock":
                playerWon = true;
                break;
            case "paper":
                playAgain = true;
                break;
            case "scissors":
                playerWon = false;
                break;
        };       
    }
    // Player chooses scissors
    else if(player === "scissors") {
        switch(computer) {
            case "rock":
                playerWon = false;
                break;
            case "paper":
                playerWon = true;
                break;
            case "scissors":
                playAgain = true;
                break;
        }
    } 
    // return result of game
    return [playAgain, playerWon];
}

function game(player) {
    
    
    if(roundsPlayed < 5) { 
        playerSelection = player
        let computerSelection = getComputerChoice();

        // show on ui what player and computer choses
         divTextSelection.textContent = `Player => "${playerSelection}" Computer => "${computerSelection}".`

        // round is played and result returned
        let resultGame = playRound(playerSelection, computerSelection);
        let playAgain = resultGame[0]; // if true, it was a tie
        let playerWon = resultGame[1]; // it true, player won the round
        
        //Check who has won the round
        if(playAgain === false) { // it was no tie
            roundsPlayed += 1;
            if(playerWon === true) {
                playerScore += 1;
                divTextGame.textContent = `Player won this round. Rounds played: ${roundsPlayed} || Player Score: ${playerScore} || Computerscore: ${computerScore}`
            }
            else { // computer won
                computerScore += 1;
                divTextGame.textContent = `Computer won this round. Rounds played: ${roundsPlayed} || Player Score: ${playerScore} || Computerscore: ${computerScore}`
            }
        } 
        // if it was a tie
        else {
            divTextGame.textContent = `It's a tie! Rounds played: ${roundsPlayed} || Playerscore: ${playerScore} || Computerscore: ${computerScore}`;
        }       
    } 
    // 5 Rounds are played, Game Over
    else {
        // check who has won
        if(playerScore > computerScore) {
            divTextResult.textContent = `Congratulation. Player wins the Game ${playerScore} : ${computerScore}.`;
        } 
        else {
            divTextResult.textContent = `Computer wins the game ${computerScore} : ${playerScore}.`
        };    
    }
}


let roundsPlayed = 0;
let playerScore = 0;
let computerScore = 0;
const boxBtn = document.querySelector(".box-btn");
let divTextSelection = document.querySelector("#divSelection");
let divTextGame = document.querySelector("#divGame");
let divTextResult = document.querySelector("#divResult");

function callGame(e) {
    // e.target.value = player rock/paper/scissors
    game(e.target.value);
}
//console.log("Thanks for playing. The Odin Project.")
boxBtn.addEventListener("click", callGame);





// using bubbling to check which button was pressed
//boxBtn.addEventListener("click", (e) => {
//    game(e.target.value); // value (rock,paper, scissors) of clicked btn
//})
//game();
