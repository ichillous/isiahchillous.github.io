import React, { useState } from "react";
import { Menu, X, Github, Linkedin, Mail, Phone } from "lucide-react";

const skills = [
  { name: "Java", icon: "../assets/icons/java-icon.png" },
  { name: "Angular", icon: "../assets/icons/angular-icon.png" },
  { name: "React", icon: "../assets/icons/react-icon.png" },
  { name: "TypeScript", icon: "../assets/icons/typescript-icon.png" },
  { name: "AWS", icon: "../assets/icons/aws-icon.png" },
  { name: "Node", icon: "../assets/icons/node-icon.png" },
  { name: "GitHub", icon: "../assets/icons/github-icon.png" },
  { name: "Postman", icon: "../assets/icons/postman-icon.png" },
  { name: "SQL", icon: "../assets/icons/sql-icon.png" },
  { name: "Docker", icon: "../assets/icons/docker-icon.png" },
  { name: "Kubernetes", icon: "../assets/icons/kubernetes-icon.png" },
];

const experiences = [
  {
    company: "HUSNA",
    role: "Chief Product Officer - Technical Co Founder",
    period: "2024 - Present",
    description:
      "Leading product development and strategy, collaborating with software engineers and UX designers to build the Husna application.",
  },
  {
    company: "Nationwide Insurance",
    role: "Software Engineer (Remote)",
    period: "2021 - 2024",
    description:
      "Engineered, developed, and implemented software solutions and web architecture.",
  },
  {
    company: "AWS",
    role: "Data Center Tech III",
    period: "2021",
    description:
      "Oversaw decommissioning projects for AWS server racks and hosts.",
  },
  {
    company: "",
    role: "Various IT Roles",
    period: "2018-2021",
    link: "https://www.linkedin.com/in/isiah-chillous/",
    description: "Click here to view more: ",
  },
  {
    company: "",
    role: "Freelance Filmmaker",
    period: "2015-2018",
    description:
      "Recieved bookings for wedding, community, and government events.",
  },
];

const projects = [
  {
    name: "Husna Application",
    description:
      "Developed MVP backend using Node.js, MongoDB, and AWS for a social impact app.",
    img: "../assets/projects/husna.png",
    frontImg: "../assets/projects/flip4.webp",
  },
  {
    name: "Nationwide Connect",
    description:
      "Built quoting page using Angular 14 and Formly, facilitating 100,000+ customer signups.",
    img: "../assets/projects/nwconnect.png",
    frontImg: "../assets/projects/flip1.jpg",
  },
];

const FlipCard = ({ project }) => (
  <div className="flip-card">
    <div className="flip-card-inner">
      <div className="flip-card-front">
        <img
          src={project.frontImg}
          alt={`${project.name} front`}
          className="project-image"
        />
      </div>
      <div className="flip-card-back">
        <img src={project.img} alt={project.name} className="project-image" />
        <div className="project-content">
          <h3 className="card-title">{project.name}</h3>
          <p className="card-text">{project.description}</p>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary mt-3"
            >
              View Project
            </a>
          )}
        </div>
      </div>
    </div>
  </div>
);

export default function IsiahChillousWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-dark text-light">
      {/* Header */}
      <header className="fixed-top bg-dark">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container">
            <a className="navbar-brand" href="#home">
              IC
            </a>
            <button
              className="navbar-toggler"
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
            <div
              className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
            >
              <ul className="navbar-nav ms-auto">
                {["About", "Experience", "Projects", "Skills", "Contact"].map(
                  (item) => (
                    <li className="nav-item" key={item}>
                      <a className="nav-link" href={`#${item.toLowerCase()}`}>
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {/* Home Section */}
      <section id="home" className="home-section">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
        <div className="home-container">
          <h1 id="home-title">Crafting Innovative Software Solutions</h1>
          <p id="home-subtitle">Software Engineer</p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="about-background">
          <div className="circle circle-1"></div>
          <div className="circle circle-2"></div>
          <div className="circle circle-3"></div>
          <div className="circle circle-4"></div>
          <div className="circle circle-5"></div>
        </div>
        <div className="about-container">
          <div className="card card-large">
            <h2>Isiah Chillous</h2>
            <p>Software Engineer & Chief Product Officer</p>
            <p>
              A solutions-oriented Software Engineer with experience developing
              and implementing performant software solutions and web
              architecture with exceptional user experience. 
            </p>
          </div>
          <div className="card card-image1">
            <img src="/assets/background/skyline-cmh.jpg" alt="skyline cmh" />
          </div>
          <div className="card card-image2">
            <img src="../assets/pro.jpg" alt="About Me" />
          </div>
          <div className="card card-icon">
            <div>
              <div className="icon">⚙️</div>
              <p>
                7+ years of experience in software engineering and product
                management
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="bsb-timeline-3 bg-dark py-4 py-md-5 py-xl-8 experience-section pt-md-7"
      >
        <div className="experience-background">
          <div className="circle circle-1"></div>
          <div className="circle circle-2"></div>
          <div className="circle circle-3"></div>
          <div className="circle circle-4"></div>
          <div className="circle circle-5"></div>
        </div>
        <div className="container">
          <div className="card-body-container">
            <div className="row justify-content-center">
              <div className="col-10 col-md-12 col-xl-10 col-xxl-9">
                <ul className="timeline">
                  {experiences.map((exp, index) => (
                    <li
                      key={index}
                      className={`timeline-item ${
                        index % 2 === 0 ? "left" : "right"
                      } timeline-item-custom`}
                    >
                      <div className="timeline-body">
                        <div className="timeline-content timeline-indicator">
                          <div className="card border-0 shadow">
                            <div className="card-body p-xl-4">
                              <h5 className="card-subtitle text-secondary  mb-1">
                                {exp.period}
                              </h5>
                              <h2 className="card-title mb-3">{exp.role}</h2>
                              <h2 className="card-title card-exp-company  mb-3">
                                {exp.company}
                              </h2>

                              {exp.description}
                              {exp.link && (
                                <a
                                  href={exp.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {exp.link}
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section py-5">
        <div className="projects-background">
          <div className="circle circle-1"></div>
          <div className="circle circle-2"></div>
          <div className="circle circle-3"></div>
          <div className="circle circle-4"></div>
          <div className="circle circle-5"></div>
        </div>
        <div className="container">
          <div className="card-body-container">
            <h2 className="text-center mb-5">Projects</h2>
            <div className="row">
              {projects.map((project, index) => (
                <div key={index} className="col-md-6 mb-4">
                  <FlipCard project={project} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="absFooter">
        {/* Skills Section */}
        <section id="skills" className="skills-section py-6 bg-dark">
          <div className="skills-background">
            <div className="circle circle-1"></div>
            <div className="circle circle-2"></div>
            <div className="circle circle-3"></div>
            <div className="circle circle-4"></div>
            <div className="circle circle-5"></div>
          </div>
          <div className="container">
            <div className="card-body-container">
              <h2 className="text-center mb-6">Skills</h2>
              <div className="row row-cols-3 row-cols-md-3  row-cols-lg-4 g-4 justify-content-center">
                {skills.map((skill, index) => (
                  <div key={index} className="col text-center">
                    <div id="skill-card" className="card  h-100  ">
                      <div className="card-body d-flex flex-column justify-content-center align-items-center">
                        <div className="mb-2">
                          <img
                            src={skill.icon}
                            alt={`${skill.name} icon`}
                            className="img-fluid"
                            style={{ width: "69px", height: "64px" }}
                          />
                        </div>
                        <h5 className="card-title">{skill.name}</h5>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-5">
          <div className="contact-background">
            <div className="circle circle-1"></div>
            <div className="circle circle-2"></div>
            <div className="circle circle-3"></div>
            <div className="circle circle-4"></div>
            <div className="circle circle-5"></div>
          </div>
          <div className="container">
            <h2 className="text-center mb-5">Contact Me</h2>
          </div>
          <div className="d-flex space-between justify-content-center mt-4">
            <a
              href="tel:+16145965899"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2"
            >
              <Phone size={40} />
            </a>
            <a
              href="https://github.com/ichillous/"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2"
            >
              <Github size={40}/>
            </a>
            <a
              href="https://www.linkedin.com/in/isiah-chillous/"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2"
            >
              <Linkedin size={40} />
            </a>
            <a href="mailto:isiah.chillous@gmail.com" className="mx-2">
              <Mail size={40} />
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-4 text-center">
          <div className="container">
            <p className="mb-0">
              &copy; 2024 Isiah Chillous. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
