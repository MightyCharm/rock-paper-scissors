

// 3.
// function getComputerChoice:
// that will randomly return Rock Paper Scissors

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

getComputerChoice();

// 4.
// function that plays a single round:
// should take two parameters: 
// -> "playerSelection"
// -> "computerSelection"
// should return a string that declares the winner of the round:
// "You Lose! Paper beats Rock"


// 5. 6.
// function game():
// previous function inside this to play 5 rounds in a row

// use prompt() to get input from user