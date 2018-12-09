import React, { Component } from 'react';
import {connect} from "react-redux";
import {Switch, Route, Redirect, BrowserRouter as Router} from 'react-router-dom';
import Header from '../Components/Header';
import Loader from '../Components/Loader';
import Footer from '../Components/Footer';
import ForgotPassword from '../Components/Pages/ForgotPassword';
import ActivateAccount from '../Components/Pages/ActivateAccount';
import ResetPassword from '../Components/Pages/ResetPassword';
import Login from '../Components/Pages/Login';
import Logout from '../Components/Pages/Logout';
import Users from '../Components/Pages/Users';
import Analyses from '../Components/Pages/Analyses';
import 'ui-toolkit/dist/css/insight.css';
import {is_logged_in} from "../Utils/session";

const PrivateRoute = ({component: Component, authed, ...rest }) => (
    <Route {...rest} render={(props) => (
        authed ? <Component {...props}/> : <Redirect to={{pathname: '/login', state: {from: props.location}}}/>
    )}/>
);

class App extends Component {

    constructor(props) {
        super(props);
    }

    showLoader() {
        return  this.props.login.login.status == "request" ||
                this.props.login.create_password.status == "request" ||
                this.props.login.forgot_password.status == "request" ||
                this.props.login.reset_password.status == "request";
    }

    render() {

        console.log(is_logged_in());

        return (
            <Router>
                <div>
                    {is_logged_in() && (
                        <div>
                            <Header />
                        </div>
                    )}

                    {this.showLoader() && (
                        <Loader/>
                    )}

                    <main>
                        <Switch>
                            <Route exact path='/' component={Login}/>
                            <Route path='/login' component={Login}/>
                            <Route path='/activatemyaccount' component={ActivateAccount}/>
                            <Route exact path='/forgot-password' component={ForgotPassword}/>
                            <Route exact path='/reset-password' component={ResetPassword}/>
                            <PrivateRoute exact path='/analyses' authed={is_logged_in()} component={Analyses}/>
                            <PrivateRoute exact path='/users' authed={is_logged_in()} component={Users}/>
                            <PrivateRoute exact path='/logout' authed={is_logged_in()} component={Logout}/>
                            <Route render={function(){
                                return <h1>404 Not Found</h1>
                            }}/>
                        </Switch>
                    </main>
                    <Footer/>
                </div>
            </Router>
        )
    }
}

function mapStateToProps(state){
    return {
        main: state.main,
        login: state.login,
        users: state.users
    }
}

export default connect(
    mapStateToProps,
)(App);