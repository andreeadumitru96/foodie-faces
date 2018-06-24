import React, { Component } from 'react';
import HeaderContainer from '../../HeaderContainer/HeaderContainer';

import './MyAccount.css';

class MyAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="my-account">
                <HeaderContainer
                    className="my-account__header"
                    isMyAccountMount = {true}
                />
                <div>
                    {this.props.wishList.map(location => (
                        <ul>
                            <li> {location.name} </li>
                        </ul>
                    ))}
                </div>
            </div>
        );
    }
}

export default MyAccount;