import React from 'react'
import ReactDOM from 'react-dom/client';
import App from './App'; 
import SettingsContextProvider from './context/SettingsContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <SettingsContextProvider>
    <App />
  </SettingsContextProvider>
)
