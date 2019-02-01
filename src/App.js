import React, { Component } from 'react';
import './App.scss';
import Input from './Components/Input';
import Bracket from "./Components/Bracket";


class App extends Component {
	constructor() {
    super();
    this.deleteContender = this.deleteContender.bind(this);
		this.handleSelectionAdded = this.handleSelectionAdded.bind(this);
		this.state = {
			selection: []
		};
	}
	deleteContender(index) {
    let temp = this.state.selection;
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
					deleteContender={this.deleteContender}
					contenders={this.state.selection}
				/>
				<Input onSelectionAdded={this.handleSelectionAdded} />
			</div>
		);
	}
}

export default App;
