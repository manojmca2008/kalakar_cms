import React, { Component } from 'react';
import { loginWithFacebook, loginWithGoogle, loginWithTwitter, forgotPassword, login, signup } from '../../services/auth-services';
import Login from './Login';
import Loginscreen from './Loginscreen';
class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fname:'',
            lname:'',
            email: '',
            password: '',
            reg_error:'',
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }
    handleClick(e) {       
        e.preventDefault();        
        signup(this.state.email, this.state.password).then(response => { 
            this.setState({reg_error: ''});    
            var self = this;  
            var loginscreen=[];
            loginscreen.push(<Login parentContext={this} appContext={self.props.appContext}/>);
            var loginmessage = "Not Registered yet.Go to registration";
            self.props.parentContext.setState({
                loginscreen:loginscreen,
                loginmessage:loginmessage,
                buttonLabel:"Register",
                isLogin:true
            });            
        }).catch(err => {
            this.setState({
                reg_error: err.message
            });            
        })
    }
    render() {
        return (
            <div className="screen_register">
                        <div class="login-panel panel panel-default">
                            <div class="_title">Register with your email address</div>
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
                                    <div className="_mainbutalign"><button class="btn btn-primary" onClick={(event) => this.handleClick(event)}> Submit </button></div>
                                </fieldset>
                            </div>
                </div>
            </div>
        );
    }
}
export default Register;