import React from 'react';
import sudoku from 'sudoku-umd';
import Board from '../components/Board.js';

class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			initialBoard: '',//nie zmienia się w ramach jedenj gry, potrzebny do restartu gry
			board: '' //notuje wszystkie zmiany
		}
	}
	//szkic
	render() {
	    return (
			<div className="App">
			   <h1>Sudoku</h1>
			   <Board />
			   <div className="buttons">
			       <button>Check</button>
			       <button>New Game</button>
			       <button>Solve</button>
			       <button>Restart</button>
			   </div>
			</div>
		)
	}
}

