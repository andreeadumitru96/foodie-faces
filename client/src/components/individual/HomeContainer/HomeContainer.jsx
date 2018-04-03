import React, { Component } from 'react';

import Home from './Home/Home'
import HeaderContainer from '../HeaderContainer/HeaderContainer';
import BodyContainer from '../BodyContainer/BodyContainer';
import {cookies} from '../../shared/constants';

class HomeContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userData: cookies.get('user')
		};
	}

	render() {
		return (
			<div>
                <HeaderContainer/>
                <BodyContainer/>
				<Home userData={this.state.userData} />
			</div>
		);
	}
}

export default HomeContainer;