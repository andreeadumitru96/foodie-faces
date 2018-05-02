import React, { Component } from 'react';

import Home from './Home/Home'
import HeaderContainer from '../HeaderContainer/HeaderContainer';
import BodyContainer from '../BodyContainer/BodyContainer';
import {cookies} from '../../shared/constants';

class HomeContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
            userData: cookies.get('user'),
            componentMountInBody: 'MostRatedLocationsComponent',
            receivedLocationsFromHeader: []
        };
        this._manageBodyComponents = this._manageBodyComponents.bind(this);
	}

	render() {
		return (
			<div>
                <HeaderContainer 
                    manageBodyComponents = {this._manageBodyComponents}
                />
                <BodyContainer 
                    componentToMount = {this.state.componentMountInBody}
                    receivedLocationsFromHeader = {this.state.receivedLocationsFromHeader}    
                />
               
				<Home userData={this.state.userData} />
                
			</div>
		);
    }
    
    _manageBodyComponents(mountComponent, locations) {
        if(mountComponent === 'LocationSearchComponent') {
            this.setState({
                componentMountInBody: mountComponent,
                receivedLocationsFromHeader: locations
            })
        }
    }

}

export default HomeContainer;