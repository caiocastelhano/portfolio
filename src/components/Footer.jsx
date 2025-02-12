import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import "../styles/Footer.css";

export default function Footer() {
  const { language } = useContext(LanguageContext);

  return (
    <footer className="footer">
      <small>
        {language === "PT"
          ? `Caio Castelhano © ${new Date().getFullYear()} - Todos os direitos reservados`
          : `Caio Castelhano © ${new Date().getFullYear()} - All rights reserved`}
      </small>
    </footer>
  );
}
