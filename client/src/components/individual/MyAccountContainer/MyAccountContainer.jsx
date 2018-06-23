import React, { Component } from 'react';
import MyAccount from './MyAccount/MyAccount';

class MyAccountContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <MyAccount/>
        );
    }
}

export default MyAccountContainer;