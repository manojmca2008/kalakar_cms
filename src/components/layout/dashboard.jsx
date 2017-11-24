import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import DashboardLanding from '../pages/DashboardLanding';
import Profile from '../pages/Profile';

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
                    <nav className="dashboard_nav clearfix">
                        <p className="_title hidden-md-down">Welcome to kalakar.pro CMS </p>
                            <button type="button" className="navbar-toggle" data-toggle="collapse">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            
                            <ul className="nav navbar-right">
                                <li className="dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                        <i className="material-icons">notifications</i>
                                        <span className="notification">5</span>
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
                                <li className="dropdown">
                                    <a href="#pablo" className="dropdown-toggle" data-toggle="dropdown">
                                        <i className="material-icons">person</i>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><em>Hi Name</em></li>
                                        <li>
                                            <a href="#">Profile</a>
                                        </li>
                                        <li>
                                            <a href="#">Logout</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                    </nav>
                    <div className="content">
                        <div className="container-fluid">
                            <Profile />
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
export default Dashboard;