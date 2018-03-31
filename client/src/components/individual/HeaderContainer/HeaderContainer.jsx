import React, { Component } from 'react';
import Header from './Header/Header';

class HeaderContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentWillMount() {

    }
    render() {
        return (
            <Header/>
        );
    }
}

export default HeaderContainer;