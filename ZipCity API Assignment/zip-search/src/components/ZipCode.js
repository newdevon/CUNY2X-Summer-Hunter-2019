import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import MapInfo from './MapInfo';
import './ZipCode.css'

class ZipCode extends Component {
	constructor() {
		super()
		this.state = {
			zip: "",
	    	data: [{
	    		Zipcode: "Ex: 11220",
	    		State: "Ex: NY",
	        	Lat:"Ex: 41",
	        	Long: "Ex: -73",
	        	EstimatedPopulation:"Ex: 50000",
	         	TotalWages:"Ex: 900000000"
	        }
	      ]
	    }
	}

	fetchZipCodeData = async() => { //JS runs async func and it is pushed on to the event loop
		let response = await axios.get("http://ctp-zip-api.herokuapp.com/zip/" + this.state.zip)
		console.log(response) //reponse is an object with a lot of props
		this.setState({data:response.data}) //set data an array with all the info data from response.data
		console.log(this.state)
	}

	handleChange = (evt) => {
		//targt has two objects inside, name and value
		const name = evt.target.name;
		const value = evt.target.value;
		this.setState({[name]:value}); //this sets the name as the value
		console.log(this.state);
	}

	render() {
		return (
			<div align="center">
				<h1> Search Zip Code </h1>
				{/* When something is typed in input, value which we set as state 
				zip changes state zip, which triggers onChange*/}
				<input type="text" value={this.state.zip} name="zip" onChange={this.handleChange}/>
				<button onClick={this.fetchZipCodeData}>Search</button>
				<div class="align">
					{this.state.data.map(city => {
						return(
							<MapInfo data={city}/> //creates a prop named data, pass in objects from city and return component
						)
					})}
				</div>
			</div>
		)
	}
}

export default ZipCode;

