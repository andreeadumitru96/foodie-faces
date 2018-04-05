import React, {Component} from 'react';
import Body from '../BodyContainer/Body/Body';
import MostRatedLocationsContainer from '../MostRatedLocationsContainer/MostRatedLocationsContainer';
import LocationSearchContainer from '../LocationSearchContainer/LocationSearchContainer';

class BodyContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMostRatedLocationsMount: this.props.componentToMount === 'MostRatedLocationsComponent' ? true : false,
            isLocationSearchMount: this.props.componentToMount === 'LocationSearchComponent' ? true : false
        };
    }

    


    render() {
        return(
            <div>
                {this.state.isMostRatedLocationsMount ? <MostRatedLocationsContainer /> : null}
                {this.state.isLocationSearchMount ? 
                    <LocationSearchContainer  
                        locationsList={this.props.receivedLocationsFromHeader}
                    /> 
                    : null
                }
            </div>
        )
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            isMostRatedLocationsMount: newProps.componentToMount === 'MostRatedLocationsComponent' ? true : false,
            isLocationSearchMount: newProps.componentToMount === 'LocationSearchComponent' ? true : false
        })
    }
}

export default BodyContainer;