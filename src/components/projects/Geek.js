import React from "react";

const Geek = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="2000"
      className="projects_display"
    >
      <div className="right-project_content">
        <h3 className="project_title">Learning Managemnet System</h3>
        <div className="right-project_description">
          <p>
            Geek is a Learning Management System (LMS) designed as a learning
            and collaboration platform for tech organizations. It provides
            virtual training and internship programs for young adults seeking
            tech skills. As part of this project, I demonstrated my proficiency
            in frontend technologies, particularly ReactJS, by developing the
            frontend of the LMS. I implemented key features such as user
            authentication, course management, progress tracking, and a
            user-friendly interface. The platform is responsive, ensuring
            seamless accessibility across devices. Additionally, I integrated
            backend APIs for efficient data retrieval and updating. Through this
            project, I showcased my ability to design and develop a functional
            LMS using ReactJS. I successfully improved the learning experience
            and program coordination for tech organizations and students.
          </p>
          <ul className="right-project_tech">
            <li>ReactJs</li>
          </ul>
          <div className="right-project_links">
            <a
              href="https://github.com/learnable-2022/LMS-YA-1-FE"
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
