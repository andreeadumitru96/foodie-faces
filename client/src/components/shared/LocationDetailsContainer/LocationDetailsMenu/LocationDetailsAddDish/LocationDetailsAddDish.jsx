import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import './LocationDetailsAddDish.css';

class LocationDetailsAddDish extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };

    }

    render() {
        return (
            <div>
                <Dialog
                    title="What did you eat? Help the community"
                    // actions={actions}
                    modal={false}
                    open={this.props.isAddDishOpen}
                    className="location-details-add-dish"
                    // onRequestClose={}
                >
                    <div className="location-details-add-dish__information">
                        <div className="information-dish-name">
                            <TextField
                                floatingLabelText="DishName"   
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

                    <div className="location-details-add-dish__photos">

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
            </div>
        );
    }
}

export default LocationDetailsAddDish;