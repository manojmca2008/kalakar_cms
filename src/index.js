import React from 'react';
import ReactDOM from 'react-dom';

import './assets/style/screen.css';

import App from './App';
import './jquery.dataTables.min.css';
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
