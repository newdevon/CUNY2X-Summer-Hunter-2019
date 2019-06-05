//App.js
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';
import ContactCard from './ContactCard'
import Decrement from './Decrement'

class MyApp extends Component {
	constructor(props) {super(props)}
	render() {
		return (
			<div>

				<ContactCard contactName="Zoey" email="zoeywantsluv123@hotmail.com" mobileNumber="718-876-8090"/>
				<ContactCard contactName="Joanne" email="roundoneplushies@yahoo.com" mobileNumber="917-448-3213"/>
				<ContactCard contactName="Mac" email="millerlite@gmail.com" mobileNumber="800-223-4123"/>

				<Decrement startNumber={10}/>
				
			</div>
		)
	}
};

export default MyApp;
