import React, { Component } from 'react';
import {connect} from "react-redux";
import {logoutUser} from "../../Actions/login";
import { Button } from "ui-toolkit";
import { Redirect } from 'react-router-dom';

class Logout extends Component {

    constructor(props) {
        super(props);

        this.props.logoutUser();
    }

    render() {

        const {
            token
        } = this.props.login;

        if(!token){
            return <Redirect to="/login"/>;
        }

        return (
            <div>
                Are you sure you want to logout?
                <Button type="submit" bsStyle="primary" onClick={(e) => this.handleLogout(e)}>Logout</Button>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        login: state.login
    }
}

function matchDispatchToProps(dispatch) {
    return {
        logoutUser: () => {
            dispatch(logoutUser());
        },
    };
}

export default connect(
    mapStateToProps,
    matchDispatchToProps
)(Logout);
