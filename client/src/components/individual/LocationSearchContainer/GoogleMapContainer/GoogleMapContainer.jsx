import React, { Component } from 'react';
import GoogleMap from './GoogleMap/GoogleMap';

class GoogleMapContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
        };
        
	}

	render() {
		return (
            <GoogleMap/> 
		);
    } 
}

export default GoogleMapContainer;