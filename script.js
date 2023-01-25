function getComputerChoice(){

    let rps = ['rock','paper','scissors'];

    let choice = Math.floor(Math.random()*rps.length)

    return rps[choice];

}


