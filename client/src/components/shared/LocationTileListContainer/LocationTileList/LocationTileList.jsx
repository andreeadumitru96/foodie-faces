import React, { Component } from 'react';
import LocationTileItemContainer from '../../LocationTileItemContainer/LocationTileItemContainer';
import GridList from 'material-ui/GridList';

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        height: 'auto',
        justifyContent: 'center',
    },
    gridList: {
        width: '50%',
        height: 'auto'
    },
};

class LocationTileList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="location-tile-list" style={styles.root}>
                <GridList
                    cellHeight={180}
                    style={styles.gridList}
                    >
                    {this.props.locationsList.map(location => (
                        <LocationTileItemContainer locationData={location} key={location._id} />
                    ))}
                </GridList>
            </div>
        );
    }

    componentWillReceiveProps() {
        this.forceUpdate();
    }

}

export default LocationTileList;