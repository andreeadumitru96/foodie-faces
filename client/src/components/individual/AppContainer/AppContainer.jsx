import React, { Component } from 'react';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/jelly.css';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';


import LoginContainer from '../Authentication/LoginContainer/LoginContainer';
import RegisterContainer from '../Authentication/RegisterContainer/RegisterContainer';
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
                    <Route exact path='/login' render={(params) => <LoginContainer history={params.history}/>}/>
                    <Route exact path='/register' render={(params) => <RegisterContainer history={params.history}/>}/>
                    {/* { <Route component={NotFoundRoute} /> } */}
                    <Alert stack={{limit: 3}} />
                </Switch>
            </Router>
        </div>
        
    );
  }
}

export default AppContainer;