import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import './i18n/i18n';
import App from "./App";
import "./styles.css";
import "./styles/globals.css";
import store from './app/store';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Suspense>
      <Provider store={store}>
        <App />
      </Provider>
    </Suspense>
  </React.StrictMode>,
);
