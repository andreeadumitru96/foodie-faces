import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class FilterItem extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        this._getFilterItems = this._getFilterItems.bind(this);

    }

    render() {
        return (
            <SelectField
                multiple={true}
                hintText="dsadsa"
                value="dsadsa"
            // onChange={}
            >
                {this._getFilterItems()}
            </SelectField>
        );
    }

    _getFilterItems() {
        return this.props.filterElements.map((item) => (
            <MenuItem
                key={item}
                insetChildren={true}
                // checked={values && values.indexOf(item) > -1}
                value={item}
                primaryText={item}
            />
        ));
    }

}

export default FilterItem;