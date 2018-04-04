import React, { Component } from 'react';
import LocationTileItem from './LocationTileItem/LocationTileItem';

import * as defaultImage from '../../../assets/location-default-image.jpg';

class LocationTileItemContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
        this._setDefaultImage = this._setDefaultImage.bind(this);
    }

    _setDefaultImage() {
        if(this.props.locationData.images.length === 0) {
            this.props.locationData.images[0] = defaultImage;
        }
    }

    componentWillMount() {
        this._setDefaultImage();
    }

    render() {
        return (
            <LocationTileItem 
                locationData={this.props.locationData}

            />
        );
    }
}

export default LocationTileItemContainer;