import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog'
import TextField from 'material-ui/TextField';


class LocationDetailsRecommendDish extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render() {
        return (
            <Dialog
                title="What did you like? Recommend a dish"
                modal={false}
                open={this.props.isRecommendDishOpen}
                className="location-details-recommend-dish"
            >

            </Dialog>
        );
    }
}

export default LocationDetailsRecommendDish;