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
                    this.props.onLocationsFetched(locations);
                    let mountComponent = 'LocationSearchComponent'
                    this.props.manageBodyComponents(mountComponent);
                })
            }
        }.bind(this))
    }
    render() {
        return (
            <Header 
                citiesList={this.state.citiesList}
                onSelectCity={this._onSelectCity}
            />
        );
    }


}

export default HeaderContainer;