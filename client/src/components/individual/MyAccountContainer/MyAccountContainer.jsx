import React, { Component } from 'react';
import MyAccount from './MyAccount/MyAccount';
import { cookies, notificationError } from '../../shared/constants';

class MyAccountContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wishList: []
        };
        this._getLocationsWishList = this._getLocationsWishList.bind(this);
    }

    render() {
        return (
            <MyAccount
                wishList = {this.state.wishList}
            />
        );
    }
    
    _getLocationsWishList() {
        let userId = cookies.get('user')._id;
       
        fetch(`http://localhost:3001/api/getLocationsWishList/${userId}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'get'
        }).then(function (response) {
            if(response.status === 200) {
                response.json().then((locations) => {
                    this.setState({
                        wishList: locations
                    })
                })
            } else {
                response.json().then((data) => {
                    notificationError(data.message);
                });
            }
        }.bind(this));          
    }

    componentWillMount() {
        this._getLocationsWishList();
    }
}

export default MyAccountContainer;