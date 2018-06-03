import React, { Component } from 'react';

import LocationDetailsHeader from '../LocationDetailsHeader/LocationDetailsHeader';
import './LocationDetails.css';
import LocationDetailsGrid from '../LocatonDetailsGrid.jsx/LocationDetailsGrid';
import LocationDetailsActions from '../LocationDetailsActions/LocationDetailsActions';
import LocationDetailsReviews from '../LocationDetailsReviews/LocationDetailsReviews';
import LocationDetailsMap from '../LocationDetailsMap/LocationDetailsMap';
import LocationDetailsMenu from '../LocationDetailsMenu/LocationDetailsMenu';
import LocationDetailsMostRecommendedDishes from '../LocationDetailsRecommendDish/LocationDetailsMostRecommendedDishes';
import LocationDetailsSimilarLocations from '../LocationDetailsSimilarLocations/LocationDetailsSimilarLocations';

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

                <LocationDetailsMenu
                    locationDetails = {this.props.locationDetails}
                />

                <LocationDetailsMostRecommendedDishes
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
                <LocationDetailsSimilarLocations
                    locationDetails = {this.props.locationDetails}
                />

			</div>
		);
    }
    
}

export default LocationDetails;