import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ContextoTareasProvider } from "./context/ContextoTareas";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextoTareasProvider>
      <App />
    </ContextoTareasProvider>
  </React.StrictMode>
);
