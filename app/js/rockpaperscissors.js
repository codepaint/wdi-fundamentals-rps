////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.

function getPlayerMove(move) {
    if (move !== '') {
        return move;
    } else {
        return getInput();
    }
}

    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.

function getComputerMove(move) {
    if (move !== '') {
        return move;
    } else {
        return randomPlay();
    }
}

    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.

function getWinner(playerMove,computerMove) {
    var winner;
   
    if (playerMove == computerMove) {
        winner = 'Tie';
    } else if (playerMove == 'rock' && computerMove == 'scissors') {
        winner = 'Player';
    } else if (playerMove == 'paper' && computerMove == 'rock') {
        winner = 'Player';
    } else if (playerMove == 'scissors' && computerMove == 'paper') {
        winner = 'Player';
    } else if (playerMove == 'rock' && computerMove == 'paper') {
        winner = 'Computer';
    } else if (playerMove == 'paper' && computerMove == 'scissors') {
        winner = 'Computer';
    } else if (playerMove == 'scissors' && computerMove == 'rock') {
        winner = 'Computer';
    }
    return winner;
}

// This function should continue to play Rock Paper Scissors until either the
  // player or the computer has won five times.
  // After each 'round', display some text in the console indicating who played
  // what, who won, and what the current scoreboard looks like.
  // For example,
  //  console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
  //  console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');


function playToFive() { 
    console.log("Let's play Rock, Paper, Scissors");

    var playerWins = 0;
    var computerWins = 0;

    if (playerWins < 5 && computerWins < 5) {
        console.log('It\'s a tie!');
    } else if (playerWins == 5) {
        console.log('Player is the winner!');
    } else if (computerWins == 5) {
        console.log('Computer is the winner!');
    }
    console.log('Player chose: ' + playerMove + ', ' + 'Computer chose: ' + computerMove + '.');
    console.log('Score: Player ' + playerWins + ', ' + 'Computer ' + computerWins); 
    return [playerWins, computerWins];
}