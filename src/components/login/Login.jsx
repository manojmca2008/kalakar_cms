import React, { Component } from 'react';
import UploadScreen from './UploadScreen';
import { login } from '../../services/auth-services';
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
        var self = this;
        e.preventDefault();
        login(this.state.email, this.state.password).then(response => {            
            localStorage.setItem("isLogin", true);
            this.setState({
                firebase_login_error: ''
            });
            var uploadScreen = [];
            uploadScreen.push(<UploadScreen appContext={self.props.appContext} />)
            self.props.appContext.setState({ loginPage: [], uploadScreen: uploadScreen });
        }).catch(err => {
            this.setState({
                firebase_login_error: err.message
            });
        })
    }


    render() {
        return (
            <div className="screen_login">
                <div className="row">
                    <div className="col-md-7 col-xs-12">


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

                    </div>
                    <div className="col-md-5 col-xs-12">
                        <div className="section_socialmedia">

                            <p className="_title">Sign in With Social Media</p>
                            <p>You can also sign in with your social media accounts</p>
                            <div className="btn_socialmedia">
                                <a href="//www.facebook.com/" className="btn _fb">Facebook</a>
                                <a href="//www.twitter.com/" className="btn _twitter">twitter</a>
                                <a href="//www.plus.google.com/" className="btn _google">google +</a>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
export default Login;