import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import PinPoint from '../../../individual/LocationSearchContainer/GoogleMapContainer/PinPoint/PinPoint';

class LocationDetailsMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="google-maps">
                <GoogleMapReact
                    defaultCenter={this.props.center}
                    onChange={this._onChange}
                    defaultZoom={this.props.zoom}
                >

                    <PinPoint
                        text={this.props.locationDetails.name}
                        lat={parseFloat(this.props.locationDetails.coordinates.latitude)}
                        lng={parseFloat(this.props.locationDetails.coordinates.longitude)}
                        key={this.props.locationDetails.name} />



                </GoogleMapReact>
            </div>

        );
    }

}

LocationDetailsMap.defaultProps = {
    center: {lat: 49.348405, lng: 2.9055590000000393},
    zoom: 11
  };

export default LocationDetailsMap;