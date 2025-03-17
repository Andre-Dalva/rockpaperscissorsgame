const showUserChoice = document.getElementById("showUserChoice");
const showComputerChoice = document.getElementById("showComputerChoice");

const userScore = document.getElementById("userScore");
const computerScore = document.getElementById("computerScore");
const drawScore = document.getElementById("drawScore");
choices = ["rock","paper","scissors"];
let draw=0, win=0, loss=0;

function game(userChoice){
    userChoice = String(userChoice);
    let computerChoice = String(choices[Math.floor(Math.random()*3)]);
    console.log(computerChoice);
    if(userChoice === computerChoice)
        draw +=1;
    else{
        switch(userChoice){
            case "rock":

                computerChoice === "scissors"? win+=1: loss +=1;
                break
            case "paper":
                computerChoice === "rock"? win+=1: loss +=1;
                break
            case "scissors":
                computerChoice === "paper"? win+=1: loss +=1;
                break
        }
    }
    showUserChoice.textContent = userChoice.toUpperCase();
    showComputerChoice.textContent = computerChoice.toUpperCase();

    userScore.textContent = win;
    computerScore.textContent = loss;
    drawScore.textContent = draw;
}