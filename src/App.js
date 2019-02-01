import React, { Component } from 'react';
import './App.scss';
import Input from './Components/Input';
import Bracket from "./Components/Bracket";


class App extends Component {
	constructor() {
		super();
		//this.deleteContenderFromState = this.deleteContenderFromState.bind(this);
		this.handleSelectionAdded = this.handleSelectionAdded.bind(this);
		this.state = {
			selection: []
		};
	}

	deleteContenderFromState(index) {
	//let temp = this.state.selection;
	console.log('deleting from state');
	console.log(index);
    //console.log(temp[index]);

  }
	handleSelectionAdded(value) {
		if (value.length > 0) {
			this.setState({
				selection: [...this.state.selection, value] //simple value
			});
		}
	}

	render() {
		return (
			<div className="App">
				<Bracket
					deleteContender={this.deleteContenderFromState}
					contenders={this.state.selection}
				/>
				<Input onSelectionAdded={this.handleSelectionAdded} />
			</div>
		);
	}
}

export default App;
