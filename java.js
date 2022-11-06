let computerScore = 0;
let playerScore = 0;


function getComputerChoice() {
let computerChoice;
const pickings = ["rock","paper","scissors"];
const computerRandom = Math.floor(Math.random() * pickings.length);
computerChoice = pickings[computerRandom];
console.log("computer choice is: " + computerChoice);
return computerChoice;
}

function getPlayerChoice() {
let playerChoice = prompt("Make your choice:");
console.log("player choice is: " + playerChoice);
return playerChoice;
}

function playRound() {

const computerChoice = getComputerChoice();
const playerChoice = getPlayerChoice();

    if (playerChoice === computerChoice) {
        console.log("Draw! No points Awarded")

    }

    else if (
    (playerChoice === "scissors" && computerChoice === "paper") 
    || (playerChoice === "rock" && computerChoice === "scissors") 
    || (playerChoice === "paper" && computerChoice === "rock")) 
    {
        console.log("Player wins 1 point!" + playerChoice + computerChoice);
        playerScore += 1;
    }
    
    else {
        console.log("Computer wins 1 point!" + playerChoice + computerChoice);
        computerScore += 1;
    }
}

function game() {
    for (let i = 0; i<5; i++) {
        playRound();
        console.log(playerScore + ' ' + computerScore)
    }


    if(playerScore === computerScore) {
        console.log("Draw, nobody wins the match!")
    }
    else if(playerScore > computerScore){
        console.log("Player Wins the Match!")
    }
    else {
        console.log("Computer Wins the Match!")
    }
}




game();