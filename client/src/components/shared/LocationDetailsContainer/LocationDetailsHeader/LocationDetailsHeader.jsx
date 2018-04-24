import React, { Component } from 'react';
import ReactStars from 'react-stars'

import './LocationDetailsHeader.css';

class LocationDetailsHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };

    }

    render() {
        return (
            <div className="location-details-header">
                <div className="location-details-header__name">
                    {this.props.locationDetails.name}
                </div>
                <div className="location-details-header__information">
                    <div className="information-address main-information">
                        <i className="fa fa-map-marker">
                            {this.props.locationDetails.address}
                        </i>
                    </div>
                    <div className="information-phone main-information">
                        <i className="fa fa-phone">
                            {this.props.locationDetails.phone[0]}
                        </i>
                    </div>
                    <div className="information-average-price main-information">
                        <i className="fa fa-money">
                            {this.props.locationDetails.price}
                        </i>
                    </div>

                    <div className="information-rating main-information">
                        <ReactStars
                            count={5}
                            size={24}
                            color2={'black'} 
                            half={false}
                            edit={false}
                            value={this.props.locationDetails.tripAdvisorRating}
                        />
                    </div>

                </div>



            </div>
        );
    }

}

export default LocationDetailsHeader;