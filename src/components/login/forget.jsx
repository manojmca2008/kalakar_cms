import React, { Component } from 'react';
//import { forget } from '../../services/auth-services';
class forget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    /*handleInputChange(event) {
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
           console.log(JSON.stringify(response));
           localStorage.setItem("isLogin", true);
           this.setState({
               log_error: ''
           });
           var uploadScreen = [];
           uploadScreen.push(<UploadScreen appContext={self.props.appContext} />)
           self.props.appContext.setState({ loginPage: [], uploadScreen: uploadScreen });
       }).catch(err => {
           this.setState({
               log_error: err.message
           });
       })
   }*/


    render() {
        return (
            <div>
                <div className="_title">Oh no, You Forgot Your Password?</div>
                <div className="form-group">
                    <input
                        className="form-control"
                        placeholder="E-mail"
                        name="forgot-email"
                        type="forgot-email"
                        value={this.state.email}
                        onChange={this.handleInputChange} />
                </div>
                <div className="error">
                    {this.state.log_error}
                </div>
                <div className="_mainbutalign">
                    <button className="btn btn-primary" onClick={(event) => this.handleClick(event)}>Submt</button>
                    <button className="btn" onClick={(event) => this.handleClick(event)}>Go Back</button>
                </div>

            </div>
        );
    }
}
export default forget;