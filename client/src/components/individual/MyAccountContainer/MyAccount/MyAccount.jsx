import React, { Component } from 'react';
import { GridList } from 'material-ui';

import HeaderContainer from '../../HeaderContainer/HeaderContainer';
import LocationTileItemContainer from '../../../shared/LocationTileItemContainer/LocationTileItemContainer';
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
                <WishList
                    wishList={this.props.wishList}
                />
            </div>
        );
    }
}

export default MyAccount;