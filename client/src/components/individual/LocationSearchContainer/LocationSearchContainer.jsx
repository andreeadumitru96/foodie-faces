import React, { Component } from 'react';
import LocationSearch from './LocationSearch/LocationSearch';

class LocationSearchContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locationsList: this.props.locationsList
        };
        this._onFilterLocationsReceived = this._onFilterLocationsReceived.bind(this);

    }

    render() {
        return (
            <div>
                <LocationSearch
                    locationsList={this.state.locationsList}
                    city={this.props.city}
                    triggeredBody={this.props.triggeredBody}
                    onFilterLocationsReceived={this._onFilterLocationsReceived}
                />
            </div>
        );
    }

    componentWillMount() {
        this.forceUpdate();
    }

    _onFilterLocationsReceived(filteredLocations) {
        this.setState({
            locationsList: filteredLocations
        })
    }

}

export default LocationSearchContainer;