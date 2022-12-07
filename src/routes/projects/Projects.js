import React from "react";
import { Helmet } from "react-helmet";
import "./Projects.css";

function Projects() {
  return (
    <div id="projects">
      <Helmet>
        <title>Adedotun Ajibade - Projects</title>
    </Helmet>
      <div id="projects-content">
        <h1>Projects</h1>

        <p>
          This is unavailable at the moment. You can check out my github
          repositories <a href="https://github.com/Theobano">here</a>{" "}
        </p>
      </div>
    </div>
  );
}

export default Projects;
