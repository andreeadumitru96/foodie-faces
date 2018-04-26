import React, { Component } from 'react';

import { GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

import './LocationTileItem.css';

class LocationTileItem extends Component {
    constructor(props) {

        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <GridTile className="location-tile"
                key={this.props.locationData._id}
                title={this.props.locationData.name}
                subtitle={this.props.locationData.price}
                onClick={this.props.onLocationClick}
                actionIcon={
                    <IconButton className="location-tile__button">
                        <StarBorder className="location-tile__button-star" />
                    </IconButton>
                }
            >
                <img className="location-tile__image" src={this.props.locationData.images[0]} />
            </GridTile>
        );
    }

}

export default LocationTileItem;