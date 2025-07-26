import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FontFaceObserver from 'fontfaceobserver';

// Optional: load Inter if you add it in public/index.html
const loadFonts = async () => {
  const inter = new FontFaceObserver('Inter');
  try {
    await Promise.race([
      inter.load(null, 3000),
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
    <App />
  </React.StrictMode>
);

reportWebVitals();
