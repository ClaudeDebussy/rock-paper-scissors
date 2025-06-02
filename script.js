let playerScore = 0;
let computerScore = 0;

const container = document.querySelector("#container");
const playerChoiceMessage = document.createElement("p");
const computerChoiceMessage = document.createElement("p");
const roundWinnerMessage = document.createElement("p");
const playerScoreMessage = document.createElement("p");
const computerScoreMessage = document.createElement("p");
const overallWinnerMessage = document.createElement("p");

function getComputerChoice(){
    if ((Math.random() * 100) + 1 >= 66.66) {
        return "rock";
    } else if ((Math.random() * 100) + 1 >= 33.33) {
        return "paper";
    } else {
        return "scissors"
    }
}

function playRound(selection) {
    
    let humanChoice = selection;
    let computerChoice = getComputerChoice();

    playerChoiceMessage.textContent = "Player chose: " + humanChoice;
    container.appendChild(playerChoiceMessage);

    computerChoiceMessage.textContent = "Computer chose: " + computerChoice;
    container.appendChild(computerChoiceMessage);

    let winner = null;
    
    //If humanChoice is rock and computerChoice is rock, it is a tie
    //If humanChoice is rock and computerChoice is paper, computer wins
    //If humanChoice is rock and computerChoice is scissors, player wins
    if (humanChoice === "rock") {
        switch (computerChoice) {
            case "rock":
                winner = "none";
                break;
            case "paper":
                winner = "computer";
                break;
            case "scissors":
                winner = "player";
                break;
        }
    //If humanChoice is paper and computerChoice is rock, player wins
    //If humanChoice is paper and computerChoice is paper, it is a tie
    //If humanChoice is paper and computerChoice is scissors, computer wins
    } else if (humanChoice === "paper") {
        switch (computerChoice) {
            case "rock":
                winner = "player";
                break;
            case "paper":
                winner = "none";
                break;
            case "scissors":
                winner = "computer";
                break;
        }
    //If humanChoice is scissors and computerChoice is rock, computer wins
    //If humanChoice is scissors and computerChoice is paper, player wins
    //If humanChoice is scissors and computerChoice is scissors, it is a tie
    } else if (humanChoice === "scissors") {
        switch (computerChoice) {
            case "rock":
                winner = "computer";
                break;
            case "paper":
                winner = "player";
                break;
            case "scissors":
                winner = "nonee";
                break;
        }
    } else {
        console.log("Something went wrong.")
    }
    return winner;
}

function updateScore(winner){
    if (winner === "player"){
        playerScore++;
    } else if (winner === "computer"){
        computerScore++;
    }
    playerScoreMessage.textContent = "Player score: " + playerScore;
    computerScoreMessage.textContent = "Computer score: " + computerScore;
    container.appendChild(playerScoreMessage);
    container.appendChild(computerScoreMessage);
}

function checkGameOver(){
    if (playerScore === 5){
        overallWinnerMessage.textContent = "Player wins the game!";
        container.appendChild(overallWinnerMessage);
    } else if (computerScore === 5){
        overallWinnerMessage.textContent = "Player wins the game!";
        container.appendChild(overallWinnerMessage);
    }
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const roundWinner = playRound(button.id);
        roundWinnerMessage.textContent = roundWinner.charAt(0).toUpperCase() + roundWinner.slice(1) + " wins the round!";
        container.appendChild(roundWinnerMessage);
        updateScore(roundWinner);
        checkGameOver();
    });
});


