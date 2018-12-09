import React, {Component} from 'react'
import {connect} from "react-redux";
import { DropdownButton, MenuItem, IconSettings, IconPerson } from "ui-toolkit";
import { Link } from 'react-router-dom';
import SelfEditModal from '../Components/Popups/SelfEditModal';
import { getCustomers, changeCustomer} from "../Actions/main";
import { getUsers } from "../Actions/users";
import CustomersMenu from "./Parts/CustomersMenu";

class Nav extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selfEditModal: {
                show: false
            }
        }
    }

    changeCustomer(customer){
        this.props.changeCustomer(customer);
        this.props.getUsers(customer);
    }

    closeModal(key){
        var modalProperties = this.state[key];
        modalProperties.show = false;

        this.setState({ key: modalProperties });
    }

    handleSelfEditClick(e){
        var modalProperties = this.state.selfEditModal;
        modalProperties.show = true;

        this.setState({ selfEditModal: modalProperties });
    }

    render() {
        return (
            <nav style={{marginLeft: "auto"}}>
                <SelfEditModal
                    closeModal={(values) => { this.closeModal(values) }}
                    showModal={this.state.selfEditModal.show}
                />
                {(this.props.login.user.max_role == "superadmin" || this.props.login.user.max_role == "admin") && (
                    <CustomersMenu/>
                )}

                {this.props.login.user.max_role != "user" && (
                    <DropdownButton style={{color: "#FFF", textDecoration: "none", background: "none", border: "none"}} pullRight bsStyle="link" title={<IconSettings/>} id="settings" key="2">
                        <MenuItem href='/users' eventKey="2.1">Manage Users</MenuItem>
                    </DropdownButton>
                )}

                <DropdownButton style={{color: "#FFF", textDecoration: "none", background: "none", border: "none"}} pullRight bsStyle="link" title={<IconPerson/>} id="settings" key="3">
                    <MenuItem eventKey="3.1" onClick={(e) => this.handleSelfEditClick(e)}>My Profile</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey="3.2" href="/logout">Logout</MenuItem>
                </DropdownButton>
            </nav>
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

function matchDispatchToProps(dispatch) {
    return {
        getCustomers: () => {
            dispatch(getCustomers());
        },

        changeCustomer: (customer) => {
            dispatch(changeCustomer(customer));
        },

        getUsers: (currentCustomer) => {
            dispatch(getUsers(currentCustomer));
        },
    };
}

export default connect(
    mapStateToProps,
    matchDispatchToProps
)(Nav);
