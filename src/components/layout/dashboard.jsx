import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'

import DashboardLanding from '../pages/DashboardLanding';
import Profile from '../pages/profile';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //showLoginPopup: false
    };
  }
  render() {
    return (
      <div >
          <div className="main-panel">
            <nav className="navbar navbar-transparent navbar-absolute">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#"> Material Dashboard </a>
                    </div>
                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <a href="#pablo" className="dropdown-toggle" data-toggle="dropdown">
                                    <i className="material-icons">dashboard</i>
                                    <p className="d-sm-none">Dashboard</p>
                                </a>
                            </li>
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                    <i className="material-icons">notifications</i>
                                    <span className="notification">5</span>
                                    <p className="d-sm-none">Notifications</p>
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a href="#">Mike John responded to your email</a>
                                    </li>
                                    <li>
                                        <a href="#">You have 5 new tasks</a>
                                    </li>
                                    <li>
                                        <a href="#">You're now friend with Andrew</a>
                                    </li>
                                    <li>
                                        <a href="#">Another Notification</a>
                                    </li>
                                    <li>
                                        <a href="#">Another One</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#pablo" className="dropdown-toggle" data-toggle="dropdown">
                                    <i className="material-icons">person</i>
                                    <p className="d-sm-none">Profile</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="content">
                <DashboardLanding />
            </div>
            
        </div>
      </div>
    );
  }
}
export default Dashboard;