import React, { Component , PropTypes } from 'react';

class MapInfo extends Component {
	constructor(props){
		super(props);
	}
	render() {
		let {Zipcode} = this.props.data;
		return (
			<div>
				<p> Zip Code: {Zipcode} </p>
			</div>
		);
	}
}

export default MapInfo;