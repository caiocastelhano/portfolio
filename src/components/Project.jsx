import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import ProjectCard from "./ProjectCard";
import "../styles/Project.css";
import cheftoi from "../images/cheftoi.png"
import giggoers from "../images/giggoers.png"

const projects = [
  {
    image: giggoers,
    title: "GigGoers",
    description: {
      PT: "Aplicativo para fãs de música descobrirem e compartilharem eventos em São Paulo.",
      EN: "An app for music fans to discover and share events in São Paulo."
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
  }
];

export default function Project() {
  const { language } = useContext(LanguageContext);

  return (
    <section id="projects" className="projects">
      <h2>{language === "PT" ? "Projetos" : "Projects"}</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description[language]}
            repoLink={project.repoLink}
            liveLink={project.liveLink}
          />
        ))}
      </div>
    </section>
  );
}
