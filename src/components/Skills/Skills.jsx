import {
  faBootstrap,
  faCss3Alt,
  faHtml5,
  faJsSquare,
  faLaravel,
  faNodeJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

const Skills = () => {
  const [listSkills] = useState([
    {
      name: "HTML",
      icon: faHtml5,
    },
    {
      name: "CSS",
      icon: faCss3Alt,
    },
    {
      name: "Javascript (ES6+)",
      icon: faJsSquare,
    },
    {
      name: "Bootstrap",
      icon: faBootstrap,
    },
    {
      name: "Laravel",
      icon: faLaravel,
    },
    {
      name: "React.js",
      icon: faReact,
    },
    {
      name: "Node.js",
      icon: faNodeJs,
    },
  ]);
  return (
    <>
      <div className="pt-4 lg:py-10 gap-3 text-sm grid grid-cols-2">
        {listSkills.map((skill, index) => (
          <span key={index} className="before:content-['⋗'] before:mr-2">
            {skill.name}
          </span>
        ))}
      </div>
    </>
  );
};

export default Skills;
