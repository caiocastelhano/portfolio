import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import "../styles/Contact.css";
import { CiLinkedin, CiInstagram } from "react-icons/ci";
import { FaGithub, FaVimeo, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const { language } = useContext(LanguageContext);

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2>
          {language === "PT" ? "Fala comigo!" : "Drop me a message!"}
        </h2>
        <h3>
          {language === "PT" ? "Estou sempre aberto para novas oportunidades, projetos e parcerias."
                             : "I'm always open to new opportunities, projects, and collabs."}
        </h3>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/caio-castelhano/" target="_blank" rel="noopener noreferrer">
            <CiLinkedin className="icon" />
          </a>
          <a href="https://www.instagram.com/caiocastelhano/" target="_blank" rel="noopener noreferrer">
            <CiInstagram className="icon" />
          </a>
          <a href="https://github.com/caiocastelhano" target="_blank" rel="noopener noreferrer">
            <FaGithub className="icon" />
          </a>
          <a href="https://vimeo.com/caiocastelhano" target="_blank" rel="noopener noreferrer">
            <FaVimeo className="icon" />
          </a>
          <a href="mailto:castelhanoc@gmail.com">
            <FaEnvelope className="icon" />
          </a>
        </div>
      </div>
    </section>
  );
}
