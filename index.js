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
let playerScore = 0
let computerScore = 0

// Globa; variables
const playScore = document.getElementById('playerScore')
const comScore = document.getElementById('computerScore')
const announce = document.getElementById('announce')

const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')
const playerChoice = document.getElementById('playerChoice');


// Player choice
const getPlayerChoice = (choice) => {
  playerChoice.innerHTML = choice;
}

rock.addEventListener('click', () => {
  getPlayerChoice(rock.id)
});

paper.addEventListener('click', () => {
  getPlayerChoice(paper.id)
});

scissors.addEventListener('click', () => {
  getPlayerChoice(scissors.id)
});




// Random generated choices from computer
const getComputerChoice = () => {
  const computerChoice = document.getElementById('computerChoice')
  let choice = Math.random()
  if(choice <= 0.33){
    return 'rock'
  } else if (choice >= 0.34 && choice <= 0.66){
    return 'paper'
  } else{
    return 'scissors'
  }
}



// The game
const playGame = (player, computer) => {

  // Show what the player picked, but converted the individual letters to word
  if(player === rock.id){
    playerChoice.innerText = 'rock' 
  } else if(player == paper.id){
    playerChoice.innerText = 'paper' 
  } else if(player === scissors.id){
    playerChoice.innerText = 'scissors'
  } else{
    playerChoice.innerText = `Invalid input. Try again!`
  }


  // The if-else to determine who wins the round and add scores 
  if(player === rock.id && computer === "scissors"){
    playerScore++
    announce.innerText =  `Player wins! Rock beats scissors`
  }else if (player === paper.id && computer === "rock"){
    playerScore++
    announce.innerText = `Player wins! Paper beats rock!`
  } else if (player === scissors.id && computer === "paper"){
    playerScore++
    announce.innerText = `Player Wins! Scissors beat paper!`
  }else if(player === scissors.id && computer === "rock"){ 
    computerScore++
    announce.innerText = `Computer wins! Rock beats scissors!`
  }else if (player === rock.id && computer === "paper"){
    computerScore++
    announce.innerText = `Computer wins! Paper beats rock!`
  } else if (player === paper.id && computer === "scissors"){
    computerScore++
    announce.innerText = `Computer Wins! Scissors beats paper!`
  } else if (player === computer){
    announce.innerText = `It's a draw!`
  } else{
    announce.innerText = `Try again!`
  }
}



// The rounds played
const playRound = () => {
  while (playerScore < 5 && computerScore < 5){

    //The prompt for player to enter
    const player = getPlayerChoice()

    // passed in the function
    const computer = getComputerChoice() 

    // Passed both player and computer as argument and called the functionp
    playGame(player, computer)

    // The scoreboard
    playScore.innerHTML = playerScore
    comScore.innerHTML = computerScore
  }

  // Final statement on who won
  if(playerScore > computerScore){
    announce.innerHTML = `Player Wins!!!!!!!!`
  } else{
    announce.innerHTML = `Computer Wins!!!!!!!!`
  }
}

// Call 