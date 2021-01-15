import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'

import './index.css';
import App from './App';


ReactDOM.render(
  //gives our App  all of the functionality of routing that this library provides 
  <BrowserRouter>
  <App/>
 </BrowserRouter>,
  document.getElementById('root')
);

