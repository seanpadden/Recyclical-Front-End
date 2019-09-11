import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route } from 'react-router-dom';



const routing = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

ReactDOM.render(routing, document.getElementById('root')
);
