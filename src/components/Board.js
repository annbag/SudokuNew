import React from 'react';
import Tile from  './Tile.js';

const Board = props => {
	return(
		<div>
			{props.board.split("").map((item, index) => <Tile value={item} 
			handleChange={(e) => props.handleChange(index, e.target.value)}/> )}
		</div>
	);
};

export default Board;