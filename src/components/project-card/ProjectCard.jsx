import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { ImagePreview } from "../image-preview/ImagePreview";
import ProjectMedia from "./ProjectMedia";
import styles from "./style.module.scss";

export default function ProjectCard({ project }) {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <>
      <div className={`${styles["projects__gallery--card"]} mx-2 flex flex-col sm:max-lg:flex-row gap-2 `}>
        <ProjectMedia project={project} onClick={() => setShowPreview(true)} />

        <div className={`projects__gallery--card-body p-4 flex flex-col grow`}>
          <div className="flex justify-between">
            <h3 className={`projects__gallery--card-body-title mb-2 text-lg lg:text-2xl font-semibold`}>
              {project.name}
            </h3>
            {project.link && (
              <a
                href={project.link}
                className="transition-transform hover:translate-x-1 hover:-translate-y-1 hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faUpRightFromSquare} />
              </a>
            )}
          </div>
          <p
            className={`projects__gallery--card-body-desc mb-3 max-lg:text-sm`}
            dangerouslySetInnerHTML={{ __html: project.description }}
          ></p>
          <div className={`projects__gallery--card-body-tags mt-auto flex justify-self-end flex-wrap gap-1`}>
            {project.tags?.map((tag, index) => (
              <span
                key={index}
                className={`${styles["projects__gallery--card-body-tags-badge"]} rounded-md py-1 px-2 text-xs lg:text-sm`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {showPreview && <ImagePreview image={project.image} onClose={() => setShowPreview(false)} />}
      </div>
    </>
  );
}
