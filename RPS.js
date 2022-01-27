randomInt = (num=3) => { /*creates a random function that sets the default arg to 3*/ 
    let randomNumber = (Math.floor(Math.random()*num)+1); 
    return(randomNumber);
}

function computerPlay(num){/*creates a function that takes a number*/
    switch(num){
        case 1:
            return 'Rock';
        break;
        case 2:                             /*runs its through a series of cases that will return a value to the function*/
            return 'Paper';                     
        break;
        case 3: 
            return 'Scissor';
        break;

    }
}

function playerChoice(){                                        /* creates a function with no need for parameter*/ 
    let choice = prompt('Choose Rock, Paper, Or Scissor');  /*Initiates a prompt*/
    let cleanChoice = choice.trim(); /*removes white space in the prompt to reduce errors*/
    if (cleanChoice === 'Rock' || cleanChoice === 'Paper' || cleanChoice === 'Scissor' ){ /*if one of these choices is true assign the value to  function */                                                                
        return cleanChoice
    } else {
        alert('unacceptable input');
  }
}


function playRound(playerSelection, computerSelection){
    playerSelection = playerChoice();
    computerSelection = computerPlay(randomInt());
    console.log(playerSelection);
    console.log(computerSelection);
    let humanWin = 'Won'
    let computerWin = 'Lost'
    let tie = 'tie'
    if (playerSelection === 'Rock' && computerSelection === 'Scissor'){
        return(humanWin)
    } else if(playerSelection === 'Scissor' && computerSelection ==='Paper'){
        return(humanWin)
    } else if (playerSelection === 'Paper' && computerSelection ==='Rock'){
        return(humanWin)
    } else if (playerSelection === computerSelection){
        return(tie)
    } else {
        return(computerWin)
    } 
}


function game(){
    let humanCount = 0 
    let computerCount = 0
    for (let i = 0; humanCount<=5 || computerCount<=5; i++){
        let play = (playRound())
        if (play === 'Won'){
            humanCount = humanCount + 1 
            console.log('Human Score' + humanCount)
        } else if (play === 'Lost'){
            computerCount = computerCount + 1 
            console.log('Computer Score' + computerCount)
        } else {
            console.log('tie')
        } if (humanCount === 5){
            return('Human Wins')
        } else if (computerCount === 5){
            return ('Computer Wins')
        }   
    }
}
