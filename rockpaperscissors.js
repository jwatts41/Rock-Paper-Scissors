const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
      return userInput;
  } else {
    console.log('error');
  }
};

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3)
    switch(randomNumber) {
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
    }
};

function determineWinner(userChoice, computerChoice) {
  if(userChoice === computerChoice) {
    return ('Tie Game!');
  } 
  if(userChoice === 'rock'){
    if(computerChoice === 'paper'){
      return ('You LOST')
    } else {
      return('You WON')
    }
  }
  if(userChoice === 'paper') {
    if(computerChoice === 'scissors') {
      return ('You LOST')
    } else {
      return('You WON')
    }
  }
  if(userChoice === 'scissors') {
    if(computerChoice === 'rock') {
      return ('You LOST')
    } else {
      return('You WON')
    }
  }
  if(userChoice === 'bomb') {
      return('You WON')
  }
}

function playGame() {
  const userChoice = getUserChoice('rock');
  const computerChoice = getComputerChoice('')
  console.log('Your choice is' + ' ' + userChoice);
  console.log('The computer choice is' + ' ' + computerChoice)
  console.log(determineWinner(userChoice, computerChoice));
}

console.log(getComputerChoice());
console.log(determineWinner('paper', 'scissors'))
playGame()