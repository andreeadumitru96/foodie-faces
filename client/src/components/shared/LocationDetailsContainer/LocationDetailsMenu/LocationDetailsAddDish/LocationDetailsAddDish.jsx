import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Dropzone from 'react-dropzone';
import ReactStars from 'react-stars';

import './LocationDetailsAddDish.css';
import { CLOUDINARY_UPLOAD_PRESET, CLOUDINARY_UPLOAD_URL } from '../../../constants';
import { notificationError } from '../../../constants';


class LocationDetailsAddDish extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishImagePreview: null,
            dishImageBlob: null,
            uploadedDishImage: null
        };
        this._onAddDishImage = this._onAddDishImage.bind(this);
        this._onAddDish = this._onAddDish.bind(this);
        this._onDishScoreChanged = this._onDishScoreChanged.bind(this);
        this._getDishScore = this._getDishScore.bind(this);
    }

    render() {
        return (
            <Dialog
                title="What did you eat? Help the community"
                // actions={actions}
                modal={false}
                // open={this.props.isAddDishOpen}
                open={true}
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
                        onChange={this._onDishScoreChanged}
                    />
                </div>
                <div className="location-details-add-dish__information">
                    <div className="information-dish-name">
                        <TextField
                            floatingLabelText="Dish name"
                            ref={(inputValue) => { this.dishName = inputValue }}
                        />
                    </div>
                    <div className="information-category">
                        <TextField
                            floatingLabelText="Category"
                            ref={(inputValue) => { this.dishCategory = inputValue }}

                        />
                    </div>
                    <div className="information-price">
                        <TextField
                            floatingLabelText="Price"
                            ref={(inputValue) => { this.dishPrice = inputValue }}
                        />
                    </div>
                </div>

                <div className="location-details-add-dish__upload">
                    <Dropzone
                        multiple={false}
                        accept="image/*"
                        onDrop={this._onAddDishImage}
                        className="photos-add-photo"
                    >
                        <i className="fa fa-plus">
                            Add a photo
                        </i>
                    </Dropzone>
                </div>

                <div className="location-details-add-dish__image-preview">
                    <img src={this.state.dishImagePreview} />
                </div>

                <div className="location-details-add-dish__buttons">
                    <div className="buttons-send">
                        <RaisedButton label="SEND"
                            onClick={this._onAddDish}
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

    _onDishScoreChanged(newRating) {
        this.dishScore = newRating;
    }

    _getDishScore() {
        return this.dishScore;
    }

    _onAddDishImage(files) {

        this.setState({
            dishImagePreview: files[0].preview,
            dishImageBlob: files[0]
        })
    }

    _onAddDish() {
        let file = this.state.dishImageBlob

        let fd = new FormData();
        fd.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
        fd.append('file', file);

        fetch(CLOUDINARY_UPLOAD_URL, {
            method: 'post',
            body: fd
        })
            .then()
            .then()
            .then((response) => {
                response.json().then((image) => {
                    let newDish = {
                        locationId: this.props.locationDetails._id,
                        name: this.dishName.getValue(),
                        score: this._getDishScore(),
                        category: this.dishCategory.getValue(),
                        price: parseFloat(this.dishPrice.getValue()),
                        image: image.secure_url
                    }

                    fetch('http://localhost:3001/api/location/addDish', {
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        method: 'post',
                        body: JSON.stringify(newDish),
                    }).then(function (response) {
                        if (response.status === 200) {
                            response.json().then((data) => {

                            })
                        } else {
                            response.json().then((data) => {
                                notificationError(data.message);
                            });
                        }
                    }.bind(this));
                })
            });
    }
}

export default LocationDetailsAddDish;