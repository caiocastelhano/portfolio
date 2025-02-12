import { useContext, useState } from "react";
import { LanguageContext } from "../context/LanguageContext";
import "../styles/Navbar.css";
import brazilFlag from "../images/brazil-flag.png";
import usaFlag from "../images/usa-flag.png";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const { language, toggleLanguage } = useContext(LanguageContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleLanguage = (lang) => {
    if ((language === "PT" && lang === "EN") || (language === "EN" && lang === "PT")) {
      toggleLanguage();
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-title">Caio Castelhano</h1>
        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <div className={`navbar-menu ${menuOpen ? "open" : ""}`}>
          <a href="#about" onClick={() => setMenuOpen(false)} aria-label="Ir para a seção Sobre">
            {language === "PT" ? "Sobre" : "About"}
          </a>
          <a href="#projects" onClick={() => setMenuOpen(false)} aria-label="Ir para a seção Projetos">
            {language === "PT" ? "Projetos" : "Projects"}
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)} aria-label="Ir para a seção Contato">
            {language === "PT" ? "Contato" : "Contact"}
          </a>
          <div className="language-switcher">
            <img
              src={brazilFlag}
              alt="Português"
              role="button"
              tabIndex="0"
              className={`language-icon ${language === "PT" ? "active" : ""}`}
              onClick={() => handleToggleLanguage("PT")}
              onKeyDown={(e) => e.key === "Enter" && handleToggleLanguage("PT")}
            />
            <img
              src={usaFlag}
              alt="English"
              role="button"
              tabIndex="0"
              className={`language-icon ${language === "EN" ? "active" : ""}`}
              onClick={() => handleToggleLanguage("EN")}
              onKeyDown={(e) => e.key === "Enter" && handleToggleLanguage("EN")}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
