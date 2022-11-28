let computerScore = 0;
let playerScore = 0;
let playerChoice; //global variable that can be modified by the
                    // getPlayerChoice function and passed to playRound

//Game gets stuck after being reset, maybe we're not resetting everything
         
function sleep(functionToExecute, delay){
    let timeoutId = setTimeout(functionToExecute(), delay);
    return timeoutId;
  }

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
    buttons.style.cssText = 'pointer-events: ';
    buttons.addEventListener('click', (e) => {    
    const ticker = document.querySelector('.ticker')
    //console.log(e.target.className); //e is the location of the selected button and classname is the name of the selected class
    playerChoice = e.target.className; 
    
    
    playRound();


    if (playerScore >= 5 || computerScore >= 5) {
        ticker.textContent = `Match ended, Scores: Player ${playerScore} and Comp ${computerScore} `;
        playerScore = 0;
        computerScore = 0; 
        buttons.style.cssText = 'pointer-events: none ';
        console.log(playerScore);
        console.log(computerScore);
    setTimeout(() => {ticker.textContent = 'Resetting...';
    console.log("Reset");
    }, 2000);
    setTimeout(() => {
        ticker.textContent = `Scores: Player ${playerScore} and Comp ${computerScore} `;
        buttons.style.cssText = 'pointer-events:';

    }, 6000);
          
    }
    });
   
}




function playRound() {
const computerChoice = getComputerChoice();
const ticker = document.querySelector('.ticker')

    if (playerChoice === computerChoice) {
        ticker.textContent = 'DRAW!';
        console.log("Draw" + playerChoice + computerChoice);


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

    else  if (
        (computerChoice === "scissors" && playerChoice === "paper") 
    || (computerChoice === "rock" && playerChoice === "scissors") 
    || (computerChoice === "paper" && playerChoice === "rock"))
    
    {
        console.log("Computer wins 1 point!" + playerChoice + computerChoice);
        ticker.textContent = "Computer wins 1 point!";
        computerScore += 1;
        console.log(computerScore);


    }
}


getPlayerChoice();







