import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';

import './AvatarMenu.css';

class AvatarMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            avatarLetter: props.avatarName
        }
    }

    render() {

        return (

            <div>
                <IconMenu
                    className="avatar-menu"
                    iconButtonElement={
                        <IconButton>
                            <Avatar className="avatar-menu__letters"> {this.props.avatarName} </Avatar>
                        </IconButton>
                    }
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                    targetOrigin={{ vertical: 'top', horizontal: 'left' }}
                >
                    <MenuItem primaryText="My account" />
                    <MenuItem primaryText="Sign Out" onClick={this.props.onSignOut}/>
                </IconMenu>
            </div>

        );
    }
}

export default AvatarMenu;