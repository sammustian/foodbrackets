import React, {Component} from 'react';
import BracketItem from './BracketItem';

class Bracket extends Component {
	constructor(props) {
		super(props);
		this.deleteContender = this.deleteContender.bind(this);
		this.state = {
			selection: []
		};
	}

	componentWillReceiveProps(newProps) {
		this.setState({
			selection: newProps.contenders
		});
	}

	deleteContender(index) {
		
	}

	render() {
		const contenders = this.state.selection;
		return (
			<div className="bracketCompontent">
				{contenders.map((value, index) => {
					return (
						<BracketItem
							handleDeleteContender={() => this.props.deleteContender(index)}
							key={value + "_" + index}
							name={value}
							index={index}
						/>
					);
				})}
			</div>
		);
	}
}

export default Bracket;
