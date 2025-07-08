import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import "../styles/About.css";
import profile from "../images/profile.jpg";
import { DiReact, DiJavascript1, DiRuby, DiHtml5, DiCss3, DiRor } from "react-icons/di";
import { FaFigma, FaGithub } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

export default function About() {
  const { language } = useContext(LanguageContext);

  const baseUrl = "/portfolio";

  const cvFile = language === "PT" 
    ? `${baseUrl}/CaioCastelhanoResumePTBR.pdf`
    : `${baseUrl}/CaioCastelhanoResumeENUS.pdf`;

  return (
    <section id="about" className="about">
      <div className="about-container">
          <div className="cv-container">
            <img src={profile} alt="Profile" className="about-image" />
            <a href={cvFile} download type="application/pdf" className="cv-button">
              {language === "PT" ? "Baixar CV" : "Download CV"}
            </a>
          </div>

          <div className="about-text">
            <h2>
              {language === "PT"
                ? "Desenvolvedor Full-Stack"
                : "Full-Stack Developer"}
            </h2>
            <p>
              {language === "PT"
                ? "Desenvolvedor web com experiência em React, Next.js, Ruby on Rails e JavaScript. Já criei sites institucionais, experiências interativas e aplicações full stack — sempre cuidando da performance e do design."
                : "Web developer with experience in React, Next.js, Ruby on Rails, and JavaScript. I've built institutional websites, interactive experiences, and full-stack applications — always focusing on performance and design."}
            </p>
            <p>
              {language === "PT"
                ? "Antes disso, trabalhei por mais de 12 anos com redes sociais. Tenho formação em filosofia e cinema, e carrego isso comigo até quando estou programando."
                : "Before that, I worked for over 12 years with social media. I have a background in philosophy and film, and I carry that with me even when I'm coding."}
            </p>
            <p>
              {language === "PT"
                ? "Vamos conversar?"
                : "Let's connect!"}
            </p>
          </div>
        </div>

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
