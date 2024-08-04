
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import IsiahChillousWebsite from './App';
import reportWebVitals from './reportWebVitals';
import './App.css';
import FontFaceObserver from 'fontfaceobserver';

// Font loading 
const loadFonts = async () => {
  const nabla = new FontFaceObserver('Nabla');
  
  try {
    await Promise.race([
      nabla.load(null, 3000), // 3 second timeout
      new Promise((_, reject) => setTimeout(() => reject(new Error('Font loading timed out')), 3000))
    ]);
    document.documentElement.classList.add('fonts-loaded');
  } catch (e) {
    console.warn('Font loading failed:', e);
    document.documentElement.classList.add('fonts-failed');
  }
};

loadFonts();

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
