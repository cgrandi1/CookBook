import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ReactListItem from './components/RecipeListItem'

import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
import store from './components/store'
import {BrowserRouter} from 'react-router-dom'


const app = <Provider store={store}>
<BrowserRouter>
<App />
</BrowserRouter>


</Provider>


ReactDOM.render(app,document.getElementById('root')
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
);


