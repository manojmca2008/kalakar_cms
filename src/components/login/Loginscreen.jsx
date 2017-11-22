import React, { Component } from 'react';
 
import Login from './Login';
import Register from './Register';
class Loginscreen extends Component {
  constructor(props){
    super(props);
    this.state={
      username:'',
      password:'',
      loginscreen:[],
      loginmessage:'',
      buttonLabel:'Register',
      isLogin:true
    }
  }
  handleClick(event){
    var loginmessage;
    if(this.state.isLogin){
        var loginscreen=[];
        loginscreen.push(<Register parentContext={this} appContext={this.props.parentContext}/>);
        loginmessage = "Already registered.Go to Login";
        this.setState({
            loginscreen:loginscreen,
            loginmessage:loginmessage,
            buttonLabel:"Login",
            isLogin:false
        })
    }
    else{
        var loginscreen=[];
        loginscreen.push(<Login parentContext={this} appContext={this.props.parentContext}/>);
        loginmessage = "Not Registered yet.Go to registration";
        this.setState({
            loginscreen:loginscreen,
            loginmessage:loginmessage,
            buttonLabel:"Register",
            isLogin:true
        })
    }
  }
  componentWillMount(){
    var loginscreen=[];
    loginscreen.push(<Login parentContext={this} appContext={this.props.parentContext}/>);
    var loginmessage = "Not registered yet, Register Now";
    this.setState({
        loginscreen:loginscreen,
        loginmessage:loginmessage
    })
  }
  render() {
    return (
      <div className="loginscreen">
        {this.state.loginscreen}
        <div style={{paddingLeft:529}}>
          {this.state.loginmessage}
            <div >
               <button class="btn btn-primary" onClick={(event) => this.handleClick(event)}>{this.state.buttonLabel}</button>
           </div>
        </div>
      </div>
    );
  }
} 
 
export default Loginscreen;