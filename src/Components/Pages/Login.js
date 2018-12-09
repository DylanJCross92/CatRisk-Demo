import React, { Component } from 'react';
import {connect} from "react-redux";
import {Redirect, NavLink} from 'react-router-dom';
import { Form, Button, Alert } from "ui-toolkit";
import {loginUser} from "../../Actions/login";
import catriskLogo from '../../Assets/cx-icon-big.svg';
import catriskType from '../../Assets/cx-logo-big.svg';
import {is_logged_in} from "../../Utils/session";
require("../../global.css");


class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            token: null,
            email: null,
            password: null,
            invalidEmail: null,
            invalidPassword: null
        };
    }

    handleEmailChange(e) {
        this.setState({email: e.target.value});
    }

    handlePasswordChange(e) {
        this.setState({password: e.target.value});
    }

    handleLogin(e) {
        e.preventDefault();

        this.setState({
            invalidEmail: false,
            invalidPassword: false,
        });

        const email = this.state.email; //TODO: steve.haler@icg360.com
        const password = this.state.password; //TODO: Password1

        if(email && password) {
            this.props.loginUser(email, password);
        }
        else
        {
            this.setState({
                invalidEmail: true,
                invalidPassword: true,
            });
        }
    }

    render() {

        if(this.props.login.error) {
            var error = true;
            var errorMessage = this.props.login.error.message;
        }
        else
        {
            var error = this.state.invalidEmail || this.state.invalidPassword;
            var errorMessage = "Email or Password are invalid.";
        }

        if(is_logged_in()) {
            return (
                <Redirect to="/analyses"/>
            )
        }

        return (
            <div className="loginBackground flex flexVerticalMiddle flexCenterAlign">
                <div>
                    <div>
                        <div className="flex loginLogoWrapper">
                            <img
                                alt='Catrisk'
                                role='presentation'
                                src={catriskLogo}
                            />
                            <div className="loginLogoDivider" />
                            <img
                                alt='Catrisk'
                                role='presentation'
                                src={catriskType}
                            />
                        </div>
                        <div>
                            {error && (
                                <Alert bsStyle="danger" hasIcon>
                                    <strong>Error!</strong> {errorMessage}
                                </Alert>
                            )}
                            <Form horizontal className="flex flexVerticalMiddle">
                                <input type="text" className="textInputStyles" name="email" placeholder="Email" onChange={(e) => this.handleEmailChange(e)} />
                                <input type="password" className="textInputStyles" name="password" placeholder="Password" onChange={(e) => this.handlePasswordChange(e)}/>
                                <Button type="submit" bsStyle="info" bsSize="large" onClick={(e) => this.handleLogin(e)}>Login</Button>
                                <NavLink exact to='/forgot-password' style={{color: "#FFF", width: "350px", marginLeft: "25px", textDecoration: "none"}}>
                                    Forgot Password?
                                </NavLink>
                            </Form>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state){
    return {
        main: state.main,
        login: state.login,
        users: state.users
    }
}

function matchDispatchToProps(dispatch) {
    return {
        loginUser: (username, password) => {
            dispatch(loginUser(username, password));
        },
    };
}

export default connect(
    mapStateToProps,
    matchDispatchToProps
)(Login);
