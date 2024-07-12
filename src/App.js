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
  },
  {
    name: "Nationwide Connect",
    description:
      "Built quoting page using Angular 14 and Formly, facilitating 100,000+ customer signups.",
    img: "../assets/projects/nwconnect.png",
  },
];

export default function IsiahChillousWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-dark text-light">
      {/* Header */}
      <header className="fixed-top bg-dark">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container">
            <a className="navbar-brand" href="#">
              Isiah Chillous
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

      {/* Hero Section */}
      <section className="hero-section vh-100 d-flex align-items-center text-center">
        <div className="container ">
          <h1 className="display-4 fw-bold mb-4">
            Crafting Innovative Software Solutions
          </h1>
          <p className="lead mb-5">Software Engineer & Chief Product Officer</p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section py-3 py-md-5 pb-md-7">
        <div className="container ">
          <div className="card-body-container">
            <div className="container row mb-2 mb-md-5">
              <div className="row justify-content-md-center">
                <div className="col-2 col-md-10 col-xxl-7">
                  <img
                    className="img-fluid rounded shadow"
                    src="../assets/pro.jpg"
                    style={{ width: "30%" }}
                    alt="About Me"
                  />
                </div>
              </div>
            </div>

            <div className="container row overflow-hidden">
              <div className="row gy-2 gy-md-0 justify-content-xxl-center">
                <div className="col-12 order-md-1 col-md-8 col-xxl-6">
                  <div className="text-center text-md-start">
                    <h2 className="display-3 fw-bold lh-1">Isiah Chillous</h2>
                    <p className="text-secondary fs-4 mb-2">
                      Software Engineer & Chief Product Officer
                    </p>
                    <hr className="w-25 mx-auto ms-md-0 mb-4 text-secondary" />
                    <p>
                      A solutions-oriented Software Engineer with experience
                      developing and implementing performant software solutions
                      and web architecture with exceptional user experience.
                      Expert in designing, coding, testing, and debugging
                      software solutions and managing software projects from
                      conception to final product.
                    </p>
                  </div>
                </div>
                <div className="col-12 order-md-0 col-md-4 col-xxl-4">
                  <div className="text-center text-md-start me-md-3 me-xl-5">
                    <p className="mb-4">
                      <span className="d-block display-6 lh-1">7+</span>
                      <span className="fs-4 text-secondary">
                        years of experience
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="bsb-timeline-3 bg-dark py-4 py-md-5 py-xl-8 experience-section pt-md-7"
      >
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
        <div className="container">
            <div className="card-body-container">
              <h2 className="text-center mb-5">Projects</h2>
              <div className="row">
                {projects.map((project, index) => (
                  <div key={index} className="col-md-6 mb-4">
                    <div className="card h-100">
                      <div className="card-body">
                        <h3 className="card-title">{project.name}</h3>
                        <p className="card-text">{project.description}</p>
                        {project.name === "Husna Application" && (
                          <img
                            src={project.img}
                            alt="Husna Application"
                            className="img-fluid"
                          />
                        )}
                        {project.name === "Nationwide Connect" && (
                          <img
                            src={project.img}
                            alt="Nationwide Connect"
                            className="img-fluid"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section py-6 bg-dark">
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
            <Github size={40} />
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
  );
}
