import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import AutoComplete from 'material-ui/AutoComplete';

import AvatarMenuContainer from '../AvatarMenuContainer/AvatarMenuContainer';
import logoImg from '../../../../assets/logo.jpg';
import './Header.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
          
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
                                dataSource={this.props.citiesList}
                                filter={AutoComplete.caseInsensitiveFilter}
                                onNewRequest = {this.props.onSelectCity}                               
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
    componentWillReceiveProps() {
		this.forceUpdate();
	}
}

export default Header;