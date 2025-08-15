import styles from "./style.module.scss";

export default function ProjectMedia({ project, onClick }) {
  return (
    <>
      <div className={`${styles["projects__gallery--card-media"]} relative h-max shrink-0 sm:max-lg:basis-80`}>
        <span></span>
        <span></span>
        <div className={`${styles["img-overlay"]} p-4 w-full`}>
          <img
            src={`/assets/images/projects-image/${project.image}`}
            alt={project.name}
            className={`${styles["projects__gallery--card-media-img"]} w-full lg:max-w-full aspect-video`}
            onClick={onClick}
          />
        </div>
        <span></span>
        <span></span>
      </div>
    </>
  );
}
