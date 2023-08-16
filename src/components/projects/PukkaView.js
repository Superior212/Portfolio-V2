import React from "react";

const PukkaView = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="2000"
      className="projects_display"
    >
      <div className="right-project_content">
        <h3 className="project_title">Movie Streaming App</h3>
        <div className="right-project_description">
          <p>
          PukkaView is a revolutionary video streaming application dedicated to offering a platform for high-quality, godly, and inspirational content. The app aims to provide users with a refreshing alternative to conventional video entertainment platforms by focusing solely on content that aligns with positive values, faith, personal growth, and community.
          </p>
          <ul className="right-project_tech">
            <li>ReactJs</li>
          </ul>
          <div className="right-project_links">
            <a
              href="https://github.com/Pukkaview/Client"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://pukkaview.vercel.app/"
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
          href="https://pukkaview.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/PukkaView.png" alt="PukkaView Project" />
        </a>
      </div>
    </div>
  );
};

export default PukkaView;
