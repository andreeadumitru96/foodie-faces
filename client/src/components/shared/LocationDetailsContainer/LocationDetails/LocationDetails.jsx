import React, { Component } from 'react';

import LocationDetailsHeader from '../LocationDetailsHeader/LocationDetailsHeader';
import './LocationDetails.css';

class LocationDetails extends Component {
	constructor(props) {
		super(props);
		this.state = {
        };
        
	}

	render() {
		return (
			<div className="location-details">
                <LocationDetailsHeader
                    locationDetails = {this.props.locationDetails}
                />
			</div>
		);
    }
    
}

export default LocationDetails;