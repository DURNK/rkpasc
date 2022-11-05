


function getComputerChoice() {
let computerChoice;
const pickings = ["rock","paper","scrissors"];
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
    if (playerChoice == computerChoice) {
        console.log("Draw!" + playerChoice + computerChoice)
    }
    else if (
        playerChoice === "scissors" && computerChoice === "paper" 
    || playerChoice === "rock" && computerChoice === "scissors" 
    || playerChoice === "paper" && computerChoice === "rock") 
    {
        console.log("player wins!")
    }
    else {
        console.log("Player loses, computer wins")
    }
}


let computerChoice = getComputerChoice();
let playerChoice = getPlayerChoice();
playRound();