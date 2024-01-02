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
    // Player input wrong
    else {
        playAgain = true;
        console.log("Wrong Input. Please enter: Rock, Paper or Scissors.")
    }
    // return result of game
    return [playAgain, playerWon];
}

function game(player) {
    // main loop, will run as long as five rounds are played
    
    if(roundsPlayed < 5) {
        // 1. Computer makes choice
        let computerSelection = getComputerChoice();

        // 2. Player makes choice
        //let playerSelection = prompt("Enter Rock, Paper or Scissors").toLowerCase()
        playerSelection = player;
        //let playerSelection = "paper";

        // 3. Round is played and result returned
        let resultGame = playRound(playerSelection, computerSelection);
        console.log("----------")
        console.log(`play Again: ${resultGame[0]}  || player won: ${resultGame[1]}`);
        console.log("----------")

        // 4. Check who has won the last round
        // resultGame[0] => playAgain ; resultGame[1] => playerWon
        if(resultGame[0] === false) {
            roundsPlayed += 1;
            if(resultGame[1] === true) {
                playerScore += 1;
            }
            else {
                computerScore += 1;
            }
        }
        console.log(`Rounds played: ${roundsPlayed} || Playerscore: ${playerScore} || Computerscore: ${computerScore}`);
    }


    // check who has won
    divResult.textContent = `Rounds played: ${roundsPlayed} || Playerscore: ${playerScore} || Computerscore: ${computerScore}`;
    // print result
    // ask for new game    
    
}

let roundsPlayed = 0;
let playerScore = 0;
let computerScore = 0;
const boxBtn = document.querySelector(".box-btn");
//console.log(container)
let divResult = document.querySelector("#result");
// using bubbling to check which button was pressed
//boxBtn.addEventListener("click", (e) => {
//    game(e.target.value); // value (rock,paper, scissors) of clicked btn
//})
//game();

function callGame(e) {
    game(e.target.value);
}
//console.log("Thanks for playing. The Odin Project.")
boxBtn.addEventListener("click", callGame);
