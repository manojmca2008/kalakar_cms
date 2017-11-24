import React, { Component } from 'react';
import { forgotPassword } from '../../services/auth-services';
class Forget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            firebase_forget_error: '',
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
        if (this.state.email === '') {
            this.setState({
                firebase_forget_error: 'Email is not empty!'
            });
        } else {
            forgotPassword(this.state.email).then(value => {
                this.setState({
                    firebase_forget_error: ''
                });

            }).catch(err => {
                this.setState({
                    firebase_forget_error: err.message
                });
            })
        }
    }

    handleGoBackClick(e){
        localStorage.setItem("isForget", '');
        window.location.reload('/');
    }


    render() {
        return (
            <div>
                <div className="_title">Oh no, You Forgot Your Password?</div>
                <div className="form-group">
                    <input
                        className="form-control"
                        placeholder="E-mail"
                        name="email"
                        type="email"
                        value={this.state.email}
                        onChange={this.handleInputChange} />
                </div>
                <div className="error">
                    {this.state.firebase_forget_error}
                </div>
                <div className="_mainbutalign">
                    <button className="btn btn-primary" onClick={(event) => this.handleClick(event)}>Submt</button>
                    <button className="btn" onClick={(event) => this.handleGoBackClick(event)}>Go Back</button>
                </div>

            </div>
        );
    }
}
export default Forget;