import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {selectUser} from "../actions/index";

class UsersList extends Component {
    render(){
        console.log(this.props.users);

        /*
        *   If initial state is == null, display select a user
         */
        if(!this.props.users){
            return (<h2>Select a User</h2>);
        }

        return (
            <div>
            <h2>Users List</h2>
            {this.props.users.map((user) => {return (<li key={user.id} onClick={() => this.props.selectUser(user)}>{user.first_name}</li>)})}
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        users: state.users
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({
        selectUser: selectUser
    }, dispatch)
}

export default connect(
    mapStateToProps,
    matchDispatchToProps
)(UsersList);