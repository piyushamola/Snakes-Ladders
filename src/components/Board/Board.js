import React from 'react';
import classes from './Board.css';
import GenerateBoard from './GenerateBoard/GenerateBoard'


const Board = () => {
    return (
        <div className={classes.Board}>
        <div>
           <GenerateBoard>
           </GenerateBoard>
        </div>
    </div>
    )
}

export default Board;