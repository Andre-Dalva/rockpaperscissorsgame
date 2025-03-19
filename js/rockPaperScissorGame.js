const showUserChoice = document.getElementById("showUserChoice");
const showComputerChoice = document.getElementById("showComputerChoice");
const animationImages = document.getElementById("animationsImages");
const showResults = document.getElementById("results");
const gamming_audio = document.getElementById("gaming-audio");

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
    let audio_name="game";

    if(userChoice === computerChoice){
        showResults.innerHTML = `VS<br><span id="draw" class="resultIndicator">ITS A TIE</span>`;
        audio_name = "draw";
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
            audio_name = "win";
        }
        else{
            loss +=1;
            showResults.innerHTML = `VS<br><span id="loss" class="resultIndicator">YOU LOST</span>`
            audio_name = "loose";
        }
    }

    showUserChoice.textContent = userChoice.toUpperCase();
    showComputerChoice.textContent = computerChoice.toUpperCase();
    gamming_audio.innerHTML = `<audio autoplay><source src="audio/${audio_name}-sound.mp3"></audio>`

    animationImages.innerHTML = `<img  id="user" src="images/Hands png/user-${userChoice}.png"><img id="computer" src="images/Hands png/computer-${computerChoice}.png">`;

    userScore.textContent = win;
    computerScore.textContent = loss;
    drawScore.textContent = draw;
}