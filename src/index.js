import React from 'react';
import ReactDOM from 'react-dom/client';
import Pokemon from './Pokemon';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Pokemon />
  </React.StrictMode>
);

