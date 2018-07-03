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
		this.setState({
			board:   //co tu powinno być?? losowanie nowej planszy ?? 
			initialBoard: this.state.board
		});
	}
// restart usuwa wszystkie wpisane przez użtkowanika cyfry, ale pozostawia daną planszę 
	restart() {

	}

	//solve rozwiązuje aktualną grę i wyświetla rozwiązanie na planszy 
/*	solve() {
		const solution = solve(this.state.initialBoard)// skąd znane jest rozwiązanie?? czy to dobry zapis?? initialBoard czy Board?
		this.setState({
			board: solution 
		})
	}
*/
	//checkSolve rozwiązuje aktualną grę, ale nie wyświetla rozwiązania, 
	//tylko komunikat informujący czy aktualnie wpisane cyfry są poprawne 
/*	checkSolve() {
		const check = //porównanie z rozwiązaniem
		if (check) {
			alert ('OK!')
		} else {
			alert ('Try again!')
		}
	}
	*/

	render() {
	    return (
			<div className="App">
			   <h1>Sudoku</h1>
			   <Board board={this.state.board} handleChange={this.handleChange.bind(this)}/>
			   <div className="buttons">
			       <button onClick={this.start.bind(this)}>New game</button>
			       <button onClick={this.restart.bind(this)}>Restart</button> 
			       <button onClick={this.solveCheck.bind(this)}>Check</button>
			       <button onClick={this.solve.bind(this)}>Solve</button>			       
			   </div>
			</div>
		)
	}
}

export default App;

