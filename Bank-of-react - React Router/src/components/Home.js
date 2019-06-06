// src/components/Home.js
import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';

class Home extends Component {
	render () {
		return(
			<div>
				<img src="https://i0.wp.com/lunapps.com/blog/wp-content/uploads/2018/01/banking-app-concept-shot.jpg?resize=558%2C593&ssl=1" alt="bank"/>
				<h1>Bank of React</h1>

				<Link to="/userProfile">Sample User Profile</Link>
				<br></br>
				<Link to="/login">Login</Link>

				<AccountBalance accountBalance={this.props.accountBalance}/>
			</div>
		);
	}
}

export default Home;