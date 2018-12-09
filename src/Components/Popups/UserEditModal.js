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
    Form,
    FormGroup,
    InputGroup,
    ControlLabel,
    FormControl,
    Modal,
    Alert,
} from "ui-toolkit";
import { updateUser, reInviteUser} from "../../Actions/users";

class UserEditModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {}
        }
    }

    closeModal(){
        this.props.closeModal("userEditModal");
        this.props.users.status = "";
        this.props.users.error = "";
        this.props.users.user_reinvite.status = "";
        this.setState({formData: {}});
    }

    handleChange(e){
        const name = e.target.name;
        const value = e.target.value;

        var formProperties = this.state.formData;
        formProperties.user_id = this.props.user.user_id;
        formProperties[name] = value;

        this.setState({formData: formProperties});

        if(this.state.formData.status){
            this.props.user.status = this.state.formData.status;
        }
    }

    saveChanges(e){
        if(this.state.formData.role) {
            const formProps = this.state.formData;
            formProps.organization_id = this.props.main.currentCustomer;

            this.setState({formData : formProps})
        }

        this.props.updateUser(this.state.formData);
    }

    resendActivationEmail(email){
        this.props.reInviteUser(email);
    }

    render (){
        const {
            showModal,
            user,
            users
        } = this.props;

        const status = users.status == "request";

        return (
            <Modal show={showModal} onHide={(e) => this.closeModal(e)}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit User</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{padding: "20px"}}>

                    {this.props.users.status == "error" && (
                    <Alert bsStyle="danger" hasIcon>
                        <strong>Error!</strong> There was an error saving your changes.
                    </Alert>)}

                    {this.props.users.status == "success" && (
                        <Alert bsStyle="success" hasIcon>
                            <strong>Success!</strong> Your changes have been saved.
                        </Alert>)}

                    <Form horizontal>
                        <FormGroup style={{margin: "0", marginBottom: "10px"}}>
                            <ControlLabel>First Name</ControlLabel>
                            <FormControl
                                style={{boxSizing: "border-box"}}
                                type="text"
                                name="first_name"
                                placeholder="First Name"
                                defaultValue={user.first_name}
                                onChange={(e) => this.handleChange(e)}
                                disabled={status}
                            />
                        </FormGroup>

                        <FormGroup style={{margin: "0", marginBottom: "10px"}}>
                            <ControlLabel>Last Name</ControlLabel>
                            <FormControl
                                type="text"
                                name="last_name"
                                placeholder="Last Name"
                                defaultValue={user.last_name}
                                onChange={(e) => this.handleChange(e)}
                                disabled={status}
                            />
                        </FormGroup>

                        <FormGroup style={{margin: "0", marginBottom: "10px"}}>
                            <ControlLabel>Email</ControlLabel>
                            <FormControl
                                type="text"
                                name="email"
                                placeholder="Email"
                                disabled
                                defaultValue={user.email}
                                onChange={(e) => this.handleChange(e)}
                            />
                        </FormGroup>

                        <FormGroup controlId="formControlsSelect" style={{margin: "0", marginBottom: "10px"}}>
                            <ControlLabel>Role</ControlLabel>
                            <FormControl
                                componentClass="select"
                                name="role"
                                placeholder="Role"
                                defaultValue={this.props.main.currentCustomer && user.access ? user.access[this.props.main.currentCustomer.toLowerCase()].role : user.max_role}
                                onChange={(e) => this.handleChange(e)}
                                disabled={status || !this.props.main.currentCustomer}
                            >
                                <option value="admin">Admin</option>
                                <option value="user">User</option>
                            </FormControl>
                        </FormGroup>

                        <FormGroup controlId="formControlsSelect" style={{margin: "0", marginBottom: "10px"}}>
                            <ControlLabel>{user.status == "ENABLED" ? <IconCheckCircle style={{color: "#7ED321"}}/> : user.status == "DISABLED" ? <IconError style={{color: "#FF0000"}}/> : <IconWarning style={{color: "#F1D700"}}/>} Status</ControlLabel>

                            <FormControl
                                componentClass="select"
                                name="status"
                                placeholder="Status"
                                defaultValue={user.status ? user.status : "ENABLED"}
                                onChange={(e) => this.handleChange(e)}
                                disabled={status}
                            >
                                <option value="ENABLED">Enabled</option>
                                <option value="DISABLED">Disabled</option>
                            </FormControl>
                            <br/>
                            {user.status == "UNVERIFIED_EMAIL" && (
                                    <div>
                                        {this.props.users.user_reinvite.status != "success" && (
                                        <div>
                                            <div>* User has been invited, but has not activated their account</div>
                                            <Button onClick={(e) => this.resendActivationEmail(user.email)} bsStyle="primary" disabled={this.props.users.user_reinvite.status == "request"}>
                                                {this.props.users.user_reinvite.status == "request" ? "Re-Sending Activation Email..." : "Re-Send Activation Email"}</Button>
                                        </div>
                                        )}

                                        {this.props.users.user_reinvite.status == "success" && (
                                            <Alert bsStyle="success" hasIcon>
                                                <strong>Success!</strong> User has been re-invited.
                                            </Alert>
                                        )}

                                    </div>
                            )}

                        </FormGroup>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={(e) => this.closeModal(e)} disabled={status}>Close</Button>
                    <Button onClick={(e) => this.saveChanges(e)} bsStyle="primary" disabled={status || Object.keys(this.state.formData).length == 0}>{status ? "Saving Changes..." : "Save Changes"}</Button>
                </Modal.Footer>
            </Modal>
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
        updateUser: (data) => {
            dispatch(updateUser(data));
        },

        reInviteUser: (email) => {
            dispatch(reInviteUser(email));
        },
    };
}

export default connect(
    mapStateToProps,
    matchDispatchToProps
)(UserEditModal);