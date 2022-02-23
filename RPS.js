function playerSelection(chosen){
    var value = chosen
    var randomForComp = randomInt()
    var computerSelector = computerPlay(randomForComp)
    var roundOfMatch = playRound(value,computerSelector) 
    var setPlayerSelection = playerChosed(value)
    var setComputerSelection = computerChosed(computerSelector)
    let compCount = scoreKeep(roundOfMatch)
    console.log(compCount)


}

randomInt = (num=3) => { /*creates a random function that sets the default arg to 3*/ 
    let randomNumber = (Math.floor(Math.random()*num)+1); 
    return(randomNumber);
}

function computerPlay(num){/*creates a function that takes a number*/
    switch(num){
        case 1:
            return 'rock';
        break;
        case 2:                             /*runs its through a series of cases that will return a value to the function*/
            return 'paper';                     
        break;
        case 3: 
            return 'scissor';
        break;

    }
}


function playRound(playerSelection, computerSelection){
    let humanWin = 'Won'
    let computerWin = 'Lost'
    let tie = 'tie'
    if (playerSelection === 'rock' && computerSelection === 'scissor'){
        return(humanWin)
    } else if(playerSelection === 'scissor' && computerSelection ==='paper'){
        return(humanWin)
    } else if (playerSelection === 'paper' && computerSelection ==='rock'){
        return(humanWin)
    } else if (playerSelection === computerSelection){
        return(tie)
    } else {
        return(computerWin)
    } 
}

function playerChosed(selection){
    var chosenValue = selection 
    const humanScore = document.querySelector(".humanSelected")
    humanScore.textContent = (chosenValue)
}
function computerChosed(selection){
    var chosenValue = selection 
    const computerScore = document.querySelector(".computerSelected")
    computerScore.textContent = (chosenValue)
}

let compCount = 0 
let humanCount = 0 

function scoreKeep(selection){
    let value = selection
    const compScore = document.querySelector('.ComputerScore')
    const humanScore = document.querySelector('.HumanScore')
    const result = document.querySelector('.result')
    if (value === 'Lost'){
    compCount = compCount + 1
    compScore.textContent = ('Computer Won' +' '+ compCount)
    } else if (value==='Won'){
        humanCount = humanCount + 1 
        humanScore.textContent = ('You Won' +' '+ humanCount)
    } 
    if (humanCount >= 5){
        humanCount = 0 
        compCount = 0 
        humanScore.textContent = ('You Won' +' '+ humanCount)
        compScore.textContent = ('Computer Won' +' '+ compCount)
        result.textContent = ('Human Wins')
        return('human won')
    } else if (compCount >= 5){
        humanCount = 0 
        compCount = 0 
        humanScore.textContent = ('You Won' +' '+ humanCount)
        compScore.textContent = ('Computer Won' +' '+ compCount)
        result.textContent = ('Computer Wins')
    }

}



        


