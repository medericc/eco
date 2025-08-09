import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Analytics } from '@vercel/analytics/react'
import App from "./App";
import "./index.css";

const rootElement = document.getElementById("root") as HTMLElement;

createRoot(rootElement).render(
  <React.StrictMode>
    <Router>
      <App />
      
    </Router>
    <Analytics />
  </React.StrictMode>
);
