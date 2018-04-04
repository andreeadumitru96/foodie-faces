import React, {Component} from 'react';
import LocationTileListContainer from '../../../shared/LocationTileListContainer/LocationTileListContainer';

class MostRatedLocations extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return(
            <div>
                <p>Here are the most rated locations...</p>
                <LocationTileListContainer locationsList={this.props.locationsList}/>
            </div>
        );
    }
    componentWillReceiveProps() {
        this.forceUpdate();
    }
}

export default MostRatedLocations;