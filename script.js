

// function will return choice of computer
function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    let computerChoice;
    console.log(randomNum);
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
    console.log("Player: " + player);
    console.log("Computer: " + computer);
    
    // Player chooses rock
    if(player === "rock") {
        if(computer === "rock") {
            return "It's a tie. Both have chosen Rock.";
        }
        else if(computer === "paper") {
            return "You lose! Paper beats Rock."
        }
        else if(computer === "scissors") {
            return "You win! Rock beats Scissors.";
        }
    }

    // Player chooses paper
    else if(player === "paper") {
        if(computer === "rock") {
            return "You win! Paper beats Rock.";
        }
        else if(computer === "paper") {
            return "It's a tie. Both have chosen Paper.";
        }
        else if(computer === "scissors") {
            return "You lose! Scissors beats Paper.";
        }       
    }

    // Player chooses scissors
    else if(player === "scissors") {
        if(computer === "rock") {
            return "You lose! Scissors beats Rock";
        }
        else if(computer === "paper") {
            return "You win! Scissors beats Paper";
        }
        else if(computer === "scissors") {
            return "It's a tie. Both have chosen Scissors.";
        }
    }
}

let playerWon = false;
let computerWon = false;
let tie = false;
let playerScore = 0;
let computerScore = 0;
let rounds = 0;

// 1. Computer makes choice
let computerSelection = getComputerChoice();

// 2. Player makes choice
//let playerSelection = prompt("Enter Rock, Paper or Scissors").toLowerCase()
let playerSelection = "paper";

// 3. Round is played and result returned
let resultGame = playRound(playerSelection, computerSelection);
console.log(resultGame);
// 4. If result is draw, new round will be played.


// 5. 6.
// function game():
// previous function inside this to play 5 rounds in a row

// use prompt() to get input from user