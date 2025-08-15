import { useEffect, useState } from "react";
import ProjectCard from "../../components/project-card/ProjectCard";
import styles from "./style.module.scss";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/data/projects.json")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error(`Failed to load projects: ${err}`));
  }, []);

  return (
    <>
      <section className={`projects relative my-20`} id="projects">
        <h2 className={`${styles["projects__title"]} mb-4 pl-4 pb-2 w-max text-xl lg:text-3xl font-semibold`}>Projects</h2>

        <div className={`projects__gallery grid lg:grid-cols-2 gap-4`}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}
