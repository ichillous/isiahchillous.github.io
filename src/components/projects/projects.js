import React, { useState } from 'react';
import './projects.css';

const projects = [
  {
    name: "Husna Application",
    description:
      "MVP backend with Node.js, MongoDB, AWS for a social impact app.",
    img: "/assets/projects/husna.png",
    frontImg: "/assets/projects/flip4.webp",
  },
  {
    name: "Nationwide Connect",
    description:
      "Quoting page with Angular 14 + Formly; facilitated 100k+ signups.",
    img: "/assets/projects/nwconnect.png",
    frontImg: "/assets/projects/flip1.jpg",
  },
];

const FlipCard = ({ project }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleFlip = () => setIsFlipped(!isFlipped);

  return (
    <div
      className="flip-card"
      onClick={handleFlip}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleFlip()}
      aria-pressed={isFlipped}
      aria-label={`Toggle details for ${project.name}`}
    >
      <div className={`flip-card-inner ${isFlipped ? "flipped" : ""}`} aria-live="polite">
        <div className="flip-card-front">
          <img
            src={process.env.PUBLIC_URL + project.frontImg}
            alt={`${project.name} preview`}
            className="project-image"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="flip-card-back">
          <img
            src={process.env.PUBLIC_URL + project.img}
            alt={`${project.name} screenshot`}
            className="project-image"
            loading="lazy"
            decoding="async"
          />
          <div className="project-content">
            <h3 className="card-title">{project.name}</h3>
            <p className="card-text">{project.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

function Projects() {
  return (
    <section id="projects" className="projects-section" aria-labelledby="projects-title">
      <div className="content">
        <h2 id="projects-title" className="text-center mb-4">Projects</h2>
        <div className="row">
          {projects.map((project, index) => (
            <div key={index} className="card col-lg-2 ">
              <FlipCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
