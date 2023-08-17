let playerScore = 0
let computerScore = 0 



function getComputerChoice(){
    let choice = Math.random()
     if(choice <= 0.33){
        return "rock"
     } else if(choice >= 0.34 && choice <= 0.66){
        return "paper"
     }else{
        return "scissors";
     }
}

function playRound(player, computer){
    console.log(`Computer plays ${computer}`)
    console.log(`Player plays ${player}`)
    for(i = 0; i <= 5; i++){
        if(player === "rock" && computer === "scissors"){
            playerScore++
            return `Player Win! Rock beats Scissors`
        } else if (player === "scissors" && computer === "paper"){
            playerScore++
            return `Player Win! Scissors beats paper`
        }else if (player === "paper" && computer === "rock"){
            playerScore++
            return`Player win ! Paper beats rock `
        }else if(player === "scissors" && computer === "rock"){
            computerScore++
            return(`Computer Wins! Rock beats scissor`)
        } else if( player === "paper" && computer === "scissors"){
            computerScore++
            return (`Computer wins! Scissors beat paper`)
        }else if(player === "rock" && computer === "paper"){
            computerScore++
            return(`Computer wins! Paper beats rock`)
        } else if (player === computer){
            return `It's a draw!!`
        }else{
            return `Invalid input, try again`
        }
    }
    
}

function playGame(){
    while (playerScore < 5 && computerScore < 5){
        const player = prompt("Choose Rock, Paper, or Scissors").toLowerCase();
        const computer = getComputerChoice();
        console.log(playRound(player,computer))
        console.log(`Player's Score : ${playerScore} - Computer's Score : ${computerScore} \n\n\n`)
    }

    if(playerScore > computerScore){
        console.log("Player wins!!!!!")
    } else if (computerScore > playerScore){
        console.log("Computer wins!!!!!")
    }
}

playGame()