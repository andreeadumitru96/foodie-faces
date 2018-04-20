import React, {Component} from 'react';
import Body from '../BodyContainer/Body/Body';
import MostRatedLocationsContainer from '../MostRatedLocationsContainer/MostRatedLocationsContainer';
import LocationSearchContainer from '../LocationSearchContainer/LocationSearchContainer';
import LocationDetailsContainer from '../../shared/LocationDetailsContainer/LocationDetailsContainer';

class BodyContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMostRatedLocationsMount: this.props.componentToMount === 'MostRatedLocationsComponent' ? true : false,
            isLocationSearchMount: this.props.componentToMount === 'LocationSearchComponent' ? true : false,
            isLocationDetailsMount: this.props.componentToMount === 'LocationDetailsComponent' ? true : false
        };
        this._triggeredBody = this._triggeredBody.bind(this);
    }

    render() {
        return(
            <div>
                {this.state.isMostRatedLocationsMount ? <MostRatedLocationsContainer /> : null}
                {this.state.isLocationSearchMount ? 
                    <LocationSearchContainer  
                        locationsList = {this.props.receivedLocationsFromHeader}
                        triggeredBody = {this._triggeredBody}
                    /> 
                    : null
                }
                {this.state.isLocationDetailsMount ? 
                    <LocationDetailsContainer
                        locationDetails = {this.props.data}
                     /> 
                     : null}
            </div>
        )
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            isMostRatedLocationsMount: newProps.componentToMount === 'MostRatedLocationsComponent' ? true : false,
            isLocationSearchMount: newProps.componentToMount === 'LocationSearchComponent' ? true : false
        })
    }

    _triggeredBody(componentToMount, data) {
        this.setState({
            isLocationDetailsMount: componentToMount === 'LocationDetailsComponent' ? true : false,
            isMostRatedLocationsMount: false,
            isLocationSearchMount: false
        })
    }

    



}

export default BodyContainer;