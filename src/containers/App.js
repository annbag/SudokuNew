import React from 'react';

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