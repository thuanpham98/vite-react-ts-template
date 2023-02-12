import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const rootMain = ReactDOM.createRoot(document.getElementById('root') as HTMLElement,{identifierPrefix:'template',onRecoverableError(error) {
    console.log(error);
},});
rootMain.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
