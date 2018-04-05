import React, { Component } from 'react';

import Home from './Home/Home'
import HeaderContainer from '../HeaderContainer/HeaderContainer';
import BodyContainer from '../BodyContainer/BodyContainer';
import LocationSearchContainer from '../LocationSearchContainer/LocationSearchContainer';
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
        this._fetchedLocationsTriggered = this._fetchedLocationsTriggered.bind(this);
	}

	render() {
		return (
			<div>
                <HeaderContainer 
                    manageBodyComponents={this._manageBodyComponents}
                    onLocationsFetched = {this._fetchedLocationsTriggered}
                />
                <BodyContainer 
                    componentToMount={this.state.componentMountInBody}
                    receivedLocationsFromHeader={this.state.receivedLocationsFromHeader}    
                />
               
				<Home userData={this.state.userData} />
                
			</div>
		);
    }
    
    _manageBodyComponents (mountComponent) {
        if(mountComponent === 'LocationSearchComponent') {
            this.setState({componentMountInBody: mountComponent})
        }
    }

    _fetchedLocationsTriggered (locations) {
        this.setState({receivedLocationsFromHeader: locations})
    }
}

export default HomeContainer;