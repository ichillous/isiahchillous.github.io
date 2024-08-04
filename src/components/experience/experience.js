import React from 'react';
import './experience.css';

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
      "Received bookings for wedding, community, and government events.",
  },
];

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="experience-container col-10 col-md-12 col-xl-10 col-xxl-9">
            <h2 className="section-title">Experience</h2>
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
                          <h2 className="card-title mb-3">{exp.role}</h2>
                          <h2 className="card-title card-exp-company mb-3">
                            {exp.company}
                          </h2>
                          <h5 className="card-subtitle text-secondary mb-1">
                            {exp.period}
                          </h5>
                          <p>{exp.description}</p>
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
    </section>
  );
}

export default Experience;