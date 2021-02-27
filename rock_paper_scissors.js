let playerScore = 0;
let computerScore = 0;



function computerPlay() {
    let array = ["rock", "paper", "scissors"];
    let computerChoice = array[Math.floor(Math.random() * array.length)];
    return computerChoice;
};

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "scissors"
        || playerSelection == "paper" && computerSelection == "rock"
        || playerSelection == "scissors" && computerSelection == "paper") {
        playerScore++;
    } else {
        playerSelection == "rock" && computerSelection == "paper"
            || playerSelection == "paper" && computerSelection == "scissors"
            || playerSelection == "scissors" && computerSelection == "rock"
        computerScore++;
    }
};

function declareWinner() {
    if (playerScore == 5 && playerScore > computerScore) {
        alert("You Win!");
        location.reload();
    } else if (computerScore == 5 && computerScore > playerScore) {
        alert("You lose, better luck next time!");
        location.reload();
    } else return;
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', function (e) {
        console.log(button.dataset.selection);
        playRound(button.dataset.selection, computerPlay());
        document.getElementById('playerScore').textContent = playerScore;
        document.getElementById('computerScore').textContent = computerScore;
        console.log(playerScore);
        console.log(computerScore);
        declareWinner();
    })
});






/*(e) => {
    let playerSelection = (button.dataset.selection);
    return playerSelection;


/*function game() {
    for (i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
        let computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
        console.log(`----Round ${i + 1}----`)
        console.log(`Player Score: ${playerScore}`);
        console.log(`Computer Score: ${computerScore}`);
    }
    if (playerScore > computerScore) {
        alert(`You win! With a final score of ${playerScore}:${computerScore}`);
    } else if (computerScore > playerScore) {
        alert(`Sorry, you lost! With a final score of ${computerScore}:${playerScore}`)
    } else {
        "You drew! Better luck next time."
    }

    console.log("----Final Score----");
    console.log(`Player: ${playerScore} | Computer: ${computerScore}`);
}
game();*/