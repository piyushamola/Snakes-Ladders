import * as actionTypes from '../actions/actionTypes'

const initialState = {
    noOfPlayers: [
        {
            position:"1",
            color : "red",
            active : true
        },
        {
            position: "1",
            color: "yellow",
            active: false
        }
    ],
    snakes : [{ id: 'sn_1',  from: 15,   to: 6 }],
    ladders : [{id: 'ld_1', from: 3, to: 12}],
    gameStarted : false,
    resetValue : false,
    rollDice : false,
    resetDice : false
}



const computeNewArray = (num, oldArray) => {
    if(num === "2") {
        let newArray = oldArray.slice(0,2);
        return newArray;
    }
    else  if( num === "3") {
        let newArray = oldArray.slice(0,2);
        newArray.push({
            position:"1",
            color: "green",
            active: false
        })
        return newArray;
    }
    else {
        let newArray = oldArray.slice(0,2);
        newArray.push({
            position:"1",
            color: "green",
            active: false
        }, {
            position:"1",
            color: "blue",
            active: false
        })
        return newArray;
}
}

const changeActiveStatus = (players, diceValue, mySnakes, ladders) => {
    let modifiedPlayers = players.slice(0);
    for(var i=0; i<modifiedPlayers.length; i++) {
        if(modifiedPlayers[i].active) {
            let newPosition = Number(modifiedPlayers[i].position) + diceValue;
            if(newPosition <= 16) {
                modifiedPlayers[i].position = newPosition
            }
            modifiedPlayers[i].active = false;
            break;
        }
    }
    if(i === modifiedPlayers.length -1) {
        modifiedPlayers[0].active = true;
    } else {
        modifiedPlayers[i+1].active = true;
    }

    for(let i=0; i<modifiedPlayers.length; i++) {
        for(let j=0; j<ladders.length; j++) {
             if(+ladders[j].from === +modifiedPlayers[i].position) {
                modifiedPlayers[i].position = ladders[j].to;
             }
        }
     }

     for(let i=0; i<modifiedPlayers.length; i++) {
         for(let j=0; j<mySnakes.length; j++) {
              if(+mySnakes[j].from === +modifiedPlayers[i].position) {
                modifiedPlayers[i].position = mySnakes[j].to;
              }
         }
      }
    return modifiedPlayers;
}


const setPosition = (players) => {
    let modifiedPlayers = players.slice(0);
    for(var i=0; i<modifiedPlayers.length; i++) {
        modifiedPlayers[i].position = "1"
    }

    return modifiedPlayers;
}

const setDataReducer = (state = initialState, action)  => {
    switch(action.type) {
        case actionTypes.NO_OF_PLAYERS:
        let myObj = computeNewArray(action.noOfPlayers, state.noOfPlayers);
        return {
            ...state,
            noOfPlayers : myObj.slice(0)
        }

        case actionTypes.DICE_VALUE:
        let newState = changeActiveStatus(state.noOfPlayers, action.diceValue, state.snakes, state.ladders)
       return {
           ...state,
           rollDice: false,
           noOfPlayers: newState,
           resetDice: !state.resetDice
       }

       case actionTypes.GAME_STATE:
        if(action.gameStarted === false) {
            return {
                ...state,
                gameStarted : action.gameStarted
            }
        }
        let players = setPosition(state.noOfPlayers)
       return {
           ...state,
           noOfPlayers : players.slice(0),
           gameStarted : action.gameStarted
       }

       case actionTypes.SET_PLAYERS:
       return {
           ...state,
           noOfPlayers: action.players.slice(0)
       }

       case actionTypes.RESET_GAME :
       return  {
        noOfPlayers: [
            {
                position:"1",
                color : "red",
                active : true
            },
            {
                position: "1",
                color: "yellow",
                active: false
            }
        ],
        snakes : [{ id: 'sn_1',  from: 15,   to: 6 }],
        ladders : [{id: 'ld_1', from: 3, to: 12}],
        gameStarted : false,
        resetValue : false,
        rollDice : false,
        resetDice: false
    }

       case actionTypes.ROLL_THE_DICE:
           return {
            ...state,
            rollDice : true
           }


        default:
        return state;
    }
}

export default setDataReducer;