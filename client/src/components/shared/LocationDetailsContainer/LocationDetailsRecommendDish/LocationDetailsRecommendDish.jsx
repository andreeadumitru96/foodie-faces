import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog'
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import { notificationError } from '../../constants';

// let bla = [1, 2, 3, 4, 7, 8, 9, 10];

class LocationDetailsRecommendDish extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null,
            menuDishes: []
        };

        this._getMenuDishes = this._getMenuDishes.bind(this);
        this._getDropDownItems = this._getDropDownItems.bind(this);
        this._handleChange = this._handleChange.bind(this);
        
    }

    render() {
        return (
            <Dialog
                title="What did you like? Recommend a dish"
                modal={false}
                open={this.props.isRecommendDishOpen}
                className="location-details-recommend-dish"
            >

                <SelectField
                    multiple={false}
                    value={this.state.selectedDish}
                    onChange={this._handleChange}
                >
                    {this._getDropDownItems()}
                </SelectField>
            </Dialog>
        );
    }

    _getMenuDishes() {

        let id = this.props.locationDetails._id;

        fetch(`http://localhost:3001/api/location/getMenuDishes/${id}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

            method: 'get'
        }).then(function (response) {
            if (response.status === 200) {
                response.json().then((menuDishes) => {
                    this.setState({
                        menuDishes: menuDishes
                    });
                    console.log(menuDishes);
                })
            } else {
                response.json().then((error) => {
                    notificationError(error.message);
                })
            }
        }.bind(this))
    }

    _getDropDownItems() {
        return this.state.menuDishes.map((item) => (
            <MenuItem
                key={item.name}
                insetChildren={true}
                checked={this.state.menuDishes.name && this.state.menuDishes.name.indexOf(item) > -1}
                value={item.name}
                primaryText={item.name}
            />
        ));
    }

    _handleChange(event, index, values) {
        this.setState({selectedDish: values});
    }

    componentWillMount() {
        this._getMenuDishes();
    }
}

export default LocationDetailsRecommendDish;