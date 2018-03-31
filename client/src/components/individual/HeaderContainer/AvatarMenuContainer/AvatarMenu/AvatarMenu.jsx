import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';

class AvatarMenu extends Component {
	constructor(props) {
		super(props);
		this.state = {
			
		}
	}

	render() {
		return (
            <div><Avatar>{this.props.avatarName}</Avatar>
            </div>
		);
	}
}

export default AvatarMenu;