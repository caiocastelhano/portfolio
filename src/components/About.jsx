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
    ? `${baseUrl}/CaioCastelhano_PT.pdf`
    : `${baseUrl}/CaioCastelhano_EN.pdf`;

  return (
    <section id="about" className="about">
      <div className="about-container">
  {/* 🔽 Nova div para agrupar a imagem e o botão */}
          <div className="cv-container">
            <img src={profile} alt="Profile" className="about-image" />
            <a href={cvFile} download type="application/pdf" className="cv-button">
              {language === "PT" ? "Baixar CV" : "Download CV"}
            </a>
          </div>

          {/* 🔽 Texto permanece na outra coluna */}
          <div className="about-text">
            <h2>
              {language === "PT"
                ? "Desenvolvedor Full-Stack"
                : "Full-Stack Developer"}
            </h2>
            <p>
              {language === "PT"
                ? "Passei mais de 10 anos trabalhando com redes sociais, mas acabei me apaixonando por desenvolvimento web e resolvi mudar de área."
                : "I spent over 10 years working with social media, but I fell in love with web development and decided to make the switch."}
            </p>
            <p>
              {language === "PT"
                ? "Fiz um bootcamp intensivo na Le Wagon, onde aprendi Ruby on Rails, JavaScript, HTML e CSS. Depois disso, mergulhei de cabeça no React."
                : "I did an intensive bootcamp at Le Wagon, where I learned Ruby on Rails, JavaScript, HTML, and CSS. Since then, I’ve been diving deep into React."}
            </p>
            <p>
              {language === "PT"
                ? "Minha bagagem em filosofia e cinema me deu um olhar analítico e criativo para resolver problemas, e eu curto muito trabalhar em equipe."
                : "My background in philosophy and film gave me an analytical and creative approach to problem-solving, and I really enjoy working in a team."}
            </p>
            <p>
              {language === "PT"
                ? "Bora criar algo incrível juntos? Me chama! 🚀"
                : "Let’s build something awesome together! Hit me up! 🚀"}
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
