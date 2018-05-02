import React, { Component } from 'react';

import Login from './Login/Login'
import { notificationError } from '../../../shared/constants';

class LoginContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        this._onLogin = this._onLogin.bind(this);
        this._toRegister = this._toRegister.bind(this);
        this._toHomePage = this._toHomePage.bind(this);
    }

    _toRegister() {

        this.props.history.push('/register');  
    }

    _toHomePage(data) {
        this.props.onLogin(data);
        this.props.history.push('/');
    }

    _onLogin() {
        let userCredentials = {
            email: this.child.email.getValue(),
            password: this.child.password.getValue()
        }
        this._sendUserCredentials(userCredentials);
    }

    _sendUserCredentials(userCredentials) {
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
                    this._toHomePage(data);
                    console.log("success");
				})
			} else {
				response.json().then((data) => {
					notificationError(data.message);
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
                toRegister={this._toRegister}
                ref={(childInstance) => { this.child = childInstance; }}
            />
        );
    }
}

export default LoginContainer;