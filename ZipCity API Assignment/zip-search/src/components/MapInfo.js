import React, { Component } from 'react';
import './MapInfo.css'

class MapInfo extends Component {
	render() {
		let {
			Zipcode,
			State,
	    	Lat,
	    	Long,
	    	EstimatedPopulation,
	     	TotalWages,
	     } = this.props.data;
		return (
			<div>
				<p> Zip Code: {Zipcode} </p>
				<p> State: {State} </p>
				<p> Location: {Lat},{Long} </p>
				<p>	Population: {EstimatedPopulation} </p>
				<p> Total Wages: {TotalWages} </p>
			</div>
		);
	}
}

export default MapInfo;