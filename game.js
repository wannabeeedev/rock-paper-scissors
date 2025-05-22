//console.log("Hello!!!");


//function that randomly returns "rock", "paper" or "scissors"
const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

function getComputerChoice() {
    let result = "";

    for (i = 1; i <= 3; i++){
        let randomNumber = Math.floor(Math.random() * 10) + 1;
        //console.log(randomNumber);

        if ((randomNumber % 5 == 0)) {
            result = ROCK;
        }
        else if ((randomNumber % 3 == 0)) {
            result = PAPER; 
        }
        else if ((randomNumber % 2 == 0)) {
            result = SCISSORS;
        }
        else {
            result = ROCK;
        }
    return result;
    }
}

function getHumanChoice() {
    const humanChoice = window.prompt("Please choose one of the following options: rock, paper, scissors.", "");
    return humanChoice;
}

function playGame () {
    let humanScore = 0;
    let computerScore = 0;
    
    let humanSelection = "";
    let computerSelection = "";

    function playRound(humanChoice, computerChoice) {

        if (humanChoice === computerChoice) {
            console.log("It's a tie! Try again.");
            } else if (humanChoice === "rock" && computerChoice === "scissors") {
                console.log("Rock breaks scissors, the human wins.");
                humanScore++;
                console.log("human score: " + humanScore);
                console.log("computer score: " + computerScore);
                return humanScore;
            } else if (humanChoice === "rock" && computerChoice === "paper") {
                console.log("Paper breaks rock, the computer wins.");
                computerScore++;
                console.log("human score: " + humanScore);
                console.log("computer score: " + computerScore);
                return computerScore;
            } else if (humanChoice === "scissors" && computerChoice === "rock") {
                console.log("Rock breaks scissors, the computer wins.");
                computerScore++;
                console.log("human score: " + humanScore);
                console.log("computer score: " + computerScore);
                return computerScore;
            } else if (humanChoice === "scissors" && computerChoice === "paper") {
                console.log("Scissors breaks paper, the human wins.");
                humanScore++;
                console.log("human score: " + humanScore);
                console.log("computer score: " + computerScore);
                return humanScore;
            } else if (humanChoice === "paper" && computerChoice === "rock") {
                console.log("Paper breaks rock, the human wins.");
                humanScore++;
                console.log("human score: " + humanScore);
                console.log("computer score: " + computerScore);
                return humanScore;
            } else if (humanChoice === "paper" && computerChoice === "scissors") {
                console.log("Scissors breaks paper, the computer wins.");
                computerScore++;
                console.log("human score: " + humanScore);
                console.log("computer score: " + computerScore);
                return computerScore;
            }
    }

for (let i = 0; i < 5; i++){
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();

    console.log("Human's choice: " + humanSelection);
    console.log("Computer's choice:" + computerSelection);

    playRound(humanSelection, computerSelection);
}

//console.log ("Human score: " + humanScore);
//console.log ("Computer score: " + computerScore);

if (humanScore == computerScore) {
    console.log ("Human score was " + humanScore + ", " + "computer score was " + computerScore + ". " + "Everyone wins a.k.a it's a tie!");
} else if (humanScore > computerScore) {
    console.log ("Human score was " + humanScore + ", " + "computer score was " + computerScore + ". " + "You win!");
    return humanScore;
} else {
    console.log ("Human score was " + humanScore + ", " + "computer score was " + computerScore + ". " + "The computer wins!");
    return computerScore;
    }   
}

playGame();