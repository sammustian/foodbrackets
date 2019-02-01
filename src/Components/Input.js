import React, {Component} from 'react';



class Input extends Component {
	constructor(props) {
		super(props);
		//this.addInput = this.addInput.bind(this);
		this.state = {
			inputValue: ""
		};
	}

    onSelectionAdded(selection) {
        this.props.onSelectionAdded(selection);
        this.setState({
            inputValue: ""
        })
    }

	updateInputValue(e) {
		this.setState({
			inputValue: e.target.value
		});
	}

	render() {
		const selection = this.state.inputValue;
		return (
			<div className="inputComponent">
				<input
					type="text"
					value={this.state.inputValue}
					onChange={e => this.updateInputValue(e)}
					placeholder="add a resturant"
				/>
				<button onClick={() => this.onSelectionAdded(selection)} type="submit">
					Add Selection
				</button>
			</div>
		);
	}
}


export default Input;