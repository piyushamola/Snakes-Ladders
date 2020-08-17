import React, {useState} from 'react';
import classes from './Panel.css';


const Panel = (props) => {

    const getDiv = (players,  dimensions) => {
        let divArray = [];
        for(let i=0; i<players.length; i++) {
           divArray.push((
            <svg height="25" width="25" key={i}>
            <circle cx={dimensions.cx} cy={dimensions.cy} r={dimensions.r} fill={players[i].color} />
            </svg>
           ))
        }
        return divArray;
    }
    return (
        <div className={classes.Panel}>
            {
               ( props.players && props.players) ? getDiv(props.players, props.dimensions): null
            }
        </div>
    )
}

export default Panel;
