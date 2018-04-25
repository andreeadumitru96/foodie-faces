import React, {Component} from 'react';

import LocationTileList from '../LocationTileListContainer/LocationTileList/LocationTileList';
import {notificationError} from '../constants';

class LocationTileListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    render() {
        return (
            <LocationTileList 
                locationsList = {this.props.locationsList ? this.props.locationsList : []}
                triggeredBody = {this.props.triggeredBody}
            />
        );

    }
}

export default LocationTileListContainer;