import React from "react";
import ProjectsData from "../projects.json";
import madiAgroFarm from "../images/madiagrofarm.png";
import MaulaKalika from "../images/maulakalika.png";
import Siivous from "../images/siivous.png";

const Projects = () => {
  const projects = ProjectsData.projects;
  return (
    <div>
      <h2 className="header">Projects</h2>
      {projects.map(({ title, description, technical, link }) => (
        <div className="project-main" key={title}>
          <h3>{title}</h3>
          <p>{description}</p>

          <div>
            {(() => {
              switch (title) {
                case "SivousSiisti":
                  return <img className="project-image" src={Siivous} />;

                case "Madi Agro Farm":
                  return <img className="project-image" src={madiAgroFarm} />;

                case "MaulaKalika Hospital":
                  return <img className="project-image" src={MaulaKalika} />;

                default:
                  return "dddd";
              }
            })()}
          </div>

          <a className="website-link" href={link}>
            View Website
          </a>
        </div>
      ))}
    </div>
  );
};
export default Projects;
