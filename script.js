let computerScore = 0;
let playerScore = 0;

// Select from DOM
const rockBtn = document.querySelector(".btn-rock");
const paperBtn = document.querySelector(".btn-paper");
const scissorBtn = document.querySelector(".btn-scissors");
const btnContainer = document.querySelector(".message");

// Create element

const scoreDisplay = document.createElement("div");
const scoreMessage = document.createElement("p");
const roundMessage = document.createElement("p");
const Display = document.createElement("div");

scoreDisplay.classList.add("score-diplay");
Display.classList.add("display-round");

scoreDisplay.appendChild(scoreMessage);
btnContainer.appendChild(scoreDisplay);

Display.appendChild(roundMessage);
btnContainer.appendChild(Display);

// Button choice
function hideBtn() {
  rockBtn.classList.add("hidden");
  paperBtn.classList.add("hidden");
  scissorBtn.classList.add("hidden");
}

function getComputerChoice() {
  let rps = ["rock", "paper", "scissors"];

  let choice = Math.floor(Math.random() * rps.length);

  return rps[choice];
}

function SingleRound(playerchoice) {
  let playerSelection = playerchoice.toLowerCase();
  let computerSelection = getComputerChoice();

  if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore += 1;
    keepScore();
    roundMessage.textContent = "You Lose! Paper beats Rock";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore += 1;
    keepScore();
    roundMessage.textContent = "You Lose! Scissors beats Paper";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore += 1;
    keepScore();
    roundMessage.textContent = "You Lose! Rock beats Scissors";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore += 1;
    keepScore();
    roundMessage.textContent = "You Win! Rock beats Scissors";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore += 1;
    keepScore();
    roundMessage.textContent = "You Win! Paper beats Rock";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore += 1;
    keepScore();
    roundMessage.textContent = "You Win! Scissors beats Paper";
  } else if (playerSelection === computerSelection) {
    keepScore();
    roundMessage.textContent = "Its a draw. Try again";
  } else {
    roundMessage.textContent = "Something went wrong?";
  }

  // Checking if game is finished

  if (playerScore >= 5 || computerScore >= 5) {
    if (computerScore > playerScore) {
      scoreDisplay.textContent = "Sorry you just lost. Try again you got this!";

      roundMessage.textContent = `FINAL SCORE IS: Your Score is ${playerScore}
              and the CPU's score is ${computerScore}`;
      hideBtn();
    } else if (computerScore < playerScore) {
      scoreDisplay.textContent = "Congratulations, I knew you could do it!";

      roundMessage.textContent = `FINAL SCORE IS: Your Score is ${playerScore}
              and the CPU's score is ${computerScore}`;
      hideBtn();
    } else {
      scoreDisplay.textContent = "Its a draw";

      roundMessage.textContent = `FINAL SCORE IS: Your Score is ${playerScore}
              and the CPU's score is ${computerScore}`;
      hideBtn();
    }
  }
}

function keepScore() {
  if (playerScore <= 5 || computerScore <= 5) {
    scoreDisplay.textContent = `Current Score: Your Score is ${playerScore} 
    and the CPU's score is ${computerScore}`;
  }
}

// Make game func work with rest of code.

// function game() {
//   if (playerScore <= 5 || computerScore <= 5) {
//     // for (let i = 0; i < 5; i++) {
//     //   console.log(SingleRound());
//     // }
//   }
//   if (computerScore > playerScore) {
//     scoreDisplay.textContent = "Sorry you just lost. Try again you got this!";

//     scoreDisplay.textContent = `FINAL SCORE IS: Your Score is ${playerScore}
//         and the CPU's score is ${computerScore}`;
//   } else if (computerScore < playerScore) {
//     scoreDisplay.textContent = "Congratulations, I knew you could do it!";

//     scoreDisplay.textContent = `FINAL SCORE IS: Your Score is ${playerScore}
//         and the CPU's score is ${computerScore}`;
//   } else {
//     scoreDisplay.textContent = "Its a draw";

//     scoreDisplay.textContent = `FINAL SCORE IS: Your Score is ${playerScore}
//         and the CPU's score is ${computerScore}`;
//   }
// }
// game();

rockBtn.addEventListener("click", function () {
  SingleRound(rockBtn.textContent);
});

paperBtn.addEventListener("click", function () {
  SingleRound(paperBtn.textContent);
});

scissorBtn.addEventListener("click", function () {
  SingleRound(scissorBtn.textContent);
});

// ADD RESET BUTTON
