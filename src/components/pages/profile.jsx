import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


class Profile extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
          <p className="dashboard_title">Page Title</p>
      </div>
    );
  }
}
export default Profile;