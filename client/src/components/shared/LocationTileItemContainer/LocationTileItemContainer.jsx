import React, { Component } from 'react';

import LocationTileItem from './LocationTileItem/LocationTileItem';
import { notificationError } from '../constants';
import * as defaultImage from '../../../assets/location-default-image.jpg';

class LocationTileItemContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        this._setDefaultImage = this._setDefaultImage.bind(this);
        this._onLocationClick = this._onLocationClick.bind(this);
    }

    render() {
        return (
            <LocationTileItem
                locationData = {this.props.locationData}
                onLocationClick = {this._onLocationClick}


            />
        );
    }

    _setDefaultImage() {
        if (this.props.locationData.images.length === 0) {
            this.props.locationData.images[0] = defaultImage;
        }
    }

    componentWillMount() {
        this._setDefaultImage();
    }

    // async _getLocationDetails() {
    //     let id = this.props.locationData._id;
    //     try {
    //         let response = fetch(`http://localhost:3001/api/location/getSingleLocation/${id}`, {
    //             headers: {
    //                 'Accept': 'application/json',
    //                 'Content-Type': 'application/json'
    //             },
    //             method: 'get',
    //         });
    //         return await response.json();
    //     }
    //     catch (err){
    //         notificationError(err);
    //     }
    // }

    // async _getLocationDetails() {
    //     let id = this.props.locationData._id;
    //     try {
    //         let request = await fetch(`http://localhost:3001/api/location/getSingleLocation/${id}`, {
    //             headers: {
    //                  'Accept': 'application/json',
    //                  'Content-Type': 'application/json'
    //             },
    //             method: 'get',
    //          });
    //          const response = await request.json();
    //          return response;
    //     } 
    //     catch(err) {
    //         //
    //     }
              
        
    // }

    // _getLocationDetails = async() => {
    //     let id = this.props.locationData._id;
    //     await fetch(`http://localhost:3001/api/location/getSingleLocation/${id}`, {
    //        headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //        },
    //        method: 'get',
    //     }).then(function(response){
    //         if(response.status === 200) {
    //             response.json().then((data) => {
    //                 return data;
    //             })
    //         } else {
    //             response.json().then((data) => {
    //                 notificationError(data.message);
    //             });
    //         }
    //     }.bind(this));

    // }

    _getLocationDetails = async() => {
        let id = this.props.locationData._id; 
        try {
            const response = await fetch(`http://localhost:3001/api/location/getSingleLocation/${id}`, {
                headers: {
                     'Accept': 'application/json',
                     'Content-Type': 'application/json'
                },
                method: 'get',
             });
            const data = await response.json();
            return data;
            
        } catch(e) {
            notificationError(e.message);
        }

    }

    _onLocationClick = async() => {
        let mountComponent = 'LocationDetailsComponent';
        let locationDetails = await this._getLocationDetails();
        
        this.props.triggeredBody(mountComponent, locationDetails)

    }
}

export default LocationTileItemContainer;