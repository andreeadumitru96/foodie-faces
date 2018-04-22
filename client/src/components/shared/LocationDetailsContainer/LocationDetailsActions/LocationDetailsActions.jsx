import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import './LocationDetailsActions.css';

class LocationDetailsActions extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="location-details-actions">
                <div className="location-details-actions__share">
                    <RaisedButton label="Share"/>
                </div>
                <div className="location-details-actions__recommend">
                    <RaisedButton label="Recommend a dish"/>
                </div>
            </div>

        );
    }

}

export default LocationDetailsActions;