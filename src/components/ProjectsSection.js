import React from "react";
import "../css/Projects.css";
import Pubbles from "./projects/Pubbles";
import Todo from "./projects/Todo";


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

      <Pubbles />
      <Todo />
    </section>
  );
};

export default Projects;
