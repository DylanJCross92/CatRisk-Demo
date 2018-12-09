import React, {Component} from 'react'
import {connect} from "react-redux";
import { DropdownButton, MenuItem, Button} from "ui-toolkit";
import { getCustomers, changeCustomer} from "../../Actions/main";
import { getUsers } from "../../Actions/users";


class CustomersMenu extends Component {

    constructor(props) {
        super(props);
    }

    changeCustomer(customer){
        this.props.changeCustomer(customer);
        this.props.getUsers(customer);
    }

    render() {
        return (
            <span>
                {Object.keys(this.props.main.customers).length > 1 && (
                    <DropdownButton style={{color: "#FFF", textDecoration: "none", background: "none", border: "none"}} pullRight bsStyle="link" title={this.props.main.currentCustomer ? this.props.main.currentCustomer : "All"} id="customers" key="1">
                        <MenuItem eventKey="1" key="1" active={!this.props.main.currentCustomer} onClick={() => this.changeCustomer()}>All</MenuItem>
                        <MenuItem divider />
                        {Object.keys(this.props.main.customers).map((org, index) => {
                            const disabled = this.props.main.customers[org].hasOwnProperty("role") ? this.props.main.customers[org].role == "inactive" : true;

                            return (
                                <MenuItem eventKey={index+1} key={index+1} disabled={disabled} active={org == this.props.main.currentCustomer} onClick={() => !disabled ? this.changeCustomer(org) : ""}>{org}</MenuItem>
                            )
                        })
                        }
                    </DropdownButton>
                )}
                {Object.keys(this.props.main.customers).length == 1 && (
                <Button bsStyle="link" style={{color: "#FFF", cursor: "default", textDecoration: "none", background: "none", border: "none"}} key="2">{Object.keys(this.props.login.user.access)[0]}</Button>
                )}
            </span>
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
)(CustomersMenu);
