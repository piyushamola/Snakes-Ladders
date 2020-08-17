import React, { Component } from 'react';
import classes from './Header.css';
import Button from '../../UI/Button/Button'
import * as Actions from '../../store/actions/index'
import { connect } from 'react-redux'
const Header = (props) => {

const resetClicked = () => {
    props.resetGame(true);
}

const startClicked = () => {
    props.setGameState(true);
}

    return (
        <div className={classes.Header}>
        <Button
            btnType="Danger"
            clicked={resetClicked}> RESET
        </Button>
       <div className={classes.TextStyle}>SNAKE & LADDER</div>
       <Button
            disabled={props.gameState}
            btnType="Success" 
            clicked={startClicked}> START
        </Button>
    </div>
    )
}


const mapStateToProps = ( state, ownProps ) => {
	return {
        players : state.setData.noOfPlayers,
        gameState : state.setData.gameStarted,
	}
}

const mapDispatchToProps = dispatch => ({
    setGameState: (gameState) => dispatch( Actions.setGameState(gameState)),
    resetGame: (reset) => dispatch(Actions.resetGame(reset))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header)