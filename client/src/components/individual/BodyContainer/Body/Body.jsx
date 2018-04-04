import React, {Component} from 'react';
import LocationTileListContainer from '../../../shared/LocationTileListContainer/LocationTileListContainer';
import MostRatedLocationsContainer from '../../MostRatedLocationsContainer/MostRatedLocationsContainer';

class Body extends Component {
    constructor(props){
        super(props);
        this.state = {
            isMostRatedLocationsMount: true
        };
    }

    render() {
        return(
            <div>
                {this.state.isMostRatedLocationsMount ? <MostRatedLocationsContainer/> : null}
            </div>
        )
    }
}

export default Body;