import React, { Component } from 'react';
import LocationDetails from './LocationDetails/LocationDetails';


class LocationDetailsContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
        };
        
	}

	render() {
		return (
			<div>
                <LocationDetails/>
			</div>
		);
    }
    
}

export default LocationDetailsContainer;