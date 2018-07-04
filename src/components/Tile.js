import React from 'react';
import style from './Tile.css';

const Tile = props => {
	return (
		<input className={style.tile} type="number" min="1" max="9" value={props.value === '.' ? '' : props.value} onChange={(e) => props.handleChange(props.index, e.target.value)} />
	);
};

export default Tile;