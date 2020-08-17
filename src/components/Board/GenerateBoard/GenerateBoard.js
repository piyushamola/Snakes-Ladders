import React, { useState, useEffect, useCallback } from 'react';
import classes from './GenerateBoard.css'
import Tile from './Tile/Tile'
import * as Actions from '../../../store/actions/index'
import SnakeLadders from './Snake/SnakeLadders'
import { connect } from 'react-redux';

const GenerateBoard = (props) => {
    let [myTiles, setTiles] = useState([]);

    const generateGameboard = () => {
        const total_tiles = 16;
        const tile_styles = [ 'white' ];

        let tiles = [];
        let temp = [];
        let reverse = false;
        let count = 0;

        for ( let i = total_tiles; i > 0; i-- ) {
            count++;

            let tile = {
                id: i,
                style: tile_styles[0],
            };

            if( reverse ) {
                temp.unshift( tile );
            } else {
                temp.push( tile );
            }

            if( count === 4 ) {
                reverse = !reverse;
                tiles = tiles.concat(temp);
                temp = [];
                count = 0;
            }

        }

        setTiles(tiles);
    }


    const noOfPlayers = (event) => {
        console.log(event.target.value);
        props.setNoOfPlayers(event.target.value);
    }

    useEffect(() => {
        generateGameboard();
    },[])



    return (
		<div>
        <div>
        <label className={classes.Label}>No of Players</label>
        <select disabled={props.gameState} className={classes.InputElement} onChange={noOfPlayers} value={props.players.length}>
                    <option key={1} value={2}>{2}</option>
                    <option key={2} value={3}>{3}</option>
                    <option key={3} value={4}>{4}</option>
            </select>
        </div>
        <div>
		{ myTiles.length > 0 ?
			(
				<div id="gameboard" className={[classes.gameboard, classes.flex].join(' ')}>


				{ myTiles.map( givenTile => {
						return(
							<Tile key={ givenTile.id } data={givenTile} />
						)
					})
				}

                { props.mySnakes.length > 0 &&
                        <div className={classes.snakes}>
                           <svg className={classes.Svg}>
                            { props.mySnakes.map( snake => {
                                    return <SnakeLadders key={ 'snake_' + snake.id } data={ snake } color={"red"}/>

                                })
                            }
                            </svg>
                        </div>
                }

               { props.ladders.length > 0 &&
                        <div className={classes.snakes}>
                             <svg className={classes.Svg}>
                            { props.ladders.map( ladder => {
                                    return <SnakeLadders key={ 'ladder_' + ladder.id } data={ ladder } color={"green"}/>

                                })
                            }
                            </svg>
                        </div>
                }
				</div>
			)
			:
			(
			<div className={classes.screen}>
				<p>The board is empty right now, Please generate the board first.</p>
			</div>
            )
		}
        </div>
		</div>
    )
}

const mapStateToProps = ( state, ownProps ) => {
	return {
        players : state.setData.noOfPlayers,
        gameState: state.setData.gameStarted,
        mySnakes : state.setData.snakes,
        ladders: state.setData.ladders
	}
}

const mapDispatchToProps = dispatch => ({
    setNoOfPlayers: (playerNo) => dispatch( Actions.setNoOfPlayers(playerNo)),
    setPlayers: (players) => dispatch(Actions.setPlayers(players))
});



export default connect(mapStateToProps, mapDispatchToProps)(GenerateBoard)