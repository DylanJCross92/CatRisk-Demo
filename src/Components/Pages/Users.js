import React, { Component } from 'react';
import {connect} from "react-redux";
import {
    Table,
    IconCheck,
    IconError,
    IconWarning,
    IconCheckCircle,
    IconSearch,
    Button,
    Preloader,
    FormGroup,
    InputGroup,
    FormControl,
    Badge,
    OverlayTrigger,
    Tooltip
} from "ui-toolkit";
import {Redirect} from 'react-router-dom';
import UserInviteModal from '../Popups/UserInviteModal';
import UserEditModal from '../Popups/UserEditModal';
import { getUsers, inviteUser, updateUser } from "../../Actions/users";

class Users extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: {},
            filteredUsers: {},
            searchTerm: false,
            userInviteModal: {
                show: false
            },
            userEditModal: {
                show: false,
                data: {}
            }
        };
    }

    componentDidMount() {
        this.props.getUsers(this.props.main.currentCustomer);
    }

    userRoleOutput(role = "user") {
        return (
            role.indexOf("admin") > -1 ? <IconCheck/> : ''
        )
    }

    userAccessOutput(access) {

        if(access == "ENABLED") {

            const tooltip = (
                <Tooltip id="tooltip">
                    Enabled
                </Tooltip>
            )

            return (
            <OverlayTrigger placement="right" overlay={tooltip}>
                <span><IconCheckCircle style={{color: "#7ED321"}}/></span>
            </OverlayTrigger>

            )
        }
        else if(access == "DISABLED")
        {
            const tooltip = (
                <Tooltip id="tooltip">
                    Disabled
                </Tooltip>
            )

            return (
                <OverlayTrigger placement="right" overlay={tooltip}>
                    <span><IconError style={{color: "#FF0000"}}/></span>
                </OverlayTrigger>
            )
        }
        else
        {
            const tooltip = (
                <Tooltip id="tooltip">
                    Unverified email address
                </Tooltip>
            )

            return (
                <OverlayTrigger placement="right" overlay={tooltip}>
                    <span><IconWarning style={{color: "#F1D700"}}/></span>
                </OverlayTrigger>
            )
        }
    }

    handleSearchChange(e){
        this.setState({searchTerm: e.target.value});
        this.handleSearch(e.target.value);
    }

    handleSearch(searchTerm = false){
       searchTerm = searchTerm === false ? this.state.searchTerm : searchTerm;

        if(searchTerm)
        {
            searchTerm = searchTerm.toString().toLowerCase();

            const filteredUsers = [];
            this.props.users.users.forEach((user) => {
                var matches;
                const searchTermKey = searchTerm.split(':')[0].toString().toLowerCase();
                const searchTermTerm = searchTerm.split(':')[1] ? searchTerm.split(':')[1].toString().trim() : false;

                if(searchTermTerm && user[searchTermKey]) {
                    matches = user[searchTermKey].match(searchTermTerm);
                }
                else {
                    matches =
                        user.first_name.toLowerCase().match(searchTerm) ||
                        user.last_name.toLowerCase().match(searchTerm) ||
                        user.email.toLowerCase().match(searchTerm) ||
                        user.max_role.toLowerCase().match(searchTerm);

                }
                if(matches)
                {
                    filteredUsers.push(user);
                }
            });

            this.setState({filteredUsers: filteredUsers});
        }
        else
        {
            this.setState({filteredUsers: {}});
        }

    }

    handleInvite(){
        var modalProperties = this.state.userInviteModal;
        modalProperties.show = true;

        this.setState({ inviteModal: modalProperties });
    }

    closeModal(key){
        var modalProperties = this.state[key];
        modalProperties.show = false;

        this.setState({ key: modalProperties });
    }

    handleUserClick(user, e){

        console.log(this.props.main.currentCustomer);

        if(this.props.main.currentCustomer)
        {
            var modalProperties = this.state.userEditModal;
            modalProperties.show = true;
            modalProperties.data = user;

            this.setState({ userEditModal: modalProperties });
        }
    }

    updateUser(data){
        //this.props.updateUser(data);
    }

    inviteUser(data){
        this.props.inviteUser(data);
    }

    isFiltered() {
        return this.state.filteredUsers.length > 0 || this.state.searchTerm;
    }

    accessList(obj) {

        var arr = []
        for(var key in obj) {
            if (obj.hasOwnProperty(key)) {
                arr.push(key);
            }
        }

        return arr.toString();
    }

    usersList() {
        if(!this.props.users.users){
            return (<tr>
                <td colSpan="42" style={{padding: "25px", textAlign: "center"}}>No users found</td>
            </tr>)
        }

        const users = this.isFiltered() ? this.state.filteredUsers : this.props.users.users;

        if(users.length > 0) {
            return users.map((user, index) => {
                return (
                    <tr key={index} onClick={(e) => this.handleUserClick(user, e)}>
                        <td>{user.first_name}</td>
                        <td>{user.last_name}</td>
                        <td>{user.email}</td>
                        <td>{this.props.main.currentCustomer && user.access.hasOwnProperty(this.props.main.currentCustomer) ? user.access[this.props.main.currentCustomer].role : user.max_role}</td>
                        <td>{this.userAccessOutput(user.status)}</td>
                        {this.props.login.user.max_role == "superadmin" && (
                            <td>{this.accessList(user.access)}</td>
                        )}
                    </tr>
                )
            });
        }
        else
        {
            if(this.isFiltered()){
                return (<tr>
                    <td colSpan="42" style={{padding: "25px", textAlign: "center"}}>No users match your search criteria</td>
                </tr>)
            }
            else
            {
                return (<tr>
                    <td colSpan="42" style={{padding: "25px", textAlign: "center"}}><Preloader color="#0080b2" size="30"/> Retrieving users...</td>
                </tr>)
            }
        }
    }

    render() {

        if (this.props.login.user.max_role == "user") {
            return (
                <Redirect to="/analyses"/>
            )
        }

        return (
            <div style={{width: "1366px", margin: "auto"}}>
                <div style={{marginTop: "25px"}}>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <div style={{flex: "1"}}>
                            <h1>Users <Badge>{this.isFiltered() ? Object.keys(this.state.filteredUsers).length+" of " + Object.keys(this.props.users.users).length : Object.keys(this.props.users.users).length}</Badge></h1>
                        </div>
                        <div style={{width: "300px", textAlign: "right"}}>
                            <FormGroup style={{margin: "0px"}}>
                                <InputGroup>
                                    <FormControl type="text" placeholder="Search..." onChange={(e) => this.handleSearchChange(e)} onBlur={(e) => this.handleSearchChange(e)}/>
                                    <InputGroup.Button>
                                        <Button onClick={(e) => this.handleSearch()}>
                                            <IconSearch style={{width: "16px", height: "16px"}}/>
                                        </Button>
                                    </InputGroup.Button>
                                </InputGroup>
                            </FormGroup>
                        </div>
                        <div style={{width: "75px", textAlign: "right"}}>
                            <Button type="button" bsStyle="primary" onClick={(e) => this.handleInvite(e)}>Invite</Button>
                        </div>
                    </div>

                    <Table striped bordered condensed hover>
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Roles</th>
                                <th>Status</th>
                                {this.props.login.user.max_role == "superadmin" && (
                                    <th>Organization</th>
                                )}
                            </tr>
                        </thead>
                        <tbody>{this.usersList()}</tbody>
                    </Table>
                </div>

                <UserInviteModal
                    closeModal={(values) => { this.closeModal(values) }}
                    inviteUser={(values) => { this.inviteUser(values) }}
                    showModal={this.state.userInviteModal.show}
                />

                <UserEditModal
                    closeModal={(values) => { this.closeModal(values) }}
                    showModal={this.state.userEditModal.show}
                    user={this.state.userEditModal.data}
                />

            </div>
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
        getUsers: (currentCustomer) => {
            dispatch(getUsers(currentCustomer));
        },

        updateUser: (data) => {
            dispatch(updateUser(data));
        },

        inviteUser: (data) => {
            dispatch(inviteUser(data));
        },
    };
}

export default connect(
    mapStateToProps,
    matchDispatchToProps
)(Users);