import React, { Component } from 'react';

import Home from './Home/Home'
import {cookies} from '../../shared/notification';

class HomeContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userData: cookies.get('user')
		}
	}

	render() {
		return (
			<div>
				<Home userData={this.state.userData} />
			</div>
		);
	}
}

export default HomeContainer;