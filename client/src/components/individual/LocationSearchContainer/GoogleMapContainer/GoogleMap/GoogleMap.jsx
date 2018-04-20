import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import PinPoint from '../PinPoint/PinPoint';

import './GoogleMap.css'

class GoogleMap extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    componentWillMount() {
        console.log(this.props.locationsList)
    }
    

render() {
    return (
        <div className="google-maps">
            <GoogleMapReact
                defaultCenter={this.props.center}
                onChange={this._onChange}
                defaultZoom={this.props.zoom}
            >
            {this.props.locationsList.map(location => (
                <PinPoint 
                    text={location.name}
                    lat={parseFloat(location.coordinates.latitude)}
                    lng={parseFloat(location.coordinates.longitude)}  
                    key={location.name}/>

            ))}

            </GoogleMapReact>
        </div>
      );
  }
}

GoogleMap.defaultProps = {
    center: {lat: 49.348405, lng: 2.9055590000000393},
    zoom: 11
  };

export default GoogleMap;