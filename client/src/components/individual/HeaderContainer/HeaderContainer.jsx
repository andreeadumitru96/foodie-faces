import React, { Component } from 'react';

import Header from './Header/Header';
import {notificationError} from '../../shared/constants';

class HeaderContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            citiesList: []
        };
        this.fetchedLocationsData = [];
        this._getLocationsCities = this._getLocationsCities.bind(this);
        this._onSelectCity = this._onSelectCity.bind(this);
        this._setDefaultCoordinates = this._setDefaultCoordinates.bind(this);

    }

    render() {
        return (
            <Header 
                citiesList={this.state.citiesList}
                onSelectCity={this._onSelectCity}
            />
        );
    }

    componentWillMount() {
        this._getLocationsCities();
    }

    _getLocationsCities = function(req, res) {
        fetch('http://localhost:3001/api/location/getLocationsCities', {
            headers: {
                 'Accept': 'application/json',
                 'Content-Type': 'application/json'
            },
            method: 'get',
         }).then(function(response){
             if(response.status === 200) {
                 response.json().then((data) => {
                     this.setState({citiesList: data});
                 })
             } else {
                 response.json().then((data) => {
                     notificationError(data.message);
                 });
             }
         }.bind(this));
    }

    _setDefaultCoordinates(latitude, longitude) {
        let coordinates = {
            latitude: 0,
            longitude: 0
        };
        return coordinates;
    }

    _onSelectCity = function(cityName, index) {
        let cityData = {
            cityName: cityName
        };

        fetch('http://localhost:3001/api/location/getLocationsByCity', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'post',
            body: JSON.stringify(cityData)
        }).then(function(response) {
            if(response.status === 200) {
                response.json().then((locations) => {
                    
                    for(index = 0; index < locations.length; index++) { 
                        if(!locations[index].coordinates.longitude) {
                            
                            let coordinates = this._setDefaultCoordinates(locations[index].coordinates.latitude, locations[index].coordinates.longitude);
                            
                            locations[index].coordinates.latitude = coordinates.latitude;
                            locations[index].coordinates.longitude = coordinates.longitude;
                        }                      
                    }
                    this.props.onLocationsFetched(locations);
                    let mountComponent = 'LocationSearchComponent'
                    this.props.manageBodyComponents(mountComponent);
                })
            }
        }.bind(this))
    }
}

export default HeaderContainer;