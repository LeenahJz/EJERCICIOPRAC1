import React from "react";
import ReactDOM from "react-dom/client";
import { AppProvider } from "./Context.jsx";
import './index.css'
import App from './App.jsx'

// Cambia ReactDOM.render por createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);