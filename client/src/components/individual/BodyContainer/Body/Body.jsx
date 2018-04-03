import React, {Component} from 'react';
import LocationTileListContainer from '../../../shared/LocationTileListContainer/LocationTileListContainer';

class Body extends Component {
    constructor(props){
        super(props);
        this.state = {
        
        };
    }

    render() {
        return(
            <div>
                <LocationTileListContainer/>
            </div>
        )
    }
}

export default Body;