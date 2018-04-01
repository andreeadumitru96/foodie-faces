import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import SearchBar from 'material-ui-search-bar';
import IconButton from 'material-ui/IconButton';
import AutoComplete from 'material-ui/AutoComplete';

import AvatarMenuContainer from '../AvatarMenuContainer/AvatarMenuContainer';
import logoImg from '../../../../assets/logo.jpg';
// import {cityList} from '../../../shared/constants';

import './Header.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // cityDropdownDataSet: cityList
        };
    }

    componentWillMount() {

    }
    render() {
        return (
            <div className="header">
                <div className="header__appbar">
                    <AppBar
                        iconElementRight={<AvatarMenuContainer/>}
                        iconElementLeft={
                            <AutoComplete
                                hintText="Choose a city..."
                                dataSource={this.props.cityList}
                                filter= {AutoComplete.caseInsensitiveFilter}                               
                                className="header__appbar-autocomplete"          
                            />
                        }          
                    />
                </div>  

                <div className="header__logo">
                    <img src={logoImg} className="header__logo-img"/>
                </div>
            </div>
            
        );
    }
}

export default Header;