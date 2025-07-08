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
      PT: "Site para o projeto artístico idealizado por Marcelo Rodrigues. A experiência museológica combina arte, memória e narrativas pessoais. Responsável por todo o desenvolvimento — do layout à publicação — com foco em acessibilidade, performance e uma identidade visual personalizada.",
      EN: "Website for an artistic project conceived by Marcelo Rodrigues. The digital museological experience blends art, memory, and personal narratives. Fully responsible for the development — from layout to deployment — with a focus on accessibility, performance, and a distinctive visual identity."
    },
    techStack: ["Next.js", "React", "JavaScript", "CSS Modules", "Vercel"],
    role: "Full Stack",
    teamProject: false,
    repoLink: "https://github.com/caiocastelhano/museu-autobiografico",
    liveLink: "https://www.museuautobiografico.org/"
  },
  {
    image: renatalage,
    title: {
      PT:"Renata Lage Psicóloga",
      EN:"Renata Lage Psychologist"
    },
    description: {
      PT: "Site institucional multilíngue da psicóloga Renata Lage (português, inglês, espanhol e francês), com informações sobre sua trajetória e atendimentos online. Desenvolvido com foco em responsividade, performance e organização do conteúdo.",
      EN: "Multilingual institutional website for psychologist Renata Lage (Portuguese, English, Spanish, and French), featuring information about her background and online therapy services. Developed with a focus on responsiveness, performance, and well-structured content."
    },
    techStack: ["Next.js", "React", "JavaScript", "CSS Modules", "Vercel"],
    role: "Front-end",
    teamProject: false,
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
      PT: "Site pessoal criado do zero para apresentar meus projetos e trajetória profissional. Com foco em design limpo, responsividade, acessibilidade e organização do código.",
      EN: "Personal website built from scratch to showcase my projects and professional background. Designed with a focus on clean UI, responsiveness, accessibility, and well-structured code."
    },
    techStack: ["React", "JavaScript", "CSS Modules", "Vercel"],
    role: "Front-end",
    teamProject: false,
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
    techStack: ["SvelteKit", "JavaScript", "CSS", "agify.io API"],
    role: "Front-end",
    teamProject: false,
    repoLink: "https://github.com/caiocastelhano/age-estimation-sveltekit"
  },
  {
    image: giggoers,
    title: "GigGoers",
    description: {
      PT: "Aplicação web responsiva para descoberta e compartilhamento de eventos musicais em São Paulo. Desenvolvido em grupo em duas semanas durante o bootcamp da Le Wagon, com autenticação, criação e filtro de eventos por localização e data, e integração com API externa.",
      EN: "Responsive web app for discovering and sharing music events in São Paulo. Built as a group project in two weeks during the Le Wagon bootcamp, with authentication, event creation and filtering by location and date, and integration with an external API."
    },
    techStack: ["Ruby on Rails", "JavaScript", "HTML5", "SCSS", "Heroku"],
    role: "Full Stack",
    teamProject: true,
    repoLink: "https://github.com/caiocastelhano/giggoers",
    liveLink: "https://giggoers-f8d886acbf20.herokuapp.com/"
  },
  {
    image: cheftoi,
    title: "Chef Toi",
    description: {
      PT: "Marketplace online que conecta chefs a clientes, com sistema de cadastro, reservas, avaliações, busca por localização e integração de pagamento. Desenvolvido em grupo em uma semana durante o bootcamp da Le Wagon.",
      EN: "Online marketplace connecting chefs and clients, with user registration, bookings, reviews, location-based search, and payment integration. Built as a group project in one week during the Le Wagon bootcamp."
    },
    techStack: ["Ruby on Rails", "JavaScript", "HTML5", "SCSS", "Heroku", "Render"]
,
    role: "Full Stack",
    teamProject: true,
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
              techStack={project.techStack}
              teamProject={project.teamProject}
              role={project.role}
              className={isLastOdd ? "centered-card" : ""}
            />
          );
        })}
      </div>
    </section>
  );
}