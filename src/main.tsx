import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './models/models.flow';
import {
    createBrowserRouter,
    BrowserRouter,
} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <BrowserRouter>
          <App />
      </BrowserRouter>
  </React.StrictMode>
)
