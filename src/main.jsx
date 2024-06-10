import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from "react-helmet-async";
import './index.css';
import App from './routes/AppRouter.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
    <App />
    </HelmetProvider>
  </React.StrictMode>
)
