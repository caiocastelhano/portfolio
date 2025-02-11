import { useState } from "react";
import "../index.css";
import brazilFlag from "../images/brazil-flag.png";
import usaFlag from "../images/usa-flag.png";


export default function Navbar() {
  const [language, setLanguage] = useState("PT");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "PT" ? "EN" : "PT"));
  };

  return (
    <nav className="navbar">
      <h1 className="navbar-title">{language === "PT" ? "Caio Castelhano | Desenvolvedor Web Full-Stack" : "Caio Castelhano | Full-Stack Web Developer"}</h1>
      <div className="navbar-menu">
        <a href="#about">{language === "PT" ? "Sobre" : "About"}</a>
        <a href="#projects">{language === "PT" ? "Projetos" : "Projects"}</a>
        <a href="#contact">{language === "PT" ? "Contato" : "Contact"}</a>
        <button onClick={toggleLanguage} className="language-button">
          <img 
            src={language === "PT" ? brazilFlag : usaFlag}
            alt={language === "PT" ? "Bandeira do Brasil" : "Bandeira dos EUA"} 
            className="language-icon"
          />
        </button>
      </div>
    </nav>
  );
}
