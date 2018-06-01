import React, { Component } from 'react';
import Badge from 'material-ui/Badge';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import FontIcon from 'material-ui/FontIcon';


import { notificationError } from '../../constants';
import './LocationDetailsMostRecommendedDishes.css';


const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
class LocationDetailsMostRecommendedDishes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mostRecommendedDishes: []
        };
        this._getMostRecommendedDishes = this._getMostRecommendedDishes.bind(this);
    }
    select = (index) => this.setState({ selectedIndex: index });

    render() {
        return (
            <div className="location-details-most-recommended-dishes">
                {this.state.mostRecommendedDishes.length > 0 ?

                    <div className="location-details-most-recommended-dishes__list">
                        <div className="list-title">
                            Most recommended dishes
                        </div>
                        <div className="list-items">
                            {this.state.mostRecommendedDishes.map(dish => {
                                return (<Badge
                                    badgeContent={<img src={dish.image} />}
                                    primary={true}
                                    className="list-badge"
                                >
                                    <div className="list-badge-text">{dish.name}</div>
                                </Badge>)
                            })}
                        </div>
                    </div>
                    :
                    null
                }
            </div>
        );
    }

    _getMostRecommendedDishes() {

        let id = this.props.locationDetails._id;

        fetch(`http://localhost:3001/api/location/getRecommendedDishes/${id}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

            method: 'get'
        }).then(function (response) {
            if (response.status === 200) {
                response.json().then((dishes) => {
                    this.setState({
                        mostRecommendedDishes: dishes
                    });
                })
            } else {
                response.json().then((error) => {
                    notificationError(error.message);
                })
            }
        }.bind(this));
    }

    componentWillMount() {
        this._getMostRecommendedDishes();
    }
}

export default LocationDetailsMostRecommendedDishes;