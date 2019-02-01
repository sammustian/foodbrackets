import React, { Component } from 'react';

class BracketItem extends Component {
	constructor(props) {
		super(props);
		this.handleDeleteContender = this.handleDeleteContender.bind(this);
		
    }
    
    handleDeleteContender(key) {
		//this.props.handleDeleteContender(key)
		console.log('sam');
    }

    render() {
		return (
			<div className="bracketItemComponent">
				<div className="label">{this.props.name}</div>
				<button type="button" onClick={this.handleDeleteContender()}>Delete</button>
			</div>
		)
	}
}

export default BracketItem;

