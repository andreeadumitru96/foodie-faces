import React, { Component } from 'react';

import LocationFilters from './LocationFilters/LocationFilters';
import {notificationError} from '../constants';

class LocationFiltersContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filtersList: {
                cuisine: [],
                goodFor: [],
                meals: []
            }
        };
        this._getFiltersByLocations = this._getFiltersByLocations.bind(this);

    }

    render() {
        return (
            <div>
                <LocationFilters filtersList={this.state.filtersList}/>    
            </div>
        );
    }

    _getFiltersByLocations() {
        fetch('http://localhost:3001/api/location/getFiltersByLocations', {
           headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
           },
           method: 'get',
        }).then(function(response){
            if(response.status === 200) {
                response.json().then((data) => {
                    this.setState({filtersList: data});
                })
            } else {
                response.json().then((data) => {
                    notificationError(data.message);
                });
            }
        }.bind(this));
    }

    componentWillMount() {
        this._getFiltersByLocations();
    }

}

export default LocationFiltersContainer;