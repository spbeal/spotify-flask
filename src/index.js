import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route } from 'react-router-dom';
import React, { StrictMode } from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // <React.StrictMode>
  //   <App/>
  // </React.StrictMode>,
  // document.getElementById('root')
);