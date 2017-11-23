import React, { Component } from 'react';
import UploadScreen from './UploadScreen';
import { loginWithTwitter, loginWithGoogle, loginWithFacebook, login } from '../../services/auth-services';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            firebase_login_error: ''

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
        var self = this;
        login(this.state.email, this.state.password).then(response => {
            this.doLogin(self);
        }).catch(err => {
            this.setState({
                firebase_login_error: err.message
            });
        })
    }

    facebookLogin(e) {
        e.preventDefault();
        var self = this;
        loginWithFacebook().then(response => {
            this.doLogin(self);
        }).catch(err => {
            this.setState({
                firebase_login_error: err.message
            });
        })
    }

    googleLogin(e) {
        e.preventDefault();
        var self = this;
        loginWithGoogle().then(response => {
            this.doLogin(self);
        }).catch(err => {
            console.log(err);
        })
    }

    twitterLogin(e) {
        e.preventDefault();
        var self = this;
        loginWithTwitter().then(response => {
            this.doLogin(self);
        }).catch(err => {
            console.log(err);
        })
    }

    doLogin(self) {
        localStorage.setItem("isLogin", true);
        this.setState({
            firebase_login_error: ''
        });
        var uploadScreen = [];
        uploadScreen.push(<UploadScreen appContext={self.props.appContext} />)
        self.props.appContext.setState({ loginPage: [], uploadScreen: uploadScreen });
    }

    render() {
        return (
            <div className="screen_login style_whitebox">

                        

                        <div className="login-panel panel panel-default">
                            <div className="_title">Sign in</div>
                            <div className="panel-body">
                                <fieldset>
                                    <div className="form-group">
                                        <input
                                            className="form-control"
                                            placeholder="E-mail"
                                            name="email"
                                            type="email"
                                            value={this.state.email}
                                            onChange={this.handleInputChange} />
                                    </div>

                                    <div className="form-group">
                                        <input
                                            className="form-control"
                                            placeholder="Password"
                                            name="password"
                                            type="password"
                                            value={this.state.password}
                                            onChange={this.handleInputChange} />
                                    </div>

                                    <div className="checkbox">
                                        <label>
                                            <input name="remember" type="checkbox" value="Remember Me" />Remember Me
                                        </label>
                                    </div>
                                    <div className="error">
                                        {this.state.firebase_login_error}
                                    </div>
                                    <div className="_mainbutalign"><button className="btn btn-primary" onClick={(event) => this.handleClick(event)}>Login</button></div>

                                </fieldset>
                            </div>
                        </div>
                        
                    
                        <div className="section_socialmedia">
                            <p className="_title">Or Sign in With Social Media</p>
                            <p>You can also sign in with your social media accounts</p>
                            <div className="btn_socialmedia">
                                <a href="javascript:void(0);"
                                    className="btn _fb"
                                    onClick={(e) => this.facebookLogin(e)}>Facebook
                                </a>
                                <a href="javascript:void(0);"
                                    className="btn _twitter"
                                    onClick={(e) => this.twitterLogin(e)}>Twitter
                                </a>
                                <a href="javascript:void(0);"
                                    className="btn _google"
                                    onClick={(e) => this.googleLogin(e)}>google
                                </a>
                            </div>

                        </div>
                        <p className="link_forgot_password"><a href="javascript:void(0);">Lost your password?</a></p>
            </div>
        );
    }
}
export default Login;