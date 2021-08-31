import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import {Provider} from 'react-redux';
import reportWebVitals from './reportWebVitals';
import store from './Reducer/store'


ReactDOM.render(
  <Provider store={store}>
    <App />

  </Provider>, 
  
  document.getElementById('root')
);

reportWebVitals();
