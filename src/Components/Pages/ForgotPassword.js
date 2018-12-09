import React, { Component } from 'react';
import {connect} from "react-redux";
import {Redirect, NavLink} from 'react-router-dom';
import { Form, Button, Alert } from "ui-toolkit";
import {forgotPassword, logoutUser} from "../../Actions/login";
import catriskLogo from '../../Assets/cx-icon-big.svg';
import catriskType from '../../Assets/cx-logo-big.svg';
require("../../global.css");


class ForgotPassword extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: ""
        };
    }

    componentWillMount() {
        this.props.logoutUser();
    }

    handleEmailChange(e) {
        this.setState({email: e.target.value});
    }

    handleForgotPassword(e) {
        e.preventDefault();

        this.props.login.forgot_password.status = undefined;

        this.setState({
            invalidEmail: false
        });

        const email = this.state.email;

        if(email) {
            this.props.forgotPassword(email);
            this.setState({
                email: ""
            })
        }
        else
        {
            this.setState({
                invalidEmail: true,
            });
        }
    }

    render() {
        console.log(this.props.login.forgot_password.status);
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
                            {this.props.login.forgot_password.status == "success" && (
                                <Alert bsStyle="success" hasIcon>
                                    <strong>Success!</strong> Follow the instructions in the email to reset your password.
                                </Alert>
                            )}
                            {this.props.login.forgot_password.status == "error" && (
                                <Alert bsStyle="danger" hasIcon>
                                    <strong>Error!</strong> There was an error requesting a password reset. One of the following occurred:
                                    <ul>
                                        <li>This email is not a valid email.</li>
                                        <li>This email does not match a user account.</li>
                                    </ul>
                                </Alert>
                            )}

                            {(!this.props.login.forgot_password.status && this.state.invalidEmail) && (
                                <Alert bsStyle="danger" hasIcon>
                                    <strong>Error!</strong> An email is required to request a password reset.
                                </Alert>
                            )}
                            <div className="accountCreatedText">
                                Reset your password below:
                            </div>
                            <Form horizontal className="flex flexVerticalMiddle">
                                <input type="text" className="textInputStyles" name="email" placeholder="Email" value={this.state.email} onChange={(e) => this.handleEmailChange(e)} />
                                <Button type="submit" bsStyle="info" bsSize="large" onClick={(e) => this.handleForgotPassword(e)}>Forgot Password</Button>
                                <NavLink exact to='/login' style={{color: "#FFF", width: "350px", marginLeft: "25px", textDecoration: "none"}}>
                                    Back to Login
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
        forgotPassword: (email) => {
            dispatch(forgotPassword(email));
        },
        logoutUser: () => {
            dispatch(logoutUser());
        },
    };
}

export default connect(
    mapStateToProps,
    matchDispatchToProps
)(ForgotPassword);
