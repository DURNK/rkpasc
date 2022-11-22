let computerScore = 0;
let playerScore = 0;
let playerChoice; //global variable that can be modified by the
                    // getPlayerChoice function and passed to playRound

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
    console.log(e.target.className); //e is the location of the selected button and classname is the name of the selected class
    playerChoice = e.target.className; 
    playRound();
    });
}




function playRound() {
const computerChoice = getComputerChoice();
const ticker = document.querySelector('.ticker')

    if (playerChoice === computerChoice) {
        ticker.textContent = 'DRAW!';
    }

    else if (
    (playerChoice === "scissors" && computerChoice === "paper") 
    || (playerChoice === "rock" && computerChoice === "scissors") 
    || (playerChoice === "paper" && computerChoice === "rock")) 
    {
        console.log("Player wins 1 point!" + playerChoice + computerChoice);
        ticker.textContent = "Player wins 1 point!";
        playerScore += 1;
        console.log(playerScore);
    }

    else {
        console.log("Computer wins 1 point!" + playerChoice + computerChoice);
        ticker.textContent = "Computer wins 1 point!";

        
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