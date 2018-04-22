import React, { Component } from 'react';

import LocationDetailsHeader from '../LocationDetailsHeader/LocationDetailsHeader';
import './LocationDetails.css';
import LocationDetailsGrid from '../LocatonDetailsGrid.jsx/LocationDetailsGrid';
import LocationDetailsActions from '../LocationDetailsActions/LocationDetailsActions';

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
                <LocationDetailsGrid
                    locationDetails = {this.props.locationDetails}
                />
                <LocationDetailsActions/>
			</div>
		);
    }
    
}

export default LocationDetails;