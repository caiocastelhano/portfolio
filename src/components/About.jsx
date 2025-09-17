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
    ? `${baseUrl}/CaioCastelhanoResumeCV-PTBR-2025.pdf`
    : `${baseUrl}/CaioCastelhanoResumeCV-ENGUS-2025.pdf`;

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
                ? "Desenvolvedor full-stack"
                : "Full-stack Developer"}
            </h2>
            <p>
              {language === "PT"
                ? "Experiência prática em projetos entregues como freelancer em React, Next.js e JavaScript. Crio aplicações modernas, responsivas e acessíveis, com foco em performance, SEO e identidade visual consistente."
                : "Hands-on experience in freelance projects using React, Next.js, and JavaScript. I build modern, responsive, and accessible applications with a focus on performance, SEO, and consistent visual design."}
            </p>
            <p>
              {language === "PT"
                ? "Atuo com deploy em Vercel e Netlify e aplico boas práticas de acessibilidade e internacionalização."
                : "I have experience deploying projects on Vercel and Netlify and follow best practices for accessibility and internationalization."}
            </p>
            <p>
              {language === "PT"
                ? "Carreira anterior em comunicação e marketing digital, que fortalece minhas soft skills em escrita, criatividade e colaboração com equipes multidisciplinares."
                : "My previous career in communication and digital marketing has strengthened my soft skills in writing, creativity, and collaboration with multidisciplinary teams."}
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
