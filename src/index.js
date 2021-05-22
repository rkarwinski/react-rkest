import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { faSyncAlt, faPlus } from '@fortawesome/free-solid-svg-icons';
import Layout from './pages/Layout';
import './style/theme.css';
import { Provider } from 'react-redux';
import store from './store';
import reportWebVitals from './reportWebVitals';


library.add(faCircle, faPlus);


ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
        <Layout />
      </Provider>,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();