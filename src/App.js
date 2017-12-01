import React, { Component } from 'react';
import Loginscreen from './components/login/Loginscreen';
import UploadScreen from './components/login/UploadScreen';
import Forget from './components/login/Forget';
import firebase from 'firebase';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginPage: [],
      uploadScreen: []
    }
  }
  componentWillMount() {
    var loginPage = [];
    var uploadScreen = [];
    if (localStorage.getItem("isForget")) {
      uploadScreen.push(<Forget parentContext={this} />);
      this.setState({
        uploadScreen: uploadScreen
      });
    } else {
      var self = this;
      firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          uploadScreen.push(<UploadScreen parentContext={self} />);
          self.setState({
            uploadScreen: uploadScreen
          });
        } else {
          loginPage.push(<Loginscreen parentContext={self} />);
          self.setState({
            loginPage: loginPage,
            uploadScreen: []
          })
        }
      });
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