import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import MapInfo from './MapInfo';

class cityCode extends Component {
	constructor() {
		super()
		this.state = {
			city: "",
	    	data: []
	    }
	}

	fetchcityCodeData = async() => { //JS runs async func and it is pushed on to the event loop
		let allUpper = this.state.city.toUpperCase();
		let response = await axios.get("http://ctp-zip-api.herokuapp.com/city/" + allUpper)
		console.log(response) //reponse is an object with a lot of props
		this.setState({data:response.data}) //set data an array with all the info data from response.data
		console.log(this.state)
	}

	// fetchcityCodeData = () => {
	// 	fetch("http://ctp-city-api.herokuapp.com/city/" + this.state.city)
	// 	.then(results => {
	// 		return results.json();
	// 	}).then(data=> {
	// 		let array= data.results.map((arr)=> {
	// 			return(
	// 				<div key={pic.results}>
	// 					<array={this.state.city}/>
	// 				</div>
	// 			)
	// 		})
	// 		this.setState({data: array});
	// 		console.log("state",this.state.array);
	// 	})
	// }

	handleChange = (evt) => {
		//targt has two objects inside, name and value
		const name = evt.target.name;
		const value = evt.target.value;
		this.setState({[name]:value}); //this sets the name as the value
		console.log(this.state);
	}

	render() {
		return (
			<div>
				<h1> Search City Name </h1>
				{/* When something is typed in input, value which we set as state 
				city changes state city, which triggers onChange*/}
				<input type="text" value={this.state.city} name="city" onChange={this.handleChange}/>
				<button onClick={this.fetchcityCodeData}>Search</button>
				<div>
					
					{this.state.data}
					{/*
					{this.state.data.map(citi => {
						return(
							<MapInfo data={citi}/> //creates a prop named data, pass in objects from city and return component
						)
					})}
					*/}

					<p>Note: The zip codes are listed but are not mapping correctly, thus not spacing out</p>
				</div>
			</div>
		)
	}
}

export default cityCode;