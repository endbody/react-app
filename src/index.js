import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {HashRouter,BrowserRouter} from "react-router-dom"


import 'antd-mobile/dist/antd-mobile.css';
import "./assets/css/reset.css"
import "./assets/css/swiper.min.css"
import "./assets/js/rem"
import "./App.styl"

ReactDOM.render(
  <HashRouter>
     <App />
  </HashRouter>,
  document.getElementById('root')
);

