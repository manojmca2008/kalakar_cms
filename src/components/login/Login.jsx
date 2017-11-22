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
            <div >
                <div class="row">
                    <div class="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 col-md-4 col-md-offset-4">
                        <div class="login-panel panel panel-default">
                            <div class="panel-heading">Log in</div>
                            <div class="panel-body">
                                <fieldset>
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
                                    <div class="checkbox">
                                        <label>
                                            <input name="remember" type="checkbox" value="Remember Me" />Remember Me
                                        </label>
                                    </div>
                                    <div className="error">
                                        {this.state.firebase_login_error}
                                    </div>
                                    <button class="btn btn-primary" onClick={(event) => this.handleClick(event)}>Login</button>
                                </fieldset>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Login;