import React, { Component } from 'react';
// import Avatar from 'material-ui/Avatar';

class LocationDetailsReviews extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="location-details-reviews-wrapper">
                {this.props.locationDetails.receivedReviews.map((receivedReview) => (
                    <div className="location-details-reviews">
                        <div className="location-details-reviews__user">
                            <div className="location-details-reviews__user-picture">
                                {receivedReview.userPic}
                            </div>
                            <div className="location-details-reviews__user-name">
                                {receivedReview.userName}
                            </div>
                        </div>

                        <div className="location-details-reviews__entity">
                            <div className="location-details-reviews-entity-score">
                                {receivedReview.score}
                            </div>
                            <div className="location-details-reviews-entity-date">
                                {receivedReview.createdDate}
                            </div>
                            <div className="location-details-reviews__entity-title">
                                {receivedReview.title}
                            </div>
                            <div className="location-details-reviews__entity-content">
                                {receivedReview.content}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        );
    }

}

export default LocationDetailsReviews;