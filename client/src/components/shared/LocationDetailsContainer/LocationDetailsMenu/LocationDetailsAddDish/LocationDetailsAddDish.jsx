import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Dropzone from 'react-dropzone';
import ReactStars from 'react-stars';

import './LocationDetailsAddDish.css';

class LocationDetailsAddDish extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };

        // this.reviewScore = 

    }

    render() {
        return (
            <Dialog
                title="What did you eat? Help the community"
                // actions={actions}
                modal={false}
                open={this.props.isAddDishOpen}
                className="location-details-add-dish"
            // onRequestClose={}
            >
                <div className="location-details-add-dish__score">
                    <ReactStars
                        count={5}
                        size={24}
                        color2={'green'}
                        half={false}
                    // value={this.state.locationDetails.averageScore}
                    // onChange={this._onRatingChanged}
                    />
                </div>
                <div className="location-details-add-dish__information">
                    <div className="information-dish-name">
                        <TextField
                            floatingLabelText="Dish name"
                        />
                    </div>
                    <div className="information-category">
                        <TextField
                            floatingLabelText="Category"
                        />
                    </div>
                    <div className="information-price">
                        <TextField
                            floatingLabelText="Price"
                        />
                    </div>
                </div>

                <div className="location-details-add-dish__upload">                   
                    <Dropzone
                        multiple={false}
                        accept="image/*"
                        // onDrop={}
                        className="photos-add-photo"
                    >
                        <i className="fa fa-plus">
                            Add a photo
                        </i>
                    </Dropzone>
                </div>

                <div className="location-details-add-dish__buttons">
                    <div className="buttons-send">
                        <RaisedButton label="SEND"
                        // onClick={}
                        />
                    </div>

                    <div className="buttons-cancel">
                        <RaisedButton label="CANCEL"
                        // onClick={}
                        />
                    </div>
                </div>
            </Dialog>
        );
    }

    _onRatingChanged(newRating) {
        this.reviewScore = newRating;
    }
}

export default LocationDetailsAddDish;