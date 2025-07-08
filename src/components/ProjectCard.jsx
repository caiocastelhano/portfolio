import "../styles/ProjectCard.css";
import PropTypes from "prop-types";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCard({
  image,
  title,
  description,
  repoLink,
  liveLink,
  role,
  teamProject,
  techStack = [],
  className
}) {
  return (
    <div className={`project-card ${className}`}>
      <a href={liveLink} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={`Imagem do projeto ${title}`} className="project-image" />
      </a>
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
        {/* 🛠️ Tecnologias utilizadas */}
          {techStack.length > 0 && (
            <div className="tech-stack">
              {techStack.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
          )}

        {/* 📌 Detalhes do tipo de projeto */}
        <div className="project-meta">
          {role && <span>{role}</span>}
          <span>• {teamProject ? "Projeto em grupo" : "Projeto individual"}</span>
        </div>

        {/* 🔗 Links */}
        <div className="project-links">
          <a href={repoLink} target="_blank" rel="noopener noreferrer">
            <FaGithub /> GitHub
          </a>
          {liveLink && (
            <a href={liveLink} target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt /> Site
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  repoLink: PropTypes.string.isRequired,
  liveLink: PropTypes.string,
  role: PropTypes.string,
  teamProject: PropTypes.bool,
  className: PropTypes.string,
  techStack: PropTypes.arrayOf(PropTypes.string),
};
