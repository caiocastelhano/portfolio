import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import "../styles/About.css";
import profile from "../images/profile.jpg";
import { DiReact, DiJavascript1, DiRuby, DiHtml5, DiCss3, DiRor } from "react-icons/di";
import { FaFigma, FaGithub } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

export default function About() {
  const { language } = useContext(LanguageContext);

  return (
    <section className="about">
      <div className="about-container">
        <img src={profile} alt="Profile" className="about-image" />
        <div className="about-text">
          <h2>
            {language === "PT"
              ? "Desenvolvedor Full-Stack"
              : "Full-Stack Developer"}
          </h2>
          <p>
            {language === "PT"
              ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
          </p>
        </div>
      </div>

      {/* 🔽 Ícones abaixo da foto e do texto */}
      <div className="icons-container">
        {[
          { icon: <DiHtml5 className="icon" />, label: "HTML5" },
          { icon: <DiCss3 className="icon" />, label: "CSS3" },
          { icon: <DiJavascript1 className="icon" />, label: "JavaScript" },
          { icon: <DiReact className="icon" />, label: "React" },
          { icon: <DiRuby className="icon" />, label: "Ruby" },
          { icon: <DiRor className="icon" />, label: "Ruby on Rails" },
          { icon: <FaFigma className="icon" />, label: "Figma" },
          { icon: <FaGithub className="icon" />, label: "Git/GitHub" },
          { icon: <VscVscode className="icon" />, label: "VS Code" }
        ].map((item, index) => (
          <div className="icon-item" key={index}>
            {item.icon}
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
