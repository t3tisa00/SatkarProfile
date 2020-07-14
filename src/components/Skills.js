import React from "react";
import SkillsData from "../skills.json";
import SkillBar from "./SkillBar";

const Skills = () => {
  const skills = SkillsData.skills;
  return (
    <div className="div-main">
      <h1 className="header">Skills</h1>
      {skills.map(({ title, info, percentage }) => (
        <div key={title} className="div-skill">
          <h4>{title}</h4>
          <p>{info}</p>
          <ProgressBar percentage={percentage} />
        </div>
      ))}
    </div>
  );
};

const ProgressBar = (props) => {
  return (
    <div className="progressBar-main">
      <SkillBar percentage={props.percentage} />
    </div>
  );
};

export default Skills;
