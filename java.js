let computerScore = 0;
let playerScore = 0;
let playerChoice;

function getComputerChoice() {
let computerChoice;
const pickings = ["rock","paper","scissors"];
const computerRandom = Math.floor(Math.random() * pickings.length);
computerChoice = pickings[computerRandom];
console.log("computer choice is: " + computerChoice);
return computerChoice;
}

function getPlayerChoice() {

const buttons = document.querySelector(".buttons"); //selects the buttons div
buttons.addEventListener('click', (e) => {
    console.log(e.target.className);
    playerChoice = e.target.className;
    playRound();
    
    });
}




function playRound() {
const computerChoice = getComputerChoice();


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


getPlayerChoice();







/*function game() {
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
*/
/*const rock = document.querySelector(".rock");
 rock.addEventListener('click', () => 
 {
    let playerChoice = "rock";
    console.log(playerChoice);
    return playerChoice;
    
 });
  
const paper = document.querySelector(".paper");
 paper.addEventListener('click', () => 
 {
    let playerChoice = "paper";
    console.log(playerChoice);
    return playerChoice;
    
 });

 const scissors = document.querySelector(".scissors");
 scissors.addEventListener('click', () => 
 {
    let playerChoice = "scissors";
    console.log(playerChoice);
    return playerChoice;
    
 });
 */