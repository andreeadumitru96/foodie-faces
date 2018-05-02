import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import PinPoint from '../PinPoint/PinPoint';

import './GoogleMap.css'

class GoogleMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }


    render() {
        return (
            <div className="google-maps">
                <GoogleMapReact
                    center = {this.props.getCenterCoordinates()}
                    defaultZoom = {this.props.getCenterZoom()}
                    
                >
                    {this.props.locationsList.map(location => (

                        <PinPoint
                            text = {location.name}
                            lat = {parseFloat(location.coordinates.latitude)}
                            lng = {parseFloat(location.coordinates.longitude)}
                            key = {location.name}
                        />

                    ))}

                </GoogleMapReact>
            </div>
        );
    }
    
}

export default GoogleMap;