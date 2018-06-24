import React from 'react';

class Tile extends React.Component {
	constructor(props){
		super(props);
		this.state = {value: ''};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.setState({value: e.target.value});
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					<input type="number" min="1" max="9" value={this.state.value} />
				</label>
			</form>
		);
	}
}

export default Tile;


