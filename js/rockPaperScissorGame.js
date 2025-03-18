const showUserChoice = document.getElementById("showUserChoice");
const showComputerChoice = document.getElementById("showComputerChoice");
const animationImages = document.getElementById("animationsImages");
const showResults = document.getElementById("results");

const userScore = document.getElementById("userScore");
const computerScore = document.getElementById("computerScore");
const drawScore = document.getElementById("drawScore");

choices = ["rock","paper","scissors"];
let draw=0, win=0, loss=0;

function game(userChoice){
    userChoice = String(userChoice);
    let computerChoice = String(choices[Math.floor(Math.random()*3)]);
    console.log(computerChoice);
    let result = null;

    if(userChoice === computerChoice){
        showResults.innerHTML = `VS<br><span id="draw" class="resultIndicator">ITS A TIE</span>`
        draw +=1;
    }
    else{
        switch(userChoice){
            case "rock":
                result = computerChoice === "scissors";
                break
            case "paper":
                result = computerChoice === "rock";
                break
            case "scissors":
                result = computerChoice === "paper";
                break
        }
        console.log(result);
        if(result==true){
            win +=1;
            showResults.innerHTML = `VS<br><span id="win" class="resultIndicator">YOU WIN</span>`;
        }
        else{
            loss +=1;
            showResults.innerHTML = `VS<br><span id="loss" class="resultIndicator">YOU LOST</span>`
        }
    }

    showUserChoice.textContent = userChoice.toUpperCase();
    showComputerChoice.textContent = computerChoice.toUpperCase();

    animationImages.innerHTML = `<img  id="user" src="images/Hands png/user-${userChoice}.png"><img id="computer" src="images/Hands png/computer-${computerChoice}.png">`;

    userScore.textContent = win;
    computerScore.textContent = loss;
    drawScore.textContent = draw;
}