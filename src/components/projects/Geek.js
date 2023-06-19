import React from "react";

const Geek = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="2000"
      className="projects_display"
    >
      <div className="right-project_content">
        <h3 className="project_title">Learming Managemnet System</h3>
        <div className="right-project_description">
          <p>
            The key points of this project is to demonstrate a working knowledge
            of frontend technologies such as ReactJs and to implement a Learning
            Management System.
          </p>
          <ul className="right-project_tech">
            <li>ReactJs</li>
          </ul>
          <div className="right-project_links">
            <a
              href="https://github.com/Superior212/LMS-YA-1-FE"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://geek-lms.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-external-link-alt"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="right-project_image">
        <a
          href="https://geek-lms.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/geek.png" alt="Geek Project" />
        </a>
      </div>
    </div>
  );
};

export default Geek;
