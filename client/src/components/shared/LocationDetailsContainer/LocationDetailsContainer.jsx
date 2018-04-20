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
            <LocationDetails
                locationDetails={this.props.locationDetails}
            />

        );
    }

}

export default LocationDetailsContainer;