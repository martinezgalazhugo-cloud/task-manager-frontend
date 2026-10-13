//**Propósito. Iniciar React, cargar App e importar los estilos globales. */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/index.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("No se encontró el elemento #root.");
}

//console.log(rootElement);

createRoot(rootElement).render(
  <StrictMode>
    <App />,
  </StrictMode>,
);
