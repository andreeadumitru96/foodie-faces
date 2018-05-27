import React, { Component } from 'react';

import LocationDetailsHeader from '../LocationDetailsHeader/LocationDetailsHeader';
import './LocationDetails.css';
import LocationDetailsGrid from '../LocatonDetailsGrid.jsx/LocationDetailsGrid';
import LocationDetailsActions from '../LocationDetailsActions/LocationDetailsActions';
import LocationDetailsReviews from '../LocationDetailsReviews/LocationDetailsReviews';
import LocationDetailsMap from '../LocationDetailsMap/LocationDetailsMap';

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
                <LocationDetailsActions
                    locationDetails = {this.props.locationDetails}     
                />

                <div className="location-details-reviews-map">
                    <LocationDetailsReviews
                        locationDetails = {this.props.locationDetails}
                    />
                    <LocationDetailsMap
                        locationDetails = {this.props.locationDetails} 
                    />
                </div>

			</div>
		);
    }
    
}

export default LocationDetails;