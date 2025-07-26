import React from 'react';
import './experience.css';

const experiences = [
    {
    company: "JPMorgan Chase & Co.",
    role: "Software Engineer II (Risk)",
    period: "Nov 2024 – Present",
    description:
            "Back‑end and platform work across event‑driven services and analytics stacks with an emphasis on reliability, test depth, data security, and production readiness.",
  },
  {
    company: "HUSNA",
    role: "Software Engineer",
    period: "2024",
    description:
      "Leading product development and strategy, collaborating with software engineers and UX designers to build the Husna application. Driving product vision, conducting user research, and ensuring alignment between product roadmap and user needs.",
  },
  {
    company: "Nationwide Insurance",
    role: "Software Engineer (Remote)",
    period: "2021 – 2024",
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
    company: "Various IT Roles",
    role: "IT/Engineering",
    period: "2018 – 2021",
    link: "https://www.linkedin.com/in/isiah-chillous/",
    description: "See more on LinkedIn.",
  },
  {
    company: "Freelance Filmmaking",
    role: "Filmmaker",
    period: "2015 – 2018",
    description:
      "Booked weddings, community, and government events.",
  },
];

function Experience() {
  return (
    <section id="experience" className="experience-section" aria-labelledby="experience-title">
      <div className="experience-container">
        <h2 id="experience-title" className="section-title">Experience</h2>
        <ul className="timeline">
          {experiences.map((exp, index) => (
            <li
              key={`${exp.company}-${exp.period}-${index}`}
              className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            >
              <article className="timeline-content">
                <h3 className="card-title">{exp.role}</h3>
                <p className="meta">
                  <strong>{exp.company}</strong> • {exp.period}
                </p>
                <p>{exp.description}</p>
                {exp.link && (
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View more on LinkedIn (opens in a new tab)"
                  >
                    View more on LinkedIn ↗
                  </a>
                )}
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Experience;
