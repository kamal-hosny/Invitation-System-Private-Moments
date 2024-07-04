import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import { store } from "./app/store";
import './index.css';
import App from './routes/AppRouter.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <HelmetProvider>
        <App />
    </HelmetProvider>
    </Provider>
  </React.StrictMode>
);
