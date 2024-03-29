import React from "react";
import "../css/Projects.css";
import Geek from "./projects/Geek";
import VendorFinder from "./projects/VendorFinder";
import PukkaView from "./projects/PukkaView";

const Projects = () => {
  return (
    <section id="Projects">
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        className="projects_heading"
      >
        <h2>A few projects that I have Built</h2>
      </div>

      <Geek />
      <VendorFinder />
      <PukkaView/>
    </section>
  );
};

export default Projects;
