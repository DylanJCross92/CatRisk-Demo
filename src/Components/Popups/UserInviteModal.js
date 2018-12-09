import React, { Component } from 'react';
import {connect} from "react-redux";
import {
    Table,
    IconCheck,
    IconError,
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

class UserInviteModal extends Component {

    constructor(props) {
        super(props);

        this.state = {
            formData: {
                role: "user",
                organization_id: this.props.main.currentCustomer ? this.props.main.currentCustomer : Object.keys(this.props.login.user.access)[0]
            }
        }
    }

    closeModal(){
        this.props.closeModal("userInviteModal");
        this.props.users.status = "";
        this.props.users.error = "";
        this.setState({formData: {
            role: "user",
            organization_id: this.props.main.currentCustomer ? this.props.main.currentCustomer : Object.keys(this.props.login.user.access)[0]
        }});
    }

    handleChange(e){
        const name = e.target.name;
        const value = e.target.value;

        var formProperties = this.state.formData;
        formProperties[name] = value;
        this.setState({formData: formProperties});
    }

    saveChanges(e){
        this.props.inviteUser(this.state.formData);
    }

    customersList(){
        if(Object.keys(this.props.main.customers).length > 0) {
            return Object.keys(this.props.main.customers).map((customer, index) => {
                return (
                    <option key={index} value={customer.toLowerCase()}>{customer}</option>
                )
            });
        }
    }

    render (){
        const {
            showModal,
            users
        } = this.props;
        const status = users.status == "request";

        return (
            <Modal show={showModal} onHide={(e) => this.closeModal(e)}>
                <Modal.Header closeButton>
                    <Modal.Title>Invite User</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{padding: "20px"}}>

                    {this.props.users.status == "error" && (
                    <Alert bsStyle="danger" hasIcon>
                        <strong>Error!</strong> There was an error inviting this user.
                    </Alert>)}

                    {this.props.users.status == "success" && (
                        <Alert bsStyle="success" hasIcon>
                            <strong>Success!</strong> You have invited this user.
                        </Alert>)}

                    <Form horizontal>
                        <FormGroup style={{margin: "0", marginBottom: "10px"}}>
                            <ControlLabel>First Name</ControlLabel>
                            <FormControl
                                style={{boxSizing: "border-box"}}
                                type="text"
                                name="first_name"
                                placeholder="First Name"
                                defaultValue={this.state.first_name}
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
                                defaultValue={this.state.last_name}
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
                                defaultValue={this.state.email}
                                onChange={(e) => this.handleChange(e)}
                                disabled={status}
                            />
                        </FormGroup>

                        <FormGroup controlId="formControlsSelect" style={{margin: "0", marginBottom: "10px"}}>
                            <ControlLabel>Role</ControlLabel>
                            <FormControl
                                componentClass="select"
                                name="role"
                                placeholder="Role"
                                defaultValue={this.state.formData.role}
                                onChange={(e) => this.handleChange(e)}
                                disabled={status}
                            >
                                <option value="admin">Admin</option>
                                <option value="user">User</option>
                            </FormControl>
                        </FormGroup>
                        {(this.props.login.user.max_role == "superadmin" || this.props.login.user.max_role == "admin") && (
                        <FormGroup controlId="formControlsSelect" style={{margin: "0", marginBottom: "10px"}}>
                            <ControlLabel>Organization</ControlLabel>
                            <FormControl
                                componentClass="select"
                                name="organization_id"
                                placeholder="Customer Organization"
                                defaultValue={this.props.main.currentCustomer ? this.props.main.currentCustomer : this.state.formData.organization_id}
                                onChange={(e) => this.handleChange(e)}
                                disabled={status}
                            >
                                {this.customersList()}
                            </FormControl>
                        </FormGroup>
                        )}
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={(e) => this.closeModal(e)} disabled={status}>Close</Button>
                    <Button onClick={(e) => this.saveChanges(e)} bsStyle="primary" disabled={status || Object.keys(this.state.formData).length != 5}>{status ? "Inviting User..." : "Invite User"}</Button>
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

export default connect(
    mapStateToProps
)(UserInviteModal);