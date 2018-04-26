import React, { Component } from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

import LocationTileListContainer from '../../../shared/LocationTileListContainer/LocationTileListContainer';
import GoogleMapContainer from '../GoogleMapContainer/GoogleMapContainer';

import './LocationSearch.css';

class LocationSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div className="location-search">
                <div className="location-search__filter">
                    <div className="filters-cuisine">
                        <DropDownMenu  >
                            
                        </DropDownMenu>
                    </div>
                </div>
                <div className="location-search__location-tile-list">
                    <LocationTileListContainer
                        locationsList={this.props.locationsList}
                        triggeredBody={this.props.triggeredBody}
                    />
                </div>

                <div className="location-search__google-map">
                    <GoogleMapContainer
                        locationsList={this.props.locationsList}
                    />
                </div>


            </div>
        );
    }
}

export default LocationSearch;