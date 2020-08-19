import React, {useState} from 'react';
import classes from './Panel.css';


const Panel = (props) => {

    const getDiv = (players,  dimensions, show ) => {
        let divArray = [];
        for(let i=0; i<players.length; i++) {
           divArray.push((
            <div  key={i} className={classes.PanelLayout}>
            <svg height="25" width="25" key={i}>
            <circle cx={dimensions.cx} cy={dimensions.cy} r={dimensions.r} fill={players[i].color} />
            </svg>
           { (players[i].active && show) ?
               <div className={[classes.arrow, classes.up].join(' ')}></div> : null
           }
            </div>
           ))
        }
        return divArray;
    }
    return (
        <div className={classes.Panel}>
            {
               ( props.players && props.players) ? getDiv(props.players, props.dimensions, props.show): null
            }
        </div>
    )
}

export default Panel;
