import React, { useState } from 'react';
import './projects.css';

const projects = [
  {
    name: "Husna Application",
    description:
      "Developed MVP backend using Node.js, MongoDB, and AWS for a social impact app.",
    img: "/assets/projects/husna.png",
    frontImg: "/assets/projects/flip4.webp",
  },
  {
    name: "Nationwide Connect",
    description:
      "Built quoting page using Angular 14 and Formly, facilitating 100,000+ customer signups.",
    img: "/assets/projects/nwconnect.png",
    frontImg: "/assets/projects/flip1.jpg",
  },
];

const FlipCard = ({ project }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flip-card" onClick={handleFlip}>
      <div className={`flip-card-inner ${isFlipped ? "flipped" : ""}`}>
        <div className="flip-card-front">
          <img
            src={process.env.PUBLIC_URL + project.frontImg}
            alt={`${project.name} front`}
            className="project-image"
          />
        </div>
        <div className="flip-card-back">
          <img src={process.env.PUBLIC_URL + project.img} alt={project.name} className="project-image" />
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
      <section id="projects" className="projects-section">
        <div className="content">
          <h2 className="text-center mb-5">Projects</h2>
          <div className="row">
            {projects.map((project, index) => (
              <div key={index} className="card col-md-6 mb-4">
                <FlipCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default Projects;