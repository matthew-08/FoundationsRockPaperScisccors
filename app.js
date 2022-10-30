let choiceArray = ["Rock", "Paper", "Scissors"]

function getComputerChoice(){
    let choiceArray = ["Rock", "Paper", "Scissors"]
    let n = 5
    let randomChoice = Math.floor(Math.random() * choiceArray.length);  
    return choiceArray[randomChoice];

}

function playRound(playerSelection,computerSelection){

    if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "scissors") {
        return "win";
    } 
    else if (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "rock"){
        return "win";
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "paper"){
        return "win";
    } else if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        return "tie";
    }
    else {
        return "lose";
    }
}


function game() {
    let n = 5
    let yourPoints = 0;
    let computerPoints = 0;
    let total = 0;
    for (let i = 0; i < n; i++){
        let msg = " "
        let playerSelection = prompt("Please select Rock, Paper, or Scissors")
        let computerSelection = getComputerChoice();
        let result  = playRound(playerSelection, computerSelection);
            if (result == "win") {
            msg = "You won a point! ";
            yourPoints++;
           
            } else if (result == "lose") {
            msg = "The computer won a point! "
            computerPoints++;
            
            } else {
            msg = "It's a tie "
            computerPoints++;
            yourPoints++;
            
            }total++;

            if (computerPoints < 3 || yourPoints < 3) {
            console.log( msg + `Round ${total} You now have ${yourPoints} and Computer has ${computerPoints} points.`)
            } else if (computerPoints == 3) {
                console.log( msg + `Round ${total} You now have ${yourPoints} and Computer has ${computerPoints} points.`)
                console.log("You lose!");
            } else {
                console.log( msg + `Round ${total} You now have ${yourPoints} and Computer has ${computerPoints} points.`)
                console.log('You win!');
            }
        }    
}