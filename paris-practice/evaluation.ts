// you're officiating a rock-paper-scissors tournament.
// each player only ever plays one type of hand (always rock, always paper, or always scissors).
// given the strategies for all players and two names, output the winner of a game of rock paper scissors.

const playerStrategies = {
    steve: { age: 20, strategy: 'rock' },
    john: { age: 25, strategy: 'paper' },
    cathy: { age: 31, strategy: 'scissors' },
    joe: { age: 21, strategy: 'rock' },
    nancy: { age: 41, strategy: 'paper' },
    bob: { age: 39, strategy: 'paper' },
    tim: { age: 18, strategy: 'rock' },
    sally: { age: 22, strategy: 'scissors' },
}

function calculateWinner(playerStrategies: object, playerOne: string, playerTwo: string): string {
    let winner = ""

    // find the players within the playerStrategies object
    // identify strategies of both players
    const playerOneStrategy = playerStrategies[playerOne].strategy
    const playerTwoStrategy = playerStrategies[playerTwo].strategy

    // define win/lose/tie conditions
    if (playerOneStrategy === playerTwoStrategy) return "tie"
    // const strategies = ["rock", "paper", "scissors"]
    // forEach
    
    if (playerOneStrategy === "rock") {
        if (playerTwoStrategy === "paper") {
            winner = playerTwo
        } else return playerOne
    }
    if (playerOneStrategy === "paper") {
        if (playerTwoStrategy === "scissors") {
            winner = playerTwo
        } else return playerOne
    }
    if (playerOneStrategy === "scissors") {
        if (playerTwoStrategy === "rock") {
            winner = playerTwo
        } else return playerOne
    }

    // identify win/lose/tie outcome based on strategies
    // if there is a winner, return that player
    // if a tie, return null

    return winner
}


console.log(calculateWinner(playerStrategies, "steve", "john"))