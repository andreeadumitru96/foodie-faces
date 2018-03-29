import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

// import LoginContainer from '../Authentication/LoginContainer/'
// import RegisterContainer from '../Authentication/RegisterContainer/RegisterContainer';
// import NotFoundRoute from '../../shared/NotFoundRoute/NotFoundRoute';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
}

  render() {
    return (
        <div>
            <Router>
                <Switch>
                    {/* { <Route exact path='/login' component={LoginContainer}/> } */}
                    {/* { <Route exact path='/register' component={RegisterContainer}/> } */}
                    {/* { <Route component={NotFoundRoute} /> } */}
                </Switch>
            </Router>
        </div>
        
    );
  }
}

export default AppContainer;