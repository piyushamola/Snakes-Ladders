import React, { useEffect, useState } from 'react';
import classes from './SnakeLadders.css'

let SnakeLadders = ( props ) => {
let [coordinates, setCoordinates] = useState({});
const generateSnakeLadderStyle = ( data ) => {
    let from = data.from;
    let to = data.to;
    let tileFrom = document.getElementById(`tile_${from}`).getBoundingClientRect();
    let tileTo = document.getElementById(`tile_${to}`).getBoundingClientRect();
    let obj = {
        x1: tileFrom.x - 470,
        y1: tileFrom.y - 75,
        x2: tileTo.x - 470,
        y2: tileTo.y -75
    }

    setCoordinates(obj);
}

useEffect(() => {
    generateSnakeLadderStyle(props.data);
},[props.data])


	return (
             (coordinates.x1) ?
                <line  x1={coordinates.x1} y1={coordinates.y1} x2={coordinates.x2} y2={coordinates.y2} style={{stroke: props.color, strokeWidth: 10}} />
             : null

	)


}



export default SnakeLadders;
