function getComputerChoice(){
    if ((Math.random() * 100) + 1 >= 66.66) {
        return "rock";
    } else if ((Math.random() * 100) + 1 >= 33.33) {
        return "paper";
    } else {
        return "scissors"
    }
}
//console.log("Computer choice: " + getComputerChoice());

function getHumanChoice(){
    let humanChoice = prompt("What will you play?").toLowerCase();
    console.log("Human choice: " + humanChoice);
    if (humanChoice === "rock") {
        return humanChoice
    } else if (humanChoice === "paper") {
        return  humanChoice
    } else if (humanChoice === "scissors") {
        return humanChoice
    } else {
        console.log("Invalid choice");
        //getHumanChoice();
    }
}
//console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    console.log("Human choice: " + humanChoice)
    console.log("Computer choice: " + computerChoice)
    
    let winner = null;
    
    //If humanChoice is rock and computerChoice is rock, it is a tie
    //If humanChoice is rock and computerChoice is paper, computer wins
    //If humanChoice is rock and computerChoice is scissors, player wins
    if (humanChoice === "rock") {
        switch (computerChoice) {
            case "rock":
                winner = "No one";
                console.log(winner + " wins.");
                break;
            case "paper":
                winner = "Computer";
                console.log(winner + " wins.");
                break;
            case "scissors":
                winner = "Player";
                console.log(winner + " wins.");
                break;
        }
    //If humanChoice is paper and computerChoice is rock, player wins
    //If humanChoice is paper and computerChoice is paper, it is a tie
    //If humanChoice is paper and computerChoice is scissors, computer wins
    } else if (humanChoice === "paper") {
        switch (computerChoice) {
            case "rock":
                winner = "Player";
                console.log(winner + " wins.");
                break;
            case "paper":
                winner = "No one";
                console.log(winner + " wins.");
                break;
            case "scissors":
                winner = "Computer";
                console.log(winner + " wins.");
                break;
        }
    //If humanChoice is scissors and computerChoice is rock, computer wins
    //If humanChoice is scissors and computerChoice is paper, player wins
    //If humanChoice is scissors and computerChoice is scissors, it is a tie
    } else if (humanChoice === "scissors") {
        switch (computerChoice) {
            case "rock":
                winner = "Computer";
                console.log(winner + " wins.");
                break;
            case "paper":
                winner = "Player";
                console.log(winner + " wins.");
                break;
            case "scissors":
                winner = "No one";
                console.log(winner + " wins.");
                break;
        }
    } else {
        console.log("Something went wrong.")
    }
    return winner;
}

console.log(playRound(getHumanChoice(), getComputerChoice()));