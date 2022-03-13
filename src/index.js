import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import API from './API/api';

import './scss/app.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <API />
  </React.StrictMode>,
  document.getElementById('root')
);
