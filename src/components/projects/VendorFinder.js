import React from "react";

const VendorFinder = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="2000"
      className="projects_display"
    >
      <div className="project_content">
        <h3 className="project_title">VendorFinder</h3>
        <div className="project_description">
          <p>
            VendorFinder is an innovative online platform that transforms the
            event vendor search process. The platform eliminates the need for an
            event planner by providing a centralized solution that simplifies
            vendor discovery, ensures quality and transparency, and saves users
            valuable time and effort. I played a key role in developing the
            frontend of VendorFinder, using my expertise in frontend
            technologies such as ReactJS. I focused on creating an intuitive
            user interface, optimizing the user experience, and implementing
            features like vendor search, vendor profiles, reviews, and ratings.
            Through this project, I demonstrated my ability to contribute to
            developing a cutting-edge platform that revolutionizes how people
            find and hire vendors for their events.
          </p>

          <ul className="project_tech">
            <li>ReactJs</li>
          </ul>
          <div className="project_links">
            <a
              href="https://github.com/VendorFinder/vf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://vendorfinder.co/"
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
          href="https://vendorfinder.co/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/vendorFinder.png" alt="VendorFinder Project" />
        </a>
      </div>
    </div>
  );
};

export default VendorFinder;
