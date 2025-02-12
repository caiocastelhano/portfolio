import { useContext, useState } from "react";
import { LanguageContext } from "../context/LanguageContext";
import "../styles/Navbar.css";
import brazilFlag from "../images/brazil-flag.png";
import usaFlag from "../images/usa-flag.png";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const { language, setLanguage } = useContext(LanguageContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleLanguage = (lang) => {
    setLanguage(lang);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-title">
          {language === "PT"
            ? "Caio Castelhano"
            : "Caio Castelhano"}
        </h1>
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
              onClick={() => toggleLanguage("PT")}
              onKeyDown={(e) => e.key === "Enter" && toggleLanguage("PT")}
            />
            <img
              src={usaFlag}
              alt="English"
              role="button"
              tabIndex="0"
              className={`language-icon ${language === "EN" ? "active" : ""}`}
              onClick={() => toggleLanguage("EN")}
              onKeyDown={(e) => e.key === "Enter" && toggleLanguage("EN")}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
