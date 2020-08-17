import * as actionTypes from './actionTypes';

export const setNoOfPlayers = (noOfPlayers) => {
    return  {
        type : actionTypes.NO_OF_PLAYERS,
        noOfPlayers : noOfPlayers
    }
}


export const setDiceValue = (diceValue) => {
   return {
       type: actionTypes.DICE_VALUE,
       diceValue : diceValue
   }
}

export const setGameState = (gameState) => {
    return {
        type: actionTypes.GAME_STATE,
        gameStarted : gameState
    }
}

export const setPlayers = (players) => {
    return {
        type: actionTypes.SET_PLAYERS,
        players: players
    }
}

export const resetGame = (resetValue) => {
    return {
        type : actionTypes.RESET_GAME,
        resetValue : resetValue
    }
}