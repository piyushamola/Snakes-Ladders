import React, { useEffect} from 'react';

let SnakeLadders = ( props ) => {

const generateSnakeLadderStyle = ( data, color ) => {
    let from = data.from;
    let to = data.to;
    let tileFrom = document.getElementById(`tile_${from}`).getBoundingClientRect();
    let tileTo = document.getElementById(`tile_${to}`).getBoundingClientRect();
    let x1 = tileFrom.left + tileFrom.width - 50;
    let y1 = tileFrom.top + tileFrom.height - 50;
    // top right
    let x2 = tileTo.left + tileTo.width - 50;
    let y2 = tileTo.top + tileTo.height - 50;
    // distance
    let length = Math.sqrt(((x2-x1) * (x2-x1)) + ((y2-y1) * (y2-y1)));
    // center
    let cx = ((x1 + x2) / 2) - (length / 2);
    let cy = ((y1 + y2) / 2) - (10 / 2);
    // angle
    let angle = Math.atan2((y1-y2),(x1-x2))*(180/Math.PI);
    // make hr
    let htmlLine = "<div style='padding:0px; margin:0px; height:" + 10 + "px; background-color:" + color + "; line-height:1px; position:absolute; left:" + cx + "px; top:" + cy + "px; width:" + length + "px; -moz-transform:rotate(" + angle + "deg); -webkit-transform:rotate(" + angle + "deg); -o-transform:rotate(" + angle + "deg); -ms-transform:rotate(" + angle + "deg); transform:rotate(" + angle + "deg);' />";
    //

    document.getElementById("Helloworld").innerHTML += htmlLine;
}




useEffect(() => {
    generateSnakeLadderStyle(props.data, props.color);
},[props.data])


	return (
            //  (coordinates.x1) ?
            //      <>
            //  <defs>
            //  <marker id="arrowhead" markerWidth="2" markerHeight="2" 
            //     refX="0" refY="1" orient="auto">
            //   <polygon points="0 0, 2 1, 0 2"/>
            //  </marker>
            //   </defs>
            //     <line  x1={coordinates.x1} y1={coordinates.y1} x2={coordinates.x2} y2={coordinates.y2} style={{stroke: props.color, strokeWidth: 10}} marker-end="url(#arrowhead)"/>
            //     </>
            //  : null
            <>
            <div id="Helloworld"></div>
            </>

	)


}



export default SnakeLadders;
