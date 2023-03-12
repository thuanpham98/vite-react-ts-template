import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css';
import './assets';

const rootMain = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
  {
    identifierPrefix: `${import.meta.env.TE_APP_NAME}`,
    onRecoverableError(error) {
      console.log(error);
    },
  }
);
rootMain.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
