import React, { Component } from 'react';
import {connect} from "react-redux";
import {
    Table,
    IconCheck,
    IconError,
    IconCheckCircle,
    IconSearch,
    Button,
    Form,
    FormGroup,
    InputGroup,
    ControlLabel,
    FormControl,
    Modal,
    Alert,
} from "ui-toolkit";
import { updateUser } from "../../Actions/users";

class SelfEditModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                new_password: null
            },
            displayPasswordChange: false
        }
    }

    closeModal(){
        this.props.closeModal("selfEditModal");
        this.props.login.self_update.status = "";
        this.props.login.self_update.error = "";

        this.setState({
            formData: {
                new_password: null
            },
            displayPasswordChange: false,
            passwordsNotMatch: null
        });
    }

    handleChange(e){
        const name = e.target.name;
        const value = e.target.value;

        var formProperties = this.state.formData;
        formProperties.self = true;
        formProperties.user_id = this.props.login.user.user_id;
        formProperties[name] = value;

        this.setState({formData: formProperties});
    }

    togglePasswordChange(){
        this.setState({
            displayPasswordChange: !this.state.displayPasswordChange
        })
    }

    saveChanges(e){
        this.setState({
            passwordsNotMatch: false
        });

        this.props.login.self_update.status = null;

        if(this.state.displayPasswordChange){
            if(this.state.formData.new_password == this.state.formData.confirm_new_password){
                this.props.updateUser(this.state.formData);
            }
            else
            {
                this.setState({
                    passwordsNotMatch: true
                });
            }
        }
        else
        {
            var formProperties = this.state.formData;
            delete formProperties.new_password;
            this.setState({formData: formProperties});

            this.props.updateUser(this.state.formData);
        }
    }

    render (){
        const {
            showModal,
            users,
            login
        } = this.props;

        const status = login.self_update.status == "request";
        const user = this.props.login.user;

        return (
            <Modal show={showModal} onHide={(e) => this.closeModal(e)}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Profile</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{padding: "20px"}}>

                    {this.props.login.self_update.status == "error" && (
                        <Alert bsStyle="danger" hasIcon>
                            <strong>Error!</strong> There was an error saving your changes.
                        </Alert>)}

                    {this.props.login.self_update.status == "success" && (
                        <Alert bsStyle="success" hasIcon>
                            <strong>Success!</strong> Your changes have been saved.
                        </Alert>)}

                    {(this.state.passwordsNotMatch && !this.props.login.self_update.status) && (
                        <Alert bsStyle="danger" hasIcon>
                            <strong>Error!</strong> Your passwords do not match.
                        </Alert>
                    )}

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

                        <ControlLabel>Change Password</ControlLabel>
                        <div>
                            <Button onClick={(e) => this.togglePasswordChange(e)} bsStyle="primary" disabled={status}>{!this.state.displayPasswordChange ? "Change Password" : "Cancel"}</Button>
                        </div>
                        <div style={{display: this.state.displayPasswordChange ? "block" : "none"}}>
                            <FormGroup style={{margin: "0", marginBottom: "10px"}}>
                                <ControlLabel>New Password</ControlLabel>
                                <FormControl
                                    type="password"
                                    name="new_password"
                                    placeholder="New Password"
                                    defaultValue=""
                                    autoComplete="off"
                                    onChange={(e) => this.handleChange(e)}
                                />
                            </FormGroup>
                            <FormGroup style={{margin: "0", marginBottom: "10px"}}>
                                <ControlLabel>Confirm New Password</ControlLabel>
                                <FormControl
                                    type="password"
                                    name="confirm_new_password"
                                    placeholder="Confirm New Password"
                                    defaultValue=""
                                    onChange={(e) => this.handleChange(e)}
                                />
                            </FormGroup>
                        </div>
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
        login: state.login,
        users: state.users
    }
}

function matchDispatchToProps(dispatch) {
    return {
        updateUser: (data) => {
            dispatch(updateUser(data));
        },
    };
}

export default connect(
    mapStateToProps,
    matchDispatchToProps
)(SelfEditModal);