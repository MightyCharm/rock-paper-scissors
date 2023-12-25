

function game() {
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

        playerWon = false;
        computerWon = false
        tie = false;

        // Player chooses rock
        if(player === "rock") {
            if(computer === "rock") {
                tie = true;
                return "It's a tie. Both have chosen Rock.";
            }
            else if(computer === "paper") {
                computerWon = true;
                return "You lose! Paper beats Rock."
            }
            else if(computer === "scissors") {
                playerWon = true;
                return "You win! Rock beats Scissors.";
            }
        }
        // Player chooses paper
        else if(player === "paper") {
            if(computer === "rock") {
                playerWon = true;
                return "You win! Paper beats Rock.";
            }
            else if(computer === "paper") {
                tie = true;
                return "It's a tie. Both have chosen Paper.";
            }
            else if(computer === "scissors") {
                computerWon = true;
                return "You lose! Scissors beats Paper.";
            }       
        }
        // Player chooses scissors
        else if(player === "scissors") {
            if(computer === "rock") {
                computerWon = true;
                return "You lose! Scissors beats Rock";
            }
            else if(computer === "paper") {
                playerWon = true;
                return "You win! Scissors beats Paper";
            }
            else if(computer === "scissors") {
                tie = true;
                return "It's a tie. Both have chosen Scissors.";
            }
        }
    }

    let roundsPlayed = 0;
    let playerWon = false;
    let computerWon = false
    let tie = false;
    let playerScore = 0;
    let computerScore = 0;

    // main loop, will run as long as five rounds are played
    while(true) {
        // 1. Computer makes choice
        let computerSelection = getComputerChoice();

        // 2. Player makes choice
        //let playerSelection = prompt("Enter Rock, Paper or Scissors").toLowerCase()
        let playerSelection = "scissors";

        // 3. Round is played and result returned
        let resultGame = playRound(playerSelection, computerSelection);
        console.log(resultGame);
       
        console.log("playerWon: " +  playerWon + "  ||  computerWon: " + computerWon + " ||  tie: " + tie);

        //  Check if player or computer has won the last round
        if(tie === false) {
            roundsPlayed += 1;
            if(playerWon === true) {
                playerScore += 1;
            }
            else if(computerWon === true) {
                computerScore += 1;
            }
            else {console.log("This should not be happening!")}
        }
       
        // Check if 5 Rounds were played
        if(roundsPlayed === 5) {
            console.log(`Rounds played: ${roundsPlayed}.`);
            // Check Who has Won the Game
            if(playerScore > computerScore) {
                console.log("Congratulation. You win the Game!");
            } else {
                console.log("Computer Wins the Game. You lose!");
            }
            break;
        };
        console.log(`playerScore: ${playerScore}  ||  computerScore: ${computerScore}`);
        console.log(`Rounds played ${roundsPlayed}. NEXT ROUND STARTS NOW...`);
        console.log("========================================================");
    }

}

game();

