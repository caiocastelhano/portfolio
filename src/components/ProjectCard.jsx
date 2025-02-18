import "../styles/ProjectCard.css";
import PropTypes from "prop-types";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCard({ image, title, description, repoLink, liveLink }) {
  return (
    <div className="project-card">
      <a href={liveLink} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={title} className="project-image" />
      </a>
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
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
    liveLink: PropTypes.string.isRequired,
  };
