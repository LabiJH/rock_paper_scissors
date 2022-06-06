let input;   // Player input Variable
let playCounter = prompt("How often do you want to play?") // How often do you want to play?

function game(playCounter){
    
    for (let i = 0; i < playCounter; i++){
        input = prompt("What move do you want to play? \n Rock \n Paper \n Scissors");
        let movePossibilities = ["Rock", "Paper", "Scissors"];
        botMove = movePossibilities[Math.floor(Math.random() * movePossibilities.length)];      // Picking the move for the Bot from the Array
       
        if (botMove == input){
            alert("It's a draw! you both picked " + input);
        } else
        if (botMove == "Rock" && input == "Paper" || botMove =="Paper" && input == "Scissors" || botMove == "Scissors" && input == "Rock")
        {
            alert("You win! You picked " + input + " versus the Computer's " + botMove);
        } else {
            alert("You lose! :( You picked " + input + " versus the Computer's " + botMove);
        }
    }
}

game(playCounter);