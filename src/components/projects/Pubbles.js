import React from "react";

const Pubbles = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="2000"
      className="projects_display"
    >
      <div className="project_content">
        <h3 className="project_title">Pubbles</h3>
        <div className="project_description">
          <p>
          The primary objectives of this project are to showcase proficient expertise in front-end technologies and to implement ReactJS.
          </p>

          <ul className="project_tech">
            <li>ReactJs</li>
            </ul>
          <div className="project_links">
            <a
              href="https://pubblesnft.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://pubblesnft.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-external-link-alt"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="project_image">
        <a
          href="https://pubblesnft.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/pubblesnft.png" alt="Pubbles Project" />
        </a>
      </div>
    </div>
  );
};

export default Pubbles;
