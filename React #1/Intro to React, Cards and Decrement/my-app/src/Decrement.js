import React, {Component} from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';

class Decrement extends Component {
	constructor(props) {
		super(props)
		this.state = {
			startNumber:this.props.startNumber
		}
	}
	
	increment = () => {
		this.setState( {startNumber: ++this.state.startNumber})
	}

	decrement = () => {
		if(this.state.startNumber > 0) {
			this.setState( {startNumber: --this.state.startNumber})
		}
		if(this.state.startNumber === 0) {
			window.alert("You cannot subtract below zero")
		}
	}

	render() {
		return (
			<div id={this.props.id}>
				<p> Start Number: {this.state.startNumber} </p>
				<button onClick={this.increment}>+</button>
				<button onClick={this.decrement}>-</button>	

			</div>
			)
	}

};


export default Decrement;