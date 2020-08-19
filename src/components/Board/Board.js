import React from 'react';
import classes from './Board.css';
import GenerateBoard from './GenerateBoard/GenerateBoard'
import Timer from './Timer/Timer'

const Board = () => {
    return (
        <div className={classes.Board}>
        <div></div>
        <div>
           <GenerateBoard>
           </GenerateBoard>
        </div>
        <div className={classes.Timer}>
            <Timer></Timer>
        </div>
    </div>
    )
}

export default Board;