import React, { Component } from 'react';
import LocationTileListContainer from '../../../shared/LocationTileListContainer/LocationTileListContainer';

class LocationSearch extends Component {
	constructor(props) {
		super(props);
		this.state = {
			
		};
	}

	render() {
		return (
			<div>
               <LocationTileListContainer locationsList={this.props.locationsList}/> 
			</div>
		);
	}
}

export default LocationSearch;