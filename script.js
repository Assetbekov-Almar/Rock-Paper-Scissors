let playerScore = document.querySelector(".player-score");
let computerScore = document.querySelector(".computer-score");
let playerChoice = document.querySelector(".PLchoice");
let computerChoice = document.querySelector(".PCchoice");
let rockBtn = document.querySelector(".rock-button");
let paperBtn = document.querySelector(".paper-button");
let scissorsBtn = document.querySelector(".scissors-button");
let winner = document.querySelector(".winner");
let allBtns = document.querySelectorAll(".btns");



let playerSelection = allBtns.forEach(btn => {
btn.addEventListener('click', () => {
    playerChoice.innerHTML = btn.textContent;
    let playerText = btn.textContent;
    let computerText = computerPlay();
    playRound(playerText, computerText);
    Score();
})
});

 function computerPlay() {
    let random =  Math.floor(Math.random() * Math.floor(3));
    let array = ["Rock","Paper","Scissors"];
    computerChoice.innerHTML = array[random];
    return array[random];
}

function Score() {
    if (parseInt(playerScore.textContent)+ parseInt(computerScore.textContent) >4) {
        if (parseInt(computerScore.textContent) > parseInt(playerScore.textContent))
        winner.textContent = `Computer won`;
        else winner.textContent = `Player won`;
        playerScore.textContent = 0;
        computerScore.textContent = 0;
    }
    else if (winner.textContent !== "")
    winner.textContent = "";
    
}


function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();
    let r = "rock";
    let p = "paper";
    let s = "scissors";
    if (player === computer) {
        playerScore.textContent = parseInt(playerScore.textContent);
        computerScore.textContent = parseInt(computerScore.textContent);
    }
    else if (player === r && computer === s || 
             player === p && computer === r ||
             player === s && computer === p) {
                playerScore.textContent = parseInt(playerScore.textContent)+1;
             }
    else {
        computerScore.textContent = parseInt(computerScore.textContent)+1;
    }
        
}

