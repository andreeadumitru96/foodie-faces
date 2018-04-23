import React, { Component } from 'react';
import ReactStars from 'react-stars';

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
                <div className="location-details-reviews__add-review">
                    <form>
                        <fieldset class="location-details-reviews__add-review-components">
                            <label> Add a review </label>
                            <ReactStars
                                count={5}
                                size={24}
                                color2={'black'}
                                half={false}
                                value={this.props.locationDetails.tripAdvisorRating}
                            />
                            <input placeholder="Title" className="location-details-reviews__add-review-components-title"></input>
                            <textarea class="main__standard-section-textarea" placeholder="Leave a review..." className="location-details-reviews__add-review-components-body"></textarea>

                            <div className="location-details-reviews__add-review-components-button">
                                <button className="location-details-reviews__add-review-components-button-add" type="button"> <i class="fa fa-plus-square"></i> Add review </button>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>

        );
    }

}

export default LocationDetailsReviews;