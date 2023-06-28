import React from "react";
import {
  DiPython,
  DiJavascript1,
  DiReact,
  DiCss3,
  DiHtml5,
  DiDjango,
} from "react-icons/di";
import {
  SiFlutter,
  SiDart,
  SiFlask,
  SiVuedotjs,
  SiNumpy,
  SiPandas,
  SiTensorflow,
} from "react-icons/si";
import { IconContext } from "react-icons";
import { StyledSkill, StyledSkills } from "./Skills.style";
// import "./Skills.css";

// Create skill xomponwnr with icons and name

function Skill(icon, name) {
  return (
    <StyledSkill>
      {icon}
      <p>{name}</p>
    </StyledSkill>
  );
}

// Create Skills component with all skills with slide effect
function Skills() {
  const [slideIndex, setSlideIndex] = React.useState(0);
  const skillComponents = [
    { name: "Python", icon: <DiPython title="Python" /> },
    { name: "JavaScript", icon: <DiJavascript1 title="JavaScript" /> },
    { name: "React", icon: <DiReact title="React" /> },
    { name: "CSS", icon: <DiCss3 title="CSS" /> },
    { name: "HTML", icon: <DiHtml5 title="HTML" /> },
    { name: "Django", icon: <DiDjango title="Django" /> },
    { name: "Flutter", icon: <SiFlutter title="Flutter" /> },
    { name: "Dart", icon: <SiDart title="Dart" /> },
    { name: "Flask", icon: <SiFlask title="Flask" /> },
    { name: "Vue.js", icon: <SiVuedotjs title="Vue.js" /> },
    { name: "NumPy", icon: <SiNumpy title="NumPy" /> },
    { name: "Pandas", icon: <SiPandas title="Pandas" /> },
    { name: "TensorFlow", icon: <SiTensorflow title="TensorFlow" /> },
  ];

  return (
    <StyledSkills>
      <div className="skills-container">
        <IconContext.Provider
          value={{ size: "2em", style: { verticalAlign: "middle" } }}
        >
          {skillComponents.slice(slideIndex).map((skill, index) => (
            <div key={index} className="slide">
              {Skill(skill.icon, skill.name)}
            </div>
          ))}
        </IconContext.Provider>
      </div>
    </StyledSkills>
  );
}

export default Skills;
