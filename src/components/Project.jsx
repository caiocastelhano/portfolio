import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import ProjectCard from "./ProjectCard";
import "../styles/Project.css";
import cheftoi from "../images/cheftoi.png"
import giggoers from "../images/giggoers.png"
import portfolio from "../images/portfolio.png"
import museuautobiografico from "../images/museuautobiografico.jpeg"
import renatalage from "../images/renatalage.png"
import frontendtest from "../images/frontend-test.jpg"

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
    image: renatalage,
    title: "Renata Lage Psicóloga",
    description: {
      PT: "Site institucional da psicóloga Renata Lage, com informações sobre sua trajetória e atendimentos online.",
      EN: "Institutional website for psychologist Renata Lage, featuring her professional background and online therapy services."
    },
    repoLink: "https://github.com/caiocastelhano/renatalagepsicologa",
    liveLink: "https://www.renatalagepsicologa.com.br/"
  },
  {
    image: portfolio,
    title: {
      PT: "Portfólio Pessoal",
      EN: "Personal Portfolio"
    },
    description: {
      PT: "Meu site pessoal desenvolvido com React para apresentar projetos e trajetória.",
      EN: "My personal website built with React to showcase projects and career path."
    },
    repoLink: "https://github.com/caiocastelhano/portfolio",
    liveLink: "https://www.caiocastelhano.com.br/"
  },
  {
    image: frontendtest,
    title: {
      PT: "Previsão de Idade por Nome",
      EN: "Age Prediction by Name"
    },
    description: {
      PT: "Aplicação desenvolvida com SvelteKit como parte de um desafio técnico. Estima a idade de uma pessoa com base no nome digitado, utilizando a API pública agify.io.",
      EN: "App developed with SvelteKit as part of a technical challenge. Predicts a person's age based on their name using the public agify.io API."
    },
    repoLink: "https://github.com/caiocastelhano/age-estimation-sveltekit"
  },
  {
    image: giggoers,
    title: "GigGoers",
    description: {
      PT: "Aplicativo para fãs de música descobrirem e compartilharem shows em São Paulo. Desenvolvido durante o bootcamp da Le Wagon.",
      EN: "An app for music fans to discover and share gigs in São Paulo. Developed during the Le Wagon bootcamp."
    },
    repoLink: "https://github.com/caiocastelhano/giggoers",
    liveLink: "https://giggoers-f8d886acbf20.herokuapp.com/"
  },
  {
    image: cheftoi,
    title: "Chef Toi",
    description: {
      PT: "Marketplace que conecta clientes e chefs profissionais para experiências culinárias únicas. Desenvolvido durante o bootcamp da Le Wagon.",
      EN: "Marketplace that connects clients and professional chefs for unique culinary experiences. Developed during the Le Wagon bootcamp."
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