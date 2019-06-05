import React, {Component} from 'react';
import PropTypes from 'prop-types'; 
import logo from './logo.svg';
import './App.css';

class Form extends Component {
	constructor(props) {
		super(props)
		this.state= {
			name: "Jane Doe",
			flag: false
		}
	}

	//should bring out 2 buttons to save or cancel
	//when false buttons are hidden, when true it is flipped
	edit = () => {
		this.setState({flag:true})
	}

	save = () => {
		this.setState({flag:false})
	}

	handleChange = (evt) => {
		console.log(evt.target)
		this.setState({[evt.target.name]: evt.target.value})
	}

	render() {
		return(		
			<div id={this.props.id}>
				<div>
					<h1> Enter your name </h1>
					<p> {this.state.name} </p>
					<button onClick={this.edit} hidden={this.state.flag}>Edit</button>
					<input hidden={!this.state.flag} name="name" type="text" value={this.state.name} onChange={this.handleChange}/>
					<button hidden={!this.state.flag} onClick={this.save}>Save</button>
					<button hidden={!this.state.flag} onClick={this.save}>Cancel</button>
				</div>
			</div>
		)
	}
}


export default Form;