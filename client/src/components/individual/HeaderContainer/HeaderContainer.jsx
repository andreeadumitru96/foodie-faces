import React, { Component } from 'react';
import Header from './Header/Header';
import {cityList} from '../../shared/constants';

class HeaderContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cityDropdownDataSet: cityList
        };
    }

    componentWillMount() {

    }
    render() {
        return (
            <Header cityList={this.state.cityDropdownDataSet}/>
        );
    }
}

export default HeaderContainer;