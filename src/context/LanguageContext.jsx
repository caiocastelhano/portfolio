// Importa os hooks necessários do React e a biblioteca PropTypes para validação de props
import { createContext, useState } from "react";
import PropTypes from "prop-types";

// Cria o contexto de idioma, que será usado para compartilhar o estado globalmente
export const LanguageContext = createContext();

// Define o provedor que encapsula a aplicação e gerencia o estado do idioma
export function LanguageProvider({ children }) {
  // Estado para armazenar o idioma atual ("português" como idioma padrão)
  const [language, setLanguage] = useState("PT");

  // Função para alternar entre português e inglês
  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "PT" ? "EN" : "PT"));
  };

  return (
    // O contexto fornece o idioma atual e a função para alterá-lo a todos os componentes descendentes
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children} {/* Renderiza os componentes filhos dentro do provedor */}
    </LanguageContext.Provider>
  );
}

// Valida a prop `children` para garantir que o provedor sempre receba um nó válido do React
LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
