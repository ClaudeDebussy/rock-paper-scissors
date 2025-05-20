function getComputerChoice(){
    if ((Math.random() * 100) + 1 >= 66.66) {
        return "rock";
    } else if ((Math.random() * 100) + 1 >= 33.33) {
        return "paper";
    } else {
        return "scissors"
    }
}

console.log(getComputerChoice());