import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { DataContextProvider } from './contexts/Context';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DataContextProvider>
      <Router>
        <App />
      </Router>
    </DataContextProvider>
  </React.StrictMode>
);


