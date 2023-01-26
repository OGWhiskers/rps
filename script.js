let computerScore = 0;
let playerScore = 0;


function getComputerChoice(){

    let rps = ['rock','paper','scissors'];

    let choice = Math.floor(Math.random()*rps.length)

    return rps[choice];

};

function SingleRound() {

    let playerchoice = 'ROck';
    let playerSelection = playerchoice.toLowerCase();
    let computerSelection = getComputerChoice();
    
    if(playerSelection === 'rock' && computerSelection === 'paper'){
        
        computerScore += 1
        keepScore();
        return 'You Lose! Paper beats Rock'
       

    }else if(playerSelection === 'paper' && computerSelection === 'scissors'){

        computerScore += 1
        keepScore();
        return 'You Lose! Scissors beats Paper'

    }else if(playerSelection === 'scissors' && computerSelection === 'rock'){

        computerScore += 1
        keepScore();
        return 'You Lose! Rock beats Scissors'
        

    }else if(playerSelection === 'rock' && computerSelection === 'scissors'){

        playerScore += 1
        keepScore();
        return 'You Win! Rock beats Scissors'
        

    }else if(playerSelection === 'paper' && computerSelection === 'rock'){

        playerScore += 1
        keepScore();
        return 'You Win! Paper beats Rock'
        

    }else if(playerSelection === 'scissors' && computerSelection === 'paper'){

        playerScore += 1
        keepScore();
        return 'You Win! Scissors beats Paper'
       

    } else {
        keepScore();
        return 'Its a draw. Try again'

    }
}

function keepScore () {
    if (playerScore <= 5 || computerScore <= 5) {

        console.log(`Current Score: Your Score is ${playerScore} 
        and the CPU's score is ${computerScore}`);

    }
}

function game () {
    if (playerScore <= 5 || computerScore <= 5) {
        for (let i = 0; i < 5; i++) {
            console.log(SingleRound());;
        }
    } if (computerScore > playerScore) {
        console.log('Sorry you just lost. Try again you got this!');
    } else if (computerScore < playerScore){
        console.log('Congratulations, I knew you could do it!');
    } else {
        console.log('Its a draw')
    }
    
}
// game();

