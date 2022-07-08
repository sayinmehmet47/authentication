import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import 'antd/dist/antd.min.css';
import { setAuthorizationToken } from './helpers/setAuthorizationToken';

const jwtToken = localStorage.getItem('jwtToken');
if (jwtToken) {
  setAuthorizationToken(jwtToken);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
