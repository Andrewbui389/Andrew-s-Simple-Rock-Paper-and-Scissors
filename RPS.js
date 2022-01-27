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
 
function checkWinner(){
    let initiateGame = playRound()
  if (initiateGame === 'Won'){
      return initiateGame;
  } else if (initiateGame === 'Lost'){
    return initiateGame
  } else if (initiateGame === 'tie'){
      return initiateGame
  }
}

function game(){
    let checksWin = checkWinner()
    return checksWin
    
}


for (let i = 0;; i++)

