import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { Provider } from 'react-redux'
// import { Router, browserHistory } from 'react-router';
import App from './App';


ReactDOM.render(
    <Provider store={store}>
       {/* <Router history={browserHistory} routes={routes} /> */}
      <App />
    </Provider>,
    document.getElementById('root'));




