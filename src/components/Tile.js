import React from 'react';

const Tile = props => (
	<input type="number" min="1" max="9" value={props.value} onChange=props.handleChange />
);

export default Tile;


