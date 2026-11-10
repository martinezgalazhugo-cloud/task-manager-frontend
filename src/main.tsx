//**Propósito. Iniciar React, cargar App e importar los estilos globales. */
//Envolver la aplicación una sola vez con BrowserRouter.
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App";
import "./styles/index.css";
const root = document.getElementById("root");
if (!root) {
  throw new Error("No se encontró el elemento #root.");
}
createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
