import React, { Component } from 'react';
import { GridList, GridTile } from 'material-ui/GridList';

import './LocationDetailsGrid.css';
import FullSizeImage from './FullSizeImage/FullSizeImage';

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
            isFullSizeImageOpen: false
        };

        this._onClickFullSizeImage = this._onClickFullSizeImage.bind(this);
        this._triggerWindowClose = this._triggerWindowClose.bind(this);
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
                        // <GridTile
                        //     actionPosition="left"
                        //     titlePosition="top"
                        //     titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                        //     key={image}
                        // >
                        <div>

                        
                            <img src={image} onClick={this._onClickFullSizeImage}/>
                            <div>

                            
                                {this.state.isFullSizeImageOpen ?
                                <FullSizeImage 
                                    image={image}
                                    isFullSizeImageOpen={this.state.isFullSizeImageOpen}
                                    triggerWindowClose={this._triggerWindowClose}
                                />
                            :
                                null
                            }
                            </div>
                            
                        </div>    
                        // </GridTile>                      
                    ))}

                </GridList>
            </div>


        );
    }

    _onClickFullSizeImage() {
        this.setState({
            isFullSizeImageOpen: !this.state.isFullSizeImageOpen
        })
    }

    _triggerWindowClose() {
        this.setState({
            isFullSizeImageOpen: false
        })
    }

}

export default LocationDetailsGrid;