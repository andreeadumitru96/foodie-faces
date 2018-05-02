import React, { Component } from 'react';
import GoogleMap from './GoogleMap/GoogleMap';

class GoogleMapContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
        };
        this._getCenterCoordinates = this._getCenterCoordinates.bind(this);
        this._getCenterZoom = this._getCenterZoom.bind(this);
        
	}

	render() {
		return (
            <GoogleMap 
                locationsList = {this.props.locationsList}
                getCenterCoordinates = {this._getCenterCoordinates}
                getCenterZoom = {this._getCenterZoom}

            /> 
		);
    }
    
    _getCenterCoordinates() {

        let center = {
            lat: parseFloat(this.props.locationsList[0].coordinates.latitude),
            lng: parseFloat(this.props.locationsList[0].coordinates.longitude)
        };
        return center;

    }
    _getCenterZoom() {
        let centerZoom = 12;
        return centerZoom;
    }
}

export default GoogleMapContainer;