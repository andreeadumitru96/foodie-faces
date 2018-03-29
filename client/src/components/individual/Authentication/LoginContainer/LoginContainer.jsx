import React, { Component } from 'react';

import Login from './Login/Login'

class LoginContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        this._onLogin = this._onLogin.bind(this);
    }

    _getUserInformation() {
        let userCredentials = {
            email: this.child.email.getValue(),
            password: this.child.password.getValue()
        }
        this._onLogin(userCredentials);
    }

    _onLogin(userCredentials) {
        fetch('http://localhost:3001/api/login', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'post',
            body: JSON.stringify(userCredentials)
        }).then(function (response) {
            if(response.status === 200) {
				response.json().then((data) => {
					// this._redirectToHome(data);
				})
			} else {
				response.json().then((data) => {
					// notificationError(data.message);
				});
            }
        }.bind(this));

    }

    componentWillMount() {

    }
    render() {
        return (
            <Login
                onLogin={this._onLogin}
                ref={(childInstance) => { this.child = childInstance; }}
            />
        );
    }
}

export default LoginContainer;