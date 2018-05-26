import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import './LocationDetailsActions.css';
import LocationDetailsRecommendDish from '../LocationDetailsRecommendDish/LocationDetailsRecommendDish';

class LocationDetailsActions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRecommendDishOpen: false
        };
        this._onRecommendButton = this._onRecommendButton.bind(this);
    }

    render() {
        return (
            <div className="location-details-actions">
                <div className="location-details-actions__share">
                    <RaisedButton label="Share" />
                </div>
                <div className="location-details-actions__recommend">
                    <RaisedButton
                        label="Recommend a dish"
                        onClick={this._onRecommendButton}
                    />
                    <LocationDetailsRecommendDish
                        isRecommendDishOpen={this.state.isRecommendDishOpen}
                    />
                </div>
            </div>

        );
    }

    _onRecommendButton() {
        this.setState({
            isRecommendDishOpen: true
        })
    }

}

export default LocationDetailsActions;