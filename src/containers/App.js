import React from 'react';
import sudoku from 'sudoku-umd';
import Board from '../components/Board.js';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			initialBoard: '',//nie zmienia się w ramach jedenj gry, potrzebny do restartu gry
			board: '' //notuje wszystkie zmiany
		}
	}
	start() {
		const sudokuBoard = sudoku.generate("medium"); 

		this.setState({
			board: sudokuBoard,
			initialBoard: sudokuBoard.slice(),
		});
	}

	restart() {
		this.setState({
			board: this.state.initialBoard.slice()
		});
	}
	//solve rozwiązuje aktualną grę i wyświetla rozwiązanie na planszy 
	solve() {
		const solution = sudoku.solve(this.state.initialBoard)
		this.setState({
			board: solution 
		});
	}

	//checkSolve rozwiązuje aktualną grę, ale nie wyświetla rozwiązania, 
	//tylko komunikat informujący czy aktualnie wpisane cyfry są poprawne 
	checkSolve() {
		const check = sudoku.solve(this.state.board);
		if (check) {
			alert ('OK!')
		} else {
			alert ('Wrong!')
		}
	}

	handleChange(index, value) {
		const board = this.state.board.slice(0, index) + value + this.state.board.slice(index + 1);
		this.setState({ board });
	}

	render() {
	    return (
			<div className="App">
			   <h1>Sudoku</h1>
			   <Board board={this.state.board} handleChange={this.handleChange.bind(this)}/>
			   <div className="buttons">
			       <button onClick={this.start.bind(this)}>New game</button>
			       <button onClick={this.restart.bind(this)}>Restart</button> 
			       <button onClick={this.checkSolve.bind(this)}>Check</button>
			       <button onClick={this.solve.bind(this)}>Solve</button>			       
			   </div>
			</div>
		)
	}
}
export default App;

