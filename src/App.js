import React, { Component } from 'react';
import Loginscreen from './components/login/Loginscreen';
import UploadScreen from './components/login/UploadScreen';
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      loginPage:[],
      uploadScreen:[]
    }
  }
  componentWillMount(){
    var loginPage =[];
    var uploadScreen = [];
    if(localStorage.getItem("isLogin")){
      uploadScreen.push(<UploadScreen parentContext={this}/>);
      this.setState({
        uploadScreen:uploadScreen
      });
    }else{
      loginPage.push(<Loginscreen parentContext={this}/>);
      this.setState({
        loginPage:loginPage,
        uploadScreen:[]
      })
    }
    
  }
  render() {
    return (
      <div className="App">
        {this.state.loginPage}
        {this.state.uploadScreen}
      </div>
    );
  }
}

export default App;