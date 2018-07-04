import React from 'react';
import Tile from  './Tile.js';
import style from './Board.css'; 

const Board = props => {
	return(
		<div className={style.board} >
			{props.board.split("").map((item, index) => <Tile key={index} index={index} value={item} 
			 handleChange={props.handleChange} /> )}
		</div>
	);
};

export default Board;