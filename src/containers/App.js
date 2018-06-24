import React from 'react';

class App extends React.Component {
	constuctor(props){
		super(props);
		this.state = {
			initialBoard: '',
			board: ''
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

