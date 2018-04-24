import React, { Component } from 'react';
import ReactStars from 'react-stars';

import {cookies} from '../../../shared/constants';
import {notificationError} from '../../../shared/constants';



class LocationDetailsReviews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locationDetails: this.props.locationDetails
        };
        
        this.reviewScore = this.state.locationDetails.averageScore;
        this._getReviewDetails = this._getReviewDetails.bind(this);
        this._onAddReview = this._onAddReview.bind(this);
        this._onRatingChanged = this._onRatingChanged.bind(this);
        // this._parseDate = this._parseDate.bind(this);
    }

    render() {
        return (
            <div className="location-details-reviews-wrapper">
                {this.state.locationDetails.receivedReviews.map((receivedReview) => (
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
                                {/* {this._parseDate(receivedReview.createdDate)} */}
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
                <div className="location-details-reviews__add-review">
                    <form>
                        <fieldset className="location-details-reviews__add-review-components">
                            <label> Add a review </label>
                            <ReactStars
                                count={5}
                                size={24}
                                color2={'black'}
                                half={false}
                                value={this.state.locationDetails.averageScore}
                                onChange={this._onRatingChanged}
                            />
                            <input className="location-details-reviews__add-review-components-title" placeholder="Title" 
                                ref={(reviewTitle) => {this.reviewTitle = reviewTitle}}
                            />
                            <textarea className="location-details-reviews__add-review-components-body" placeholder="Leave a review..."
                                ref={(reviewContent) => {this.reviewContent = reviewContent}}
                            />

                            <div className="location-details-reviews__add-review-components-button">
                                <button className="location-details-reviews__add-review-components-button-add" type="button" onClick={this._onAddReview}> <i className="fa fa-plus-square"></i> Add review </button>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>

        );
    }

    _onRatingChanged(newRating) {
        this.reviewScore = newRating;
    }

    _getReviewDetails() {
       
        let user = cookies.get('user');
        console.log(user);

        let reviewDetails = {
            title: this.reviewTitle.value,
            content: this.reviewContent.value,
            score: this.reviewScore,
            averageScore: this.state.locationDetails.averageScore,
            userName: user.fullName,
            userId: user._id,
            locationId: this.state.locationDetails._id
        };
        return reviewDetails;
    }

    _onAddReview() {

        let reviewDetails = this._getReviewDetails();

        fetch('http://localhost:3001/api/location/addReview', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

            method: 'post',
            body: JSON.stringify(reviewDetails)

        }).then(function(response){
            if(response.status === 200) {
                response.json().then((location) => {
                    this.setState({
                        locationDetails: location
                    });
                    this.reviewTitle.value = '';
					this.reviewContent.value = '';
                })
            } else {
                response.json().then((error) => {
                	notificationError(error.message);
                })
            }
        }.bind(this))
    }

    // _parseDate(date) {
    //     // let parsedDate = date.toLocaleDateString();
    //     var utc = date.toISOString().split('T')[0];
    //     return utc;

    // }

}

export default LocationDetailsReviews;