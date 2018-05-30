import React, { Component } from 'react';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
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
    select = (index) => this.setState({selectedIndex: index});

    render() {
        return (
            <div className="location-details-most-recommended-dishes">
                <div className="location-details-most-recommended-dishes__title">
                    Most recommended dishes
                </div>
                <div className="location-details-most-recommended-dishes__list">
                    {this.state.mostRecommendedDishes.map(dish => {
                    //     return(<BottomNavigationItem
                    //     label = "sdad"
                    //     icon={dish.image}
                    //     onClick={() => this.select(1)}
                    // />)
                    })}
                    
                </div>
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