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

        return 'You Lose! Paper beats Rock'

    }else if(playerSelection === 'paper' && computerSelection === 'scissors'){

        return 'You Lose! Scissors beats Paper'

    }else if(playerSelection === 'scissors' && computerSelection === 'rock'){

        return 'You Lose! Rock beats Scissors'

    }else if(playerSelection === 'rock' && computerSelection === 'scissors'){

        return 'You Win! Rock beats Scissors'

    }else if(playerSelection === 'paper' && computerSelection === 'rock'){

        return 'You Win! Paper beats Rock'

    }else if(playerSelection === 'scissors' && computerSelection === 'paper'){

        return 'You Win! Scissors beats Paper'

    } else {

        return 'Its a draw. Try again'

    }
}
