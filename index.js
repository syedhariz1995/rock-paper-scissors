// let playerScore = 0;
// let computerScore = 0;

// function getComputerChoice() {
//   let choice = Math.random();
//   if (choice <= 0.33) {
//     return "rock";
//   } else if (choice >= 0.34 && choice <= 0.66) {
//     return "paper";
//   } else {
//     return "scissors";
//   }
// }

// function playRound(player, computer) {
//   console.log(`Computer plays ${computer}`);
//   console.log(`Player plays ${player}`);
//     if (player === "rock" && computer === "scissors") {
//       playerScore++;
//       return `Player Win! Rock beats Scissors`;
//     } else if (player === "scissors" && computer === "paper") {
//       playerScore++;
//       return `Player Win! Scissors beats paper`;
//     } else if (player === "paper" && computer === "rock") {
//       playerScore++;
//       return `Player win ! Paper beats rock `;
//     } else if (player === "scissors" && computer === "rock") {
//       computerScore++;
//       return `Computer Wins! Rock beats scissor`;
//     } else if (player === "paper" && computer === "scissors") {
//       computerScore++;
//       return `Computer wins! Scissors beat paper`;
//     } else if (player === "rock" && computer === "paper") {
//       computerScore++;
//       return `Computer wins! Paper beats rock`;
//     } else if (player === computer) {
//       return `It's a draw!!`;
//     } else {
//       return `Invalid input, try again`;
//     }
// }

// function playGame() {
//   while (playerScore < 5 && computerScore < 5) {
//     const player = prompt("Choose Rock, Paper, or Scissors").toLowerCase();
//     const computer = getComputerChoice();
//     console.log(playRound(player, computer));
//     console.log(
//       `Player's Score : ${playerScore} - Computer's Score : ${computerScore} \n\n\n`
//     );
//   }

//   if (playerScore > computerScore) {
//     console.log("Player wins the game!!!!!");
//   } else if (computerScore > playerScore) {
//     console.log("Computer wins the game!!!!!");
//   }
// }

// playGame();








let playerScore = 0
let computerScore = 0

const getComputerChoice = () => {
  let choice = Math.random()
   if(choice <= 0.33){
    return 'rock'
   } else if (choice >= 0.34 && choice <= 0.66){
    return 'paper'
   } else{
    return 'scissors'
   }
}


const playGame = (player, computer) => {
  console.log(`Computer plays ${computer}`)
  if(player === 'r'){
    player = "rock"
    console.log(`Player plays rock`)
  } else if(player == 'p'){
    player = "paper"
    console.log('Player plays paper')
  } else if(player === 's'){
    player = "scissors"
    console.log(`Player plays scissors`)
  } else{
    console.log(`Player plays ${player}, invalid input!`)
  }


  if(player === "rock" && computer === "scissors"){
    playerScore++
    return `Player wins! Rock beats scissors`
  }else if (player === "paper" && computer === "rock"){
    playerScore++
    return `Player wins! paper beats rock!`
  } else if (player === "scissors" && computer === "paper"){
    playerScore++
    return `Player Wins! Scissors beat Paper!`
  }else if(player === "scissors" && computer === "rock"){ 
    computerScore++
    return `Computer wins! Rock beats scissors!`
  }else if (player === 'rock' && computer === "paper"){
    computerScore++
    return `Computer wins! Paper beats rock!`
  } else if (player === "paper" && computer === "scissors"){
    computerScore++
    return `Computer Winns! Scissors Beat Paper!`
  } else if (player === computer){
    return `It's a draw!`
  } else{
    return `Try again!`
  }
}


const playRound = () => {
  while (playerScore < 5 && computerScore < 5){
    const player = (prompt(`Rock = r \n Paper = p \n scissors = s`)).toLowerCase()
    const computer = getComputerChoice() 
    console.log(playGame(player, computer))
    console.log(`Player : ${playerScore} - Computer : ${computerScore}\n\n\n\n`)
  }
  if(playerScore > computerScore){
    console.log("Player Wins!!!!!!")
  } else{
    console.log ("Computer Wins!!!!!!")
  }
}

playRound()