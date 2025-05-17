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
                ? "Sou desenvolvedor web com formação no bootcamp da Le Wagon, onde aprendi Ruby on Rails, JavaScript, HTML, CSS e fundamentos sólidos de desenvolvimento full stack. Desde então, venho me aprofundando em Next.js, JavaScript e React, stack com a qual desenvolvi este portfólio — o primeiro projeto que construí do zero, sozinho."
                : "I'm a web developer trained at the Le Wagon bootcamp, where I learned Ruby on Rails, JavaScript, HTML, CSS, and solid foundations in full-stack development. Since then, I've been deepening my skills in Next.js, JavaScript, and React — the stack I used to build my portfolio, the first project I developed entirely on my own."}
            </p>
            <p>
              {language === "PT"
                ? "Antes de entrar para a tecnologia, atuei por mais de 12 anos com redes sociais e comunicação. Também tenho bagagem em filosofia e cinema, o que me dá um olhar analítico e criativo para resolver problemas e contar histórias — mesmo no código."
                : "Before moving into tech, I spent over 12 years working with social media and communication. I also have a background in philosophy and film, which gives me an analytical and creative lens for problem-solving and storytelling — even in my code."}
            </p>
            <p>
              {language === "PT"
                ? "Vamos conversar?"
                : "Let’s connect!"}
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
