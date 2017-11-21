import React, { Component } from 'react';
//import './App.css';
//import './assets/css/bootstrap.min.css';
//import Header from './components/layout/Header';
import Sidebar from './components/layout/sidebar';
import Footer from './components/layout/footer';
import Login from './components/auth/login';
import Main from './Main'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: localStorage.getItem('isLogin')
    }
  }
  render() {
    if (!this.state.isLogin) {
      return (
        <div>
            <Login />
        </div>
      );
    } else {
      return (
        <div>
          <div className="wrapper">
            <Sidebar />
            <div className="main">
              <div className="mainContent clearfix">
                <Main />
              </div>
            </div>
            {/* <Footer /> */}
          </div>
        </div>
      );
    }
  }
}
export default App;
