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
        <p className="dashboard_title"> Profile </p>

        <div className="large_whitebox">

          <form>
            <div className="row">
              <div className="col-md-5">
                <div className="form-group label-floating is-empty">
                  <label className="control-label">Company (disabled)</label>
                  <input type="text" className="form-control" disabled />
                  <span className="material-input"></span></div>
              </div>
              <div className="col-md-3">
                <div className="form-group label-floating is-empty">
                  <label className="control-label">Username</label>
                  <input type="text" className="form-control" />
                  <span className="material-input"></span></div>
              </div>
              <div className="col-md-4">
                <div className="form-group label-floating is-empty">
                  <label className="control-label">Email address</label>
                  <input type="email" className="form-control" />
                  <span className="material-input"></span></div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group label-floating is-empty">
                  <label className="control-label">Fist Name</label>
                  <input type="text" className="form-control" />
                  <span className="material-input"></span></div>
              </div>
              <div className="col-md-6">
                <div className="form-group label-floating is-empty">
                  <label className="control-label">Last Name</label>
                  <input type="text" className="form-control" />
                  <span className="material-input"></span></div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="form-group label-floating is-empty">
                  <label className="control-label">Adress</label>
                  <input type="text" className="form-control" />
                  <span className="material-input"></span></div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="form-group label-floating is-empty">
                  <label className="control-label">City</label>
                  <input type="text" className="form-control" />
                  <span className="material-input"></span></div>
              </div>
              <div className="col-md-4">
                <div className="form-group label-floating is-empty">
                  <label className="control-label">Country</label>
                  <input type="text" className="form-control" />
                  <span className="material-input"></span></div>
              </div>
              <div className="col-md-4">
                <div className="form-group label-floating is-empty">
                  <label className="control-label">Postal Code</label>
                  <input type="text" className="form-control" />
                  <span className="material-input"></span></div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <label>About Me</label>
                  <div className="form-group label-floating is-empty">
                    <label className="control-label"> Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.</label>
                    <textarea className="form-control" rows="5"></textarea>
                    <span className="material-input"></span></div>
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-primary pull-right">Update Profile</button>
            <div className="clearfix"></div>
          </form>

        </div>

      </div>
    );
  }
}
export default Profile;