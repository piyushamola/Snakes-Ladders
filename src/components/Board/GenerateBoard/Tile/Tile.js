import React from 'react';
import classes from './Tile.css'
import Panel from '../../../Footer/Panel/Panel'
import {connect} from 'react-redux';

let Tile = ( props ) => {

	const { data } = props;

	const getPlayersPostion = (players, tileNo) => {
		let availablePlayers = [];
		for(let i=0; i<players.length; i++) {
			if(+players[i].position === +tileNo ) {
				availablePlayers.push(players[i]);
			}
		}
		return (
			<Panel players={availablePlayers} dimensions={{cx:"6", cy:"6", r: "6"}}></Panel>
		)
	}

	return (
		<div className={ [classes.tile, classes[data.style]].join(' ') } id={ 'tile_' +data.id }>
		<span className={classes.Panel}>{getPlayersPostion(props.players, data.id)} </span>
		<span className={classes.number}>{ data.id }</span>
        </div>
	)


}


const mapStateToProps = ( state, ownProps ) => {
	return {
		players: state.setData.noOfPlayers
	}
}

const mapDispatchToProps = dispatch => ({
	
});



export default connect(mapStateToProps, mapDispatchToProps)(Tile);
