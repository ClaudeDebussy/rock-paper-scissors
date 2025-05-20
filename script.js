function getComputerChoice(){
    if ((Math.random() * 100) + 1 >= 66.66) {
        return "rock";
    } else if ((Math.random() * 100) + 1 >= 33.33) {
        return "paper";
    } else {
        return "scissors"
    }
}
console.log("Computer choice: " + getComputerChoice());

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
        getHumanChoice();
    }
}
console.log(getHumanChoice());