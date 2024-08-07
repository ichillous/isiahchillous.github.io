import React from 'react';
import './skills.css';

const skills = [
  { name: "Java", icon: "/assets/icons/java-icon.png" },
  { name: "Angular", icon: "/assets/icons/angular-icon.png" },
  { name: "React", icon: "/assets/icons/react-icon.png" },
  { name: "TypeScript", icon: "/assets/icons/typescript-icon.png" },
  { name: "AWS", icon: "/assets/icons/aws-icon.png" },
  { name: "Node", icon: "/assets/icons/node-icon.png" },
  { name: "GitHub", icon: "/assets/icons/github-icon.png" },
  { name: "Postman", icon: "/assets/icons/postman-icon.png" },
  { name: "SQL", icon: "/assets/icons/sql-icon.png" },
  { name: "Docker", icon: "/assets/icons/docker-icon.png" },
  { name: "Kubernetes", icon: "/assets/icons/kubernetes-icon.png" },
];

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="text-center mb-5">Skills</h2>
        <div className="row row-cols-3 row-cols-md-3 row-cols-lg-4 g-4 justify-content-center">
          {skills.map((skill, index) => (
            <div key={index} className="col text-center">
              <div className="skill-card">
                <div className="skill-icon">
                  <img
                    src={process.env.PUBLIC_URL + skill.icon}
                    alt={`${skill.name} icon`}
                    className="img-fluid"
                  />
                </div>
                <h5 className="skill-name">{skill.name}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;