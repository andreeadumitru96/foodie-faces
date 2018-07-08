import React, { Component } from 'react';

import HeaderContainer from '../../HeaderContainer/HeaderContainer';
import './MyAccount.css';
import WishList from '../WishList/WishList';

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
                <div className="my-account__wish-list">
                    <div className="wish-list-title">
                        <h1>Your wish list</h1>
                    </div>
                    <WishList
                        wishList={this.props.wishList}
                    />
                </div>
                
            </div>
        );
    }
}

export default MyAccount;