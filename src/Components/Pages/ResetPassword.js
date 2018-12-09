import React, { Component } from 'react';
import {connect} from "react-redux";
import {Redirect, NavLink} from 'react-router-dom';
import { Form, Button, Alert } from "ui-toolkit";
import {resetPassword, logoutUser} from "../../Actions/login";
import catriskLogo from '../../Assets/cx-icon-big.svg';
import catriskType from '../../Assets/cx-logo-big.svg';
require("../../global.css");


class ResetPassword extends Component {

    constructor(props) {
        super(props);
        const params = new URLSearchParams(props.location.search);

        this.state = {
            email: params.get('email') ? params.get('email') : null,
            temp_token: params.get('token') ? params.get('token') : null,
            new_password: null,
            confirm_password: null,
            passwordsNotMatch: null,
            requiredFieldsMissing: null
        };
    }

    componentWillMount() {
        this.props.logoutUser();
    }

    handlePasswordChange(e) {
        this.setState({new_password: e.target.value});
    }

    handleConfirmPasswordChange(e) {
        this.setState({confirm_password: e.target.value});
    }

    handleResetPassword(e) {
        e.preventDefault();

        const email = this.state.email;
        const temp_token = this.state.temp_token;
        const new_password = this.state.new_password;
        const confirm_password = this.state.confirm_password;

        this.setState({
            passwordsNotMatch: false,
            requiredFieldsMissing: false
        });

        if(new_password == confirm_password){
            if(email && temp_token && new_password){
                this.props.resetPassword(temp_token, email, new_password);
            }
            else
            {
                this.setState({
                    requiredFieldsMissing: true
                });
            }
        }
        else
        {
            this.setState({
                passwordsNotMatch: true
            });
        }
    }

    render() {

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
                            {this.props.login.reset_password.status == "success" && (
                                <Alert bsStyle="success" hasIcon>
                                    <strong>Success!</strong> Your password has been updated.
                                </Alert>
                            )}

                            {this.props.login.reset_password.status == "error" && (
                                <Alert bsStyle="danger" hasIcon>
                                    <strong>Error!</strong> There was a problem updating your password.
                                </Alert>
                            )}

                            {this.state.passwordsNotMatch && (
                                <Alert bsStyle="danger" hasIcon>
                                    <strong>Error!</strong> Your passwords do not match.
                                </Alert>
                            )}

                            {this.state.requiredFieldsMissing && (
                                <Alert bsStyle="danger" hasIcon>
                                    <strong>Error!</strong> Both fields are required.
                                </Alert>
                            )}

                            <div className="accountCreatedText">
                                Create your new password below:
                            </div>
                            <Form horizontal className="flex flexVerticalMiddle">
                                <input type="password" className="textInputStyles" name="password" placeholder="Password" onChange={(e) => this.handlePasswordChange(e)}/>
                                <input type="password" className="textInputStyles" name="confirm_password" placeholder="Confirm Password" onChange={(e) => this.handleConfirmPasswordChange(e)}/>
                                <Button type="submit" bsStyle="info" bsSize="large" onClick={(e) => this.handleResetPassword(e)}>Reset Password</Button>
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
        resetPassword: (temp_token, email, new_password) => {
            dispatch(resetPassword(temp_token, email, new_password));
        },
        logoutUser: () => {
            dispatch(logoutUser());
        },
    };
}

export default connect(
    mapStateToProps,
    matchDispatchToProps
)(ResetPassword);
