import React, {Component} from 'react';
import Body from '../BodyContainer/Body/Body';

class BodyContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    


    render() {
        return(
            <div>
                <Body/>
            </div>
        )
    }
}

export default BodyContainer;