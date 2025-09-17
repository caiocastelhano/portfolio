import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import ProjectCard from "./ProjectCard";
import "../styles/Project.css";
import cheftoi from "../images/cheftoi.png"
import giggoers from "../images/giggoers.png"
import portfolio from "../images/portfolio.png"
import museuautobiografico from "../images/museuautobiografico.jpeg"
import renatalage from "../images/renatalage.png"
import fabiomontanari from "../images/fabiomontanari.webp"

const projects = [
  {
    image: museuautobiografico,
    title: "Museu Autobiográfico e Território_Leste",
    description: {
      PT: "Site para o projeto artístico idealizado por Marcelo Rodrigues. A experiência museológica combina arte, memória e narrativas pessoais. Responsável por todo o desenvolvimento - do layout à publicação.",
      EN: "Website for an artistic project conceived by Marcelo Rodrigues. The digital museological experience blends art, memory, and personal narratives. Fully responsible for the development - from layout to deployment."
    },
    techStack: ["Next.js", "React", "JavaScript", "CSS Modules", "Vercel"],
    role: {
      PT: "Full Stack/Freelancer",
      EN: "Full Stack/Freelancer"
    },
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
      PT: "Site institucional multilíngue da psicóloga Renata Lage (português, inglês, espanhol e francês), com informações sobre sua trajetória e atendimentos online.",
      EN: "Multilingual institutional website for psychologist Renata Lage (Portuguese, English, Spanish, and French), featuring information about her background and online therapy services."
    },
    techStack: ["Next.js", "React", "JavaScript", "CSS Modules", "Vercel"],
    role: {
      PT: "Front-end/Freelancer",
      EN: "Front-end/Freelancer"
    },
    teamProject: false,
    repoLink: "https://github.com/caiocastelhano/renatalagepsicologa",
    liveLink: "https://www.renatalagepsicologa.com.br/"
  },
  {
    image: fabiomontanari,
    title: {
      PT: "Fabio Montanari",
      EN: "Fabio Montanari"
    },
    description: {
      PT: "Site institucional multilíngue do roteirista e diretor Fabio Montanari, com seções dedicadas à sua trajetória profissional, trabalhos selecionados, consultoria de roteiro e atuação na indústria audiovisual.",
      EN: "Multilingual institutional website for screenwriter and director Fabio Montanari, featuring dedicated sections for his professional background, selected works, script consulting, and industry research."
    },
    techStack: ["Next.js", "React", "JavaScript", "CSS Modules", "Netlify", "Vercel"],
    role: {
      PT: "Front-end/Freelancer",
      EN: "Front-end/Freelancer"
    },
    teamProject: false,
    repoLink: "https://github.com/caiocastelhano/site-fabiomontanari",
    liveLink: "https://www.fabiomontanari.com"
  },
  {
    image: portfolio,
    title: {
      PT: "Portfólio Pessoal",
      EN: "Personal Portfolio"
    },
    description: {
      PT: "Site pessoal desenvolvido do zero para apresentar meus projetos e trajetória profissional, com design limpo, responsivo e acessível.",
      EN: "Personal website built from scratch to showcase my projects and professional background, featuring a clean, responsive, and accessible design."
    },
    techStack: ["React", "JavaScript", "CSS Modules", "Vercel"],
    role: {
      PT: "Front-end/Projeto pessoal",
      EN: "Front-end/Personal project"
    },
    teamProject: false,
    repoLink: "https://github.com/caiocastelhano/portfolio",
    liveLink: "https://www.caiocastelhano.com.br/"
  },
  {
    image: giggoers,
    title: "GigGoers",
    description: {
      PT: "Aplicação web responsiva para descoberta e compartilhamento de eventos musicais em São Paulo. Desenvolvido em grupo em duas semanas durante o bootcamp da Le Wagon, com autenticação, criação e filtro de eventos por localização e data, e integração com API externa.",
      EN: "Responsive web app for discovering and sharing music events in São Paulo. Built as a group project in two weeks during the Le Wagon bootcamp, with authentication, event creation and filtering by location and date, and integration with an external API."
    },
    techStack: ["Ruby on Rails", "JavaScript", "HTML5", "SCSS", "Heroku"],
    role: {
      PT: "Full Stack/Projeto do bootcamp",
      EN: "Full Stack/Bootcamp Project"
    },
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
    role: {
      PT: "Full Stack/Projeto do bootcamp",
      EN: "Full Stack/Bootcamp Project"
    },
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
              role={typeof project.role === "string" ? project.role : project.role[language]}
              className={isLastOdd ? "centered-card" : ""}
            />
          );
        })}
      </div>
    </section>
  );
}