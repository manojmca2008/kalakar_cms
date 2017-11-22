import React, { Component } from 'react';
import { signup } from '../../services/auth-services';
import Login from './Login';
import Loginscreen from './Loginscreen';
import { FormErrors } from './../FormErrors';
class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: '',
            lname: '',
            email: '',
            password: '',
            reg_error: '',
            formErrors: { email: '', password: '' },
            emailValid: false,
            passwordValid: false,
            formValid: false
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({ [name]: value },
            () => { this.validateField(name, value) });
    }
    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;

        switch (fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                break;
            case 'password':
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid ? '' : ' is too short';
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            emailValid: emailValid,
            passwordValid: passwordValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({ formValid: this.state.emailValid && this.state.passwordValid });
    }

    errorClass(error) {
        return (error.length === 0 ? '' : 'has-error');
    }
    handleClick(e) {
        e.preventDefault();        
        signup(this.state.email, this.state.password).then(response => {
            var result = JSON.stringify(response);
            console.log(response);
            console.log(response.providerData[0]);
            console.log(response.email);
            var payload = {
                first_name:this.state.fname,
                last_name: this.state.lname,
                email: this.state.email,
                password: this.state.password,
                photo_url: '',
                uid:''
            }
            this.setState({ reg_error: '' });
            var self = this;
            var loginscreen = [];
            loginscreen.push(<Login parentContext={this} appContext={self.props.appContext} />);
            var loginmessage = "Not Registered yet.Go to registration";
            self.props.parentContext.setState({
                loginscreen: loginscreen,
                loginmessage: loginmessage,
                buttonLabel: "Register",
                isLogin: true
            });
        }).catch(err => {
            this.setState({
                reg_error: err.message
            });
        })
    }
    render() {
        return (
            <div >
                <div class="row">
                    <div class="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 col-md-4 col-md-offset-4">
                        <div class="login-panel panel panel-default">
                            <div class="panel-heading">Register</div>
                            <div class="panel-body">
                                <fieldset>
                                    <div class="form-group">
                                        <input
                                            class="form-control"
                                            placeholder="First name"
                                            name="fname"
                                            type="text"
                                            value={this.state.fname}
                                            onChange={this.handleInputChange} />
                                    </div>

                                    <div class="form-group">
                                        <input
                                            class="form-control"
                                            placeholder="Last name"
                                            name="lname"
                                            type="text"
                                            value={this.state.lname}
                                            onChange={this.handleInputChange} />
                                    </div>

                                    <div class="form-group">
                                        <input
                                            class="form-control"
                                            placeholder="E-mail"
                                            name="email"
                                            type="email"
                                            value={this.state.email}
                                            onChange={this.handleInputChange} />
                                    </div>

                                    <div class="form-group">
                                        <input
                                            class="form-control"
                                            placeholder="Password"
                                            name="password"
                                            type="password"
                                            value={this.state.password}
                                            onChange={this.handleInputChange} />
                                    </div>
                                    <div className="error">
                                        {this.state.reg_error}
                                    </div>
                                    <div className="panel panel-default">
                                        <FormErrors formErrors={this.state.formErrors} />
                                    </div>
                                    <button class="btn btn-primary" onClick={(event) => this.handleClick(event)}> Submit </button>
                                </fieldset>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Register;