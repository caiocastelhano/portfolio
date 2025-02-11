// Importa as bibliotecas React e ReactDOM para renderizar a aplicação, o componente principal e o contexto do idioma
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { LanguageProvider } from "./context/LanguageContext";

// Obtém o elemento HTML com o ID "root" e inicia a renderização da aplicação React
ReactDOM.createRoot(document.getElementById("root")).render(
  // React.StrictMode ajuda a identificar possíveis problemas na aplicação durante o desenvolvimento
  // O LanguageProvider envolve a aplicação para fornecer o contexto de idioma globalmente
  <React.StrictMode>
    <LanguageProvider>
      <App /> {/* Renderiza o componente principal */}
    </LanguageProvider>
  </React.StrictMode>
);
