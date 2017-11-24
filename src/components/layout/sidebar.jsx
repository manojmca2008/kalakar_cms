import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../../services/auth-services';

import '../../assets/style/dashbord.css';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  logout(e){
    logout();
    localStorage.setItem('isLogin', '');
    window.location.reload('/');
  }
  render() {
    return (
      <div>
        <div className="sidebar section_sidebar" data-color="purple">


          <div className="_brandlogo">
            <a href="/"><img src="../images/logo_kalakar.png" alt="" / ></a>
          </div>

          <div className="sidebar-wrapper">
            <ul className="nav nav-pills flex-column">
              <li className="active">
                <a href="dashboard.html">
                  <i className="material-icons">dashboard</i>
                  Dashboard
                </a>
              </li>
              <li>
                  <Link to="/profile">
                    <i className="material-icons">person</i>
                    Profile
                  </Link>
              </li>
              <li>
                <a href="./table.html">
                  <i className="material-icons">content_paste</i>
                  Table List
                </a>
              </li>
              <li>
                <a href="./typography.html">
                  <i className="material-icons">library_books</i>
                  Typography
                </a>
              </li>
              <li>
                <a href="./icons.html">
                  <i className="material-icons">bubble_chart</i>
                  Icons
                </a>
              </li>
              <li>
                <a href="./maps.html">
                  <i className="material-icons">location_on</i>
                  Maps
                </a>
              </li>
              <li>
                <a href="./notifications.html">
                  <i className="material-icons text-gray">notifications</i>
                  Notifications
                </a>
              </li>
              <li>
                <a href="javascript:void(0);" onClick={(event) => this.logout(event)}>
                  <i className="material-icons text-gray">settings_power</i>
                  Logout
                </a>
              </li>
              <li className="txt_footer_copyright">© 2018 <a href="//kalakar.pro" target="_blank" className="link">kalakar.pro</a></li>
              
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default Sidebar;