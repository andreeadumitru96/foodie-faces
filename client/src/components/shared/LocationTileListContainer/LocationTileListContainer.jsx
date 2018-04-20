import React, {Component} from 'react';

import LocationTileList from '../LocationTileListContainer/LocationTileList/LocationTileList';
import {notificationError} from '../constants';

class LocationTileListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };

        // this._getAllLocations = this._getAllLocations.bind(this);
    }

    componentWillMount() {
        // this._getAllLocations();
    }

    // _getAllLocations = function() {
    //     fetch('http://localhost:3001/api/location/getAllLocations', {
    //        headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //        },
    //        method: 'get',
    //     }).then(function(response){
    //         if(response.status === 200) {
    //             response.json().then((data) => {
    //                 this.setState({locationsList: data});
    //             })
    //         } else {
    //             response.json().then((data) => {
    //                 notificationError(data.message);
    //             });
    //         }
    //     }.bind(this));
    // };

    render() {
        return (
            <LocationTileList 
                locationsList = {this.props.locationsList ? this.props.locationsList : []}
                triggeredBody = {this.props.triggeredBody}
            />
        );

    }
}

export default LocationTileListContainer;