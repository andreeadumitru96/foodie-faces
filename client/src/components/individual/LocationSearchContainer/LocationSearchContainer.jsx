import React, { Component } from 'react';
import LocationSearch from './LocationSearch/LocationSearch';

class LocationSearchContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
        };
        
	}

	render() {
		return (
			<div>
                <LocationSearch 
                    locationsList = {this.props.locationsList}
                    triggeredBody = {this.props.triggeredBody}
                />
			</div>
		);
    }
    
    componentWillMount() {
        this.forceUpdate();
    }
    
}

export default LocationSearchContainer;