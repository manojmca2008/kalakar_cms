import React, { Component } from 'react';
import Sidebar from '../../components/layout/sidebar';
import Footer from '../../components/layout/footer';
import Main from '../../Main'
class UploadScreen extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
       
    }
    
    render() {
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
export default UploadScreen;