// // let playerScore = 0;
// // let computerScore = 0;

// // function getComputerChoice() {
// //   let choice = Math.random();
// //   if (choice <= 0.33) {
// //     return "rock";
// //   } else if (choice >= 0.34 && choice <= 0.66) {
// //     return "paper";
// //   } else {
// //     return "scissors";
// //   }
// // }

// // function playRound(player, computer) {
// //   console.log(`Computer plays ${computer}`);
// //   console.log(`Player plays ${player}`);
// //     if (player === "rock" && computer === "scissors") {
// //       playerScore++;
// //       return `Player Win! Rock beats Scissors`;
// //     } else if (player === "scissors" && computer === "paper") {
// //       playerScore++;
// //       return `Player Win! Scissors beats paper`;
// //     } else if (player === "paper" && computer === "rock") {
// //       playerScore++;
// //       return `Player win ! Paper beats rock `;
// //     } else if (player === "scissors" && computer === "rock") {
// //       computerScore++;
// //       return `Computer Wins! Rock beats scissor`;
// //     } else if (player === "paper" && computer === "scissors") {
// //       computerScore++;
// //       return `Computer wins! Scissors beat paper`;
// //     } else if (player === "rock" && computer === "paper") {
// //       computerScore++;
// //       return `Computer wins! Paper beats rock`;
// //     } else if (player === computer) {
// //       return `It's a draw!!`;
// //     } else {
// //       return `Invalid input, try again`;
// //     }
// // }

// // function playGame() {
// //   while (playerScore < 5 && computerScore < 5) {
// //     const player = prompt("Choose Rock, Paper, or Scissors").toLowerCase();
// //     const computer = getComputerChoice();
// //     console.log(playRound(player, computer));
// //     console.log(
// //       `Player's Score : ${playerScore} - Computer's Score : ${computerScore} \n\n\n`
// //     );
// //   }

// //   if (playerScore > computerScore) {
// //     console.log("Player wins the game!!!!!");
// //   } else if (computerScore > playerScore) {
// //     console.log("Computer wins the game!!!!!");
// //   }
// // }

// // playGame();







// // Global variable for later
// let playerScore = 0
// let computerScore = 0


// // Random generated choices from computer
// const getComputerChoice = () => {
//   let choice = Math.random()
//    if(choice <= 0.33){
//     return 'rock'
//    } else if (choice >= 0.34 && choice <= 0.66){
//     return 'paper'
//    } else{
//     return 'scissors'
//    }
// }


// // The game
// const playGame = (player, computer) => {

//   // Showing what computer picked from getComputerChoice
//   console.log(`Computer plays ${computer}`)

//   // Show what the player picked, but converted the individual letters to word
//   if(player === 'r'){
//     player = "rock"
//     console.log(`Player plays rock`)
//   } else if(player == 'p'){
//     player = "paper"
//     console.log('Player plays paper')
//   } else if(player === 's'){
//     player = "scissors"
//     console.log(`Player plays scissors`)
//   } else{
//     console.log(`Player plays ${player}, invalid input!`)
//   }


//   // The if-else to determine who wins the round and add scores 
//   if(player === "rock" && computer === "scissors"){
//     playerScore++
//     return `Player wins! Rock beats scissors`
//   }else if (player === "paper" && computer === "rock"){
//     playerScore++
//     return `Player wins! Paper beats rock!`
//   } else if (player === "scissors" && computer === "paper"){
//     playerScore++
//     return `Player Wins! Scissors beat paper!`
//   }else if(player === "scissors" && computer === "rock"){ 
//     computerScore++
//     return `Computer wins! Rock beats scissors!`
//   }else if (player === 'rock' && computer === "paper"){
//     computerScore++
//     return `Computer wins! Paper beats rock!`
//   } else if (player === "paper" && computer === "scissors"){
//     computerScore++
//     return `Computer Winns! Scissors beats paper!`
//   } else if (player === computer){
//     return `It's a draw!`
//   } else{
//     return `Try again!`
//   }
// }




// // The rounds played
// const playRound = () => {
//   while (playerScore < 5 && computerScore < 5){

//     //The prompt for player to enter
//     const player = (prompt(`Rock = r \n Paper = p \n scissors = s`)).toLowerCase()

//     // passed in the function
//     const computer = getComputerChoice() 

//     // Passed both player and computer as argument and called the functionp
//     console.log(playGame(player, computer))

//     // The scoreboard
//     console.log(`Player : ${playerScore} - Computer : ${computerScore}\n\n\n\n`)
//   }

//   // Final statement on who won
//   if(playerScore > computerScore){
//     console.log("Player Wins!!!!!!")
//   } else{
//     console.log ("Computer Wins!!!!!!")
//   }
// }

// // Call the function
// playRound()



// Use DOM

// Scores 
let playScore = 0
let comScore = 0

// Global variables
const playerScore = document.getElementById('playerScore')
const computerScore = document.getElementById('computerScore')
const announce = document.getElementById('announce')
const buttons = document.querySelectorAll('button')
const playerChoice = document.getElementById('playerChoice');
const computerChoice = document.getElementById('computerChoice');
const reset = document.getElementById('reset')

const disableButtons = (disable) => {
  buttons.forEach(button => {
    button.disabled = disable;
  });
}


// Random generated choices from computer
const getComputerChoice = () => {
  let choice = Math.random()
  if (choice <= 0.33) {
    return rock.id
  } else if (choice >= 0.34 && choice <= 0.66) {
    return paper.id
  } else {
    return scissors.id
  }
}

// Initial Scores and announcement
computerChoice.innerText = "Waiting!"
playerScore.innerText = playScore
computerScore.innerText = comScore
announce.innerText = "Pick your move!"

// Logic of the game on who wins the round
const playGame = (player, computer) => {
  if (player === computer) {
    announce.innerText = "Tie!"
  } else if ((player === 'rock' && computer === 'scissors') ||
    (player === 'scissors' && computer === 'paper') ||
    (player === 'paper' && computer === 'rock')) {
    playScore++
    playerScore.innerText = playScore
    announce.innerText = "Player won the round!"
  } else {
    comScore++
    computerScore.innerText = comScore
    announce.innerText = 'Computer won the round!'
  }
}

// Play until one of them reach score of 5
const playRound = () => {
  if (playScore < 5 && comScore < 5) {
    const player = playerChoice.innerText
    const computer = getComputerChoice()

    playGame(player, computer)
    computerChoice.innerText = computer

    if (playScore === 5) {
      announce.innerText = "Player wins the game!!!!"
      disableButtons(true)
    } else if (comScore === 5) {
      announce.innerText = "Computer wins the game!!!!"
      disableButtons(true)
    }
  }
}

// const resetGame = () => {
//   playScore = 0
//   comScore = 0
//   playScore.innerText = playScore
//   computerScore.innerText = comScore
//   announce.innerText = "Pick your move!"
//   playerChoice.innerText = ""
//   computerChoice.innerText = ""
//   disableButtons(false)
// }

// reset.addEventListener('click', resetGame)


buttons.forEach(button => {
  button.addEventListener('click', () => {
    playerChoice.innerText = button.id
    playRound()
  })
})