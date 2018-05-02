import React, { Component } from 'react';
import { GridList, GridTile } from 'material-ui/GridList';

import './LocationDetailsGrid.css';

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        width: 500,
        height: 450,
        overflowY: 'auto',
    },
};

class LocationDetailsGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="location-details-grid">
                <GridList
                    cols={2}
                    cellHeight={200}
                    padding={1}
                    style={styles.gridList}
                >
                    {this.props.locationDetails.images.map((image) => (
                        <GridTile
                            actionPosition="left"
                            titlePosition="top"
                            titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                            key={image}
                        >
                            <img src={image} />
                        </GridTile>
                    ))}

                </GridList>
            </div>


        );
    }

}

export default LocationDetailsGrid;