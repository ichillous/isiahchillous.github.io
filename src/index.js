// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import IsiahChillousWebsite from './App';
import reportWebVitals from './reportWebVitals';
import './App.css';
import FontFaceObserver from 'fontfaceobserver';

// Font loading code
const nabla = new FontFaceObserver('Nabla');
nabla.load().then(() => {
  document.documentElement.classList.add('fonts-loaded');
}).catch((e) => {
  console.error('Font loading failed', e);
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <IsiahChillousWebsite />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
