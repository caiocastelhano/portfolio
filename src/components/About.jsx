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
    <section id="about" className="about">
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
          ? "Após mais de uma década trabalhando com redes sociais, decidi migrar para o desenvolvimento web."
          : "After more than a decade working in social media, I transitioned to web development."}
          </p>
          <p>
          {language === "PT"
          ? "Fiz um bootcamp intensivo na Le Wagon, onde aprendi Ruby on Rails, JavaScript, HTML e CSS. Desde então, tenho focado em React."
          : "I completed an intensive bootcamp at Le Wagon, learning Ruby on Rails, JavaScript, HTML, and CSS. Since then, I’ve focused on React."}
          </p>
          <p>
          {language === "PT"
          ? "Minha experiência em filosofia e cinema me ajudou a desenvolver um olhar analítico e criativo para resolver problemas. Também valorizo muito o trabalho em equipe."
          : "My background in philosophy and film has helped me develop an analytical and creative approach to problem-solving. I also highly value teamwork."}
          </p>
          <p>
          {language === "PT"
          ? "Entre em contato e vamos construir algo incrível juntos!"
          : "Get in touch, and let’s build something great together!"}
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
