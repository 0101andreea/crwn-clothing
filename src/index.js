import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './redux/store'

import './index.css';
import App from './App';




ReactDOM.render(

  //Provider is a component that is the  parent of everything inside our app ; provide store to give redux to the entire app (ex:dispatch action from store)
  // BrowserRouter gives our App  all of the functionality of routing that this library provides 

  <Provider store={store}>
  <BrowserRouter>
  
  <App/>
 </BrowserRouter>
 </Provider>,
  document.getElementById('root')
);

