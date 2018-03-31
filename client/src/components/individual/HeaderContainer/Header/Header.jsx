import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import SearchBar from 'material-ui-search-bar';
import IconButton from 'material-ui/IconButton';

import AvatarMenuContainer from '../AvatarMenuContainer/AvatarMenuContainer';

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
            <AppBar 
                iconElementRight={<AvatarMenuContainer/>}
                iconElementLeft={<SearchBar/>}
                        
            />
        );
    }
}

export default Header;