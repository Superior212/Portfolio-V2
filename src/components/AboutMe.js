import React from "react";
import "../css/AboutMe.css";

const AboutMe = () => {
  return (
    <section data-aos="fade-up" data-aos-duration="2000" id="AboutMe">
      <div className="aboutme_heading">
        <h2>About me</h2>

        <div className="aboutme__links">
          <a
            href="https://www.linkedin.com/in/samsonaderonmu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/superior212"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>

          <button>
            <a
              href="./Samson_Aderonmu.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </button>
        </div>
      </div>

      <div className="aboutme_content">
        <div className="description">
          <p>
            Hi there! I'm <span id="me">Samson</span>, a web developer from Nigeria who takes pleasure in designing web applications that are both enjoyable and functional for users.
          </p>

          <p>
          I aspire to build products that clients can be proud of and to construct code that is organized and easy to understand.
          </p>
          <p>The following are some of the technologies I have been recently working with:</p>

          <ul className="skills">
            <li>Reactjs/Redux</li>
            <li>Javascript(ES6+)</li>
            <li>Git/GitHub</li>
            <li>Bootstrap/TailwindCSS</li>
            <li>PWA</li>
            <li>Figma</li>
            <li>Technical Writing</li>
            <li>Community Managemnet</li>
          </ul>
        </div>
        <div className="image">
          <img src="/images/samson_profile.jpg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
