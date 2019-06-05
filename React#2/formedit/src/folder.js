import React, {Component} from 'react';
import PropTypes from 'prop-types'; 
import logo from './logo.svg';
import './App.css';

class Folder extends Component {
	constructor(props) {
		super(props)
		this.state= {
			flag: false
		}
	}

	showFiles = () => {
		this.setState({flag:true})
	}

	hideFiles = () => {
		this.setState({flag:false})
	}

	render() {
		return(		
			<div>

				<p> Check your files here</p>
				<button hidden={this.state.flag} onClick={this.showFiles}>Open</button>
				<div hidden={!this.state.flag}>
					<p> family-photo.png </p>
					<p> Joseph_Office_Report.doc </p>
					<p> Ultimate_Smash.exe </p>
					<button onClick={this.hideFiles}>Hide</button>
				</div>

			</div>
		)
	}

}

export default Folder;