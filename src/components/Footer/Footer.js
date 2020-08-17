import React, {useState, useEffect, useCallback} from 'react';
import classes from './Footer.css';
import {connect} from 'react-redux'
import Panel from './Panel/Panel'
import Button from '../../UI/Button/Button'
import * as Actions from '../../store/actions/index'

const Footer = (props) => {
	const [diceValue, setDiceValue] = useState(1);
	const [winner, setWinner] = useState();
    const rollDice = () => {
		let random = Math.floor((Math.random() * 3) + 1);
		setDiceValue(random);
		props.setDiceValue(random);
	}

	const checkWinner = useCallback((players) => {
		let winner;
		let someOneWon = false;
		for(let i=0; i<players.length ; i++) {
			if(+players[i].position === 16)
			{
				if(players[i].color === "red") {
					winner = "Congratulations Player 1 wins"
				} else if(players[i].color === "yellow") {
					winner = "Congratulations Player 2 wins"
				} else if(players[i].color === "green") {
					winner = "Congratulations Player 3 wins"
				} else {
					winner ="Congratulations Player 4 wins"
				}
				someOneWon = true;
				break;
			}
		}
		if(someOneWon) {
			setWinner(winner);
		props.setGameState(false);
		} else {
			setWinner();
		}
	})

	useEffect(() => {
		checkWinner(props.players);
	},[props.players])

	let player_dashboard = (
		<div>
			<div className={classes.dice}>
				<div className={classes.number}>
						<span>{diceValue}</span>
				</div>
			</div>

			<div>
					<Button
							disabled={!props.gameState}
							btnType="Success"
							clicked={rollDice}> ROLL DICE
					</Button>
			</div>
		</div>
    );

    return (
        <div className={classes.Footer}>
        <div><Panel players={props.players}  dimensions={{cx:"12.5", cy:"12.5", r: "12.5"}}></Panel></div>
        <div className={classes.TextStyle}>{winner}</div>
        <div>
         {player_dashboard}
        </div>
    </div>
    )
}

const mapStateToProps = ( state, ownProps ) => {
	return {
		players: state.setData.noOfPlayers,
		gameState : state.setData.gameStarted
	}
}

const mapDispatchToProps = dispatch => {
	return {
		setDiceValue : (diceValue) => dispatch(Actions.setDiceValue(diceValue)),
		setGameState: (gameState) => dispatch( Actions.setGameState(gameState)),
	}
};



export default connect(mapStateToProps, mapDispatchToProps)(Footer)
