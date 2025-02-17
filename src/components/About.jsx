import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import "../styles/About.css";
import profile from "../images/profile.jpg";

export default function About() {
  const { language } = useContext(LanguageContext);

  return (
    <section className="about">
      <div className="about-container">
        <img src={profile} alt="Profile" className="about-image" />
        <div className="about-text">
          <h2>
            {language === "PT"
              ? "Desenvolvedor Full-Stack"
              : "Full-Stack Developer"}
          </h2>
          <p>
            {language === "PT"
              ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
          </p>
        </div>
      </div>
    </section>
  );
}
