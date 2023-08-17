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
    if(player === "rock" && computer === "scissors"){
        return `Player Win! Rock beats Scissors`
    } else if (player === "scissors" && computer === "paper"){
        return `Player Win! Scissors beats paper`
    }else if (player === "paper" && computer === "rock"){
        return`Player win ! Paper beats rock `
    }else if(player === "scissors" && computer === "rock"){
        return(`Computer Wins! Rock beats scissor`)
    } else if( player === "paper" && computer === "scissors"){
        return (`Computer wins! Scissors beat paper`)
    }else if(player === "rock" && computer === "paper"){
        return(`Computer wins! Paper beats rock`)
    } else if (player === computer){
        return `It's a draw!!`
    }else{
        return `Invalid input, try again`
    }
}

let player = (prompt("Choose Rock, Paper, or Scissors")).toLowerCase()
const computer = getComputerChoice()
console.log(playRound(player, computer))