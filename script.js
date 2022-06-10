let playerSelection;   // Player input Variable
let playCounter = 5;// How often do you want to play?
let movePossibilities = ["Rock", "Paper", "Scissors"];
botMove = movePossibilities[Math.floor(Math.random() * movePossibilities.length)];      // Picking the move for the Bot from the Array
let btnRock = document.getElementById("btnRock");
let btnPaper = document.getElementById("btnPaper");
let btnScissor = document.getElementById("btnScissor");
let counter = 0;
let botCounter = document.getElementById("botCounter");
let botWins = 0;
let userWins = 0;
let result = document.getElementById("playPick")

botCounter.innerHTML = " " + 0;
userCounter.innerHTML = " " + 0;

btnRock.addEventListener("click", () => {
    if (botMove == "Rock"){
        document.getElementById("text").innerHTML ="Draw";
        counter++;
    } else if (botMove == "Paper")
    {
        document.getElementById("text").innerHTML ="You Lose";
        counter++;
        botWins++;
        botCounter.innerHTML = " " + botWins;
    } else {
        document.getElementById("text").innerHTML ="You Win!";
        counter++;
        userWins++;
        userCounter.innerHTML = " " + userWins;
    }
    result.innerHTML = "you picked Rock, the Bot picked " + botMove;

    botMove = movePossibilities[Math.floor(Math.random() * movePossibilities.length)];      // Picking the move for the Bot from the Array

    if(counter == 5 && botWins > userWins){
        alert("You lose! The bot won" + botWins + " times out of 5.")
        counter = 0;
        botWins = 0;
        userWins = 0;
    } else if (counter == 5 && userWins > botWins){
        alert("You win! You won " + userWins +" out of 5." )
        counter = 0;
        botWins = 0;
        userWins = 0;
    } else if (counter == 5 && userWins == botWins || counter == 5 && botWins == userWins){
        alert("It's a draw!!");
        counter = 0;
        botWins = 0;
        userWins = 0;
    }
})

btnPaper.addEventListener("click", () => {
    if (botMove == "Paper"){
        document.getElementById("text").innerHTML ="Draw";
        counter++;
        
    } else if (botMove == "Scissors")
    {
        document.getElementById("text").innerHTML ="You Lose";
        counter++;
        botWins++;
        botCounter.innerHTML = " " + botWins;
    } else {
        document.getElementById("text").innerHTML ="You Win!";
        counter++;
        userWins++;
        userCounter.innerHTML = " " + userWins;
    }
    result.innerHTML = "you picked Paper, the Bot picked " + botMove;
    botMove = movePossibilities[Math.floor(Math.random() * movePossibilities.length)];      // Picking the move for the Bot from the Array

    if(counter == 5 && botWins > userWins){
        alert("You lose! The bot won" + botWins + " times out of 5.")
        counter = 0;
        botWins = 0;
        userWins = 0;
    } else if (counter == 5 && userWins > botWins){
        alert("You win! You won " + userWins +" out of 5." )
        counter = 0;
        botWins = 0;
        userWins = 0;
    }else if (counter == 5 && userWins == botWins || counter == 5 && botWins == userWins){
        alert("It's a draw!!");
        counter = 0;
        botWins = 0;
        userWins = 0;
    }
})

btnScissor.addEventListener("click", () => {
    if (botMove == "Scissors"){
        document.getElementById("text").innerHTML ="Draw";
        counter++;
    } else if (botMove == "Rock")
    {
        document.getElementById("text").innerHTML ="You Lose";
        counter++;
        botWins++;
        botCounter.innerHTML = " " + botWins;
    } else {
        document.getElementById("text").innerHTML ="You Win!";
        counter++;
        userWins++;
        userCounter.innerHTML = " " + userWins;
    }
    result.innerHTML = "you picked Scissors, the Bot picked " + botMove;
    botMove = movePossibilities[Math.floor(Math.random() * movePossibilities.length)];      // Picking the move for the Bot from the Array
    if(counter == 5 && botWins > userWins){
        alert("You lose! The bot won" + botWins + " times out of 5.")
        counter = 0;
        botWins = 0;
        userWins = 0;
    } else if (counter == 5 && userWins > botWins){
        alert("You win! You won " + userWins +" out of 5." )
        counter = 0;
        botWins = 0;
        userWins = 0;
    } else if (counter == 5 && userWins == botWins || counter == 5 && botWins == userWins){
        alert("It's a draw!!");
        counter = 0;
        botWins = 0;
        userWins = 0;
    }
})



/*
        
    
*/


