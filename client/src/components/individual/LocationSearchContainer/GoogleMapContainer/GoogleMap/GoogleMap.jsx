import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import './GoogleMap.css'

const AnyReactComponent = ({ text }) => <div>{ text }</div>;

class GoogleMap extends Component {
    constructor(props){
        super(props);
        this.state = {
            markers: [],
        }
    }
    

render() {
    return (
        <div className="googleMapsWrapper">
            <GoogleMapReact
            defaultCenter={this.props.center}
            onChange={this._onChange}
            defaultZoom={this.props.zoom}
            >
            <AnyReactComponent
                lat={59.955413}
                lng={30.337844}
                text={'Google Map'}
            />
            </GoogleMapReact>
        </div>
      );
  }
}

GoogleMap.defaultProps = {
    center: {lat: 59.95, lng: 30.33},
    zoom: 11
  };

export default GoogleMap;