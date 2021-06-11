let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = function() {
    return Math.floor(Math.random()*10) 
}

const compareGuesses = function(guess_human, guess_computer, secret_target) {
    var delta_human = Math.abs(guess_human - secret_target);
    var delta_computer = Math.abs(guess_computer-secret_target);
    if (delta_human <= delta_computer) {
        return true;
    }
    else {
        return false;
    }
}

const updateScore = function(winner) {
    if (winner === 'human') {
        humanScore += 1;
    }
    else if (winner === 'computer') {
        computerScore += 1;
    }

}

const advanceRound = function() {
    currentRoundNumber += 1;
}


