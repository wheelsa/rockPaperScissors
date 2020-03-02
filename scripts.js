



var rpcArray = ['rock', 'paper', 'scissors'];

var yourScore = 0;
document.getElementById("yourScore").innerHTML = `Your Score: ${yourScore}`;

var computerScore = 0;
document.getElementById("computerScore").innerHTML = `Computer's Score: ${computerScore}`;

var rockChoice = document.getElementById('rock');
rockChoice.addEventListener('click', rockWeapon);

function rockWeapon(){
  var computerChoice = rpcArray[Math.floor(Math.random() * rpcArray.length)];
  if ('rock' == computerChoice) {
      alert(`Computer Chose ${computerChoice}, you tie`);
  } else if (computerChoice == "paper") {
    alert(`Computer Chose ${computerChoice}, you lose`);
    updateComputerScore()
  } else if (computerChoice == "scissors") {
    alert(`Computer Chose ${computerChoice}, you won!`);
    updateYourScore();
  }
  else {
  }
  }

var paperChoice = document.getElementById('paper')
paperChoice.addEventListener('click', paperWeapon)

  function paperWeapon(){
    var computerChoice = rpcArray[Math.floor(Math.random() * rpcArray.length)];
    if ('paper' == computerChoice) {
        alert(`Computer Chose ${computerChoice}, you tie`);
    } else if (computerChoice == "scissors") {
      alert(`Computer Chose ${computerChoice}, you lose`);
      updateComputerScore();
    } else if (computerChoice == "rock") {
      alert(`Computer Chose ${computerChoice}, you won!`);
      updateYourScore();
    }
    else {
    }
    }


var scissorChoice = document.getElementById('scissor')
scissorChoice.addEventListener('click', scissorWeapon)

    function scissorWeapon(){
      var computerChoice = rpcArray[Math.floor(Math.random() * rpcArray.length)];
      if ('scissors' == computerChoice) {
          alert(`Computer Chose ${computerChoice}, you tie`);
      } else if (computerChoice == "rock") {
        alert(`Computer Chose ${computerChoice}, you lose`);
        updateComputerScore()
      } else if (computerChoice == "paper") {
        alert(`Computer Chose ${computerChoice}, you won!`);
        updateYourScore();
      }
      else {
      }
      }

function updateComputerScore(){
  computerScore++;
  document.getElementById("computerScore").innerHTML = `Computer's Score: ${computerScore}`;
}

function updateYourScore(){
  yourScore++;
  document.getElementById("yourScore").innerHTML = `Your Score: ${yourScore}`;
}

