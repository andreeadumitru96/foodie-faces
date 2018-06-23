import React, { Component } from 'react';
import HeaderContainer from '../../HeaderContainer/HeaderContainer';

class MyAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div>
                <HeaderContainer
                    isMyAccountMount = {true}
                />
            </div>
        );
    }
}

export default MyAccount;