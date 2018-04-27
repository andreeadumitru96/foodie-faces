import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import FilterItem from './FilterItem';
import './LocationFilters.css';


class LocationFilters extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div className="location-filters">
                <div className="location-filters__cuisine">
                    <FilterItem
                        filterElements={this.props.filtersList.cuisine}
                        type={"Cuisine"}
                    />
                </div>
                <div className="location-filters__goodFor">
                    <FilterItem
                        filterElements={this.props.filtersList.goodFor}
                        type={"Good For"}
                    />
                </div>
                <div className="location-filters__meals">
                    <FilterItem
                        filterElements={this.props.filtersList.meals}
                        type={"Meals"}
                    />
                </div>
            </div>
        );
    }

}

export default LocationFilters;