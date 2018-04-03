import React, { Component } from 'react';
import LocationTileItem from './LocationTileItem/LocationTileItem';

class LocationTileItemContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    componentWillMount() {
    }

    render() {
        return (
            <LocationTileItem locationData={this.props.locationData}/>
        );
    }
}

export default LocationTileItemContainer;