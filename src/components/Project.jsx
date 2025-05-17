import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import ProjectCard from "./ProjectCard";
import "../styles/Project.css";
import cheftoi from "../images/cheftoi.png"
import giggoers from "../images/giggoers.png"
import portfolio from "../images/portfolio.png"
import museuautobiografico from "../images/museuautobiografico.jpeg"

const projects = [
  {
    image: museuautobiografico,
    title: "Museu Autobiográfico e Território_Leste",
    description: {
      PT: "Projeto do setor cultural e experiência museológica digital, combinando arte e inovação.",
      EN: "Cultural project and digital museological experience, combining art and innovation."
    },
    repoLink: "https://github.com/caiocastelhano/museu-autobiografico",
    liveLink: "https://www.museuautobiografico.org/"
  },
  {
    image: giggoers,
    title: "GigGoers",
    description: {
      PT: "Aplicativo para fãs de música descobrirem e compartilharem shows em São Paulo.",
      EN: "An app for music fans to discover and share gigs in São Paulo."
    },
    repoLink: "https://github.com/caiocastelhano/giggoers",
    liveLink: "https://giggoers-f8d886acbf20.herokuapp.com/"
  },
  {
    image: cheftoi,
    title: "Chef Toi",
    description: {
      PT: "Marketplace que conecta clientes e chefs profissionais para experiências culinárias únicas.",
      EN: "Marketplace that connects clients and professional chefs for unique culinary experiences."
    },
    repoLink: "https://github.com/caiocastelhano/CHEF_TOI",
    liveLink: "https://cheftoi.onrender.com/"
  },
  {
    image: portfolio,
    title: {
      PT: "Portfólio Pessoal",
      EN: "Personal Portfolio"
    },
    description: {
      PT: "Meu site pessoal desenvolvido com React para apresentar meus projetos e trajetória.",
      EN: "My personal website built with React to showcase my projects and career path."
    },
    repoLink: "https://github.com/caiocastelhano/portfolio",
    liveLink: "https://www.caiocastelhano.com.br/"
  }
];

export default function Project() {
  const { language } = useContext(LanguageContext);

  return (
    <section id="projects" className="projects">
      <h2>{language === "PT" ? "Projetos" : "Projects"}</h2>
      <div className="projects-container">
        {projects.map((project, index) => {
          const isLastOdd = projects.length % 2 !== 0 && index === projects.length - 1;
          return (
            <ProjectCard
              key={index}
              image={project.image}
              title={typeof project.title === "string" ? project.title : project.title[language]}
              description={project.description[language]}
              repoLink={project.repoLink}
              liveLink={project.liveLink}
              className={isLastOdd ? "centered-card" : ""}
            />
          );
        })}
      </div>
    </section>
  );
}