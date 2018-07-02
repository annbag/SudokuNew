import React from 'react';
import './Tile.css';

const Tile = props => {
	return (
		<input className="tile" type="number" min="1" max="9" value={props.value} onChange=props.handleChange />
	);
};

export default Tile;