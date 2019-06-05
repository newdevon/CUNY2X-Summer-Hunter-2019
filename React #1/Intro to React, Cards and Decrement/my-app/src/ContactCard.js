//This is the javascript for creating the component used in App js
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';

class ContactCard extends Component {
	constructor(props) {super(props)};
	render() {
			return (
				<div id={this.props.id}>
					<img src={require('./img_avatar.png')} />
					<p> Contact Name: {this.props.contactName} </p>
					<p> Email: {this.props.email} </p>
					<p> Mobile Number: {this.props.mobileNumber} </p>
				</div>
			)
	}
};

ContactCard.protoTypes = {
	contactName: PropTypes.string,
	email: PropTypes.string,
	mobileNumber: PropTypes.number 
}

export default ContactCard;
