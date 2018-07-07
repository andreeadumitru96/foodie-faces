import React, { Component } from 'react';
import { GridList } from 'material-ui';

import LocationTileItemContainer from '../../../shared/LocationTileItemContainer/LocationTileItemContainer';
import './WishList.css';

class WishList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wishList: props.wishList
        };
    }

    render() {
        return (
            <div className="wish-list-grid">
                <GridList 
                    cols={3}
                    className="wish-list-grid__items"
                >
                    {this.state.wishList.map((location) => {
                        return(
                            <LocationTileItemContainer
                                locationData={location}
                                key={location._id}
                                triggeredBody = {this.props.triggeredBody}
                        />) 
                    })}
                </GridList>
            </div>
        );
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            wishList: newProps.wishList
        });
    }
}

export default WishList;