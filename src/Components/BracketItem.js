import React, { Component } from 'react';

class BracketItem extends Component {
	constructor(props) {
		super(props);		
    }
    
    render() {
		return (
			<div className="bracketItemComponent">
				<div className="label">{this.props.name}</div>
				<button type="button" onClick={this.props.handleDeleteContender()}>X</button>
			</div>
		)
	}
}

export default BracketItem;

