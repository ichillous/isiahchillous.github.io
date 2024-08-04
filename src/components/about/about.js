import React from 'react';
import './about.css';

function About() {
  return (
    <section id="about" className="about-section">
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
          <img src={process.env.PUBLIC_URL + "/assets/background/skyline-cmh.jpg"} alt="skyline cmh" />
        </div>
        <div className="card card-image2">
          <img src={process.env.PUBLIC_URL + "/assets/pro.jpg"} alt="About Me" />
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
  );
}

export default About;