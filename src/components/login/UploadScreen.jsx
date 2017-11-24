import React, { Component } from 'react';
import Sidebar from '../../components/layout/Sidebar';
import Header from '../../components/layout/Header';

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
                <div className="main-panel">
                  <Header />
                  <div className="content">
                    <div className="container-fluid">
                       <Main />
                    </div>
                    </div>
                </div>
              {/* <Footer /> */}
            </div>
          </div>
        );
    }
}
export default UploadScreen;