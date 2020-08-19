import React, { useState, useEffect, useCallback } from 'react';
import classes from './Timer.css'
import  * as Actions from '../../../store/actions/index'
import { connect } from 'react-redux';
const Timer = (props) => {
  const [seconds, setSeconds] = useState(5);
  let [interval, setTimeInterval] = useState(null);

  useEffect(() => {
    startStopTimer();
  }, [props.gameState])

  useEffect(() => {
      setSeconds(5);
  }, [props.resetDice])

  const startStopTimer = useCallback(() => {
    if(props.gameState) {
        let interVal = setInterval(() => {
            setSeconds(seconds => {
                if(seconds === 0) {
                rollDice();
                    return 5;
                } else {
                    return seconds - 1
                }
            } );
          }, 1000);
          setTimeInterval(interVal);
    } else {
        setSeconds(5);
        clearInterval(interval);
    }

  })


  const rollDice = useCallback(() => {
     props.rollDice(true);
  })

  return (
    <div className={classes.Timer}>
      TIMER 
      <header className={classes.Number}>
          {seconds}
      </header>
    </div>
  );
};
const mapStateToProps = ( state, ownProps ) => {
	return {
        gameState: state.setData.gameStarted,
        resetDice : state.setData.resetDice
	}
}

const mapDispatchToProps = dispatch => ({
    rollDice : (value) => dispatch( Actions.rollDice(value))
});



export default connect(mapStateToProps, mapDispatchToProps)(Timer);