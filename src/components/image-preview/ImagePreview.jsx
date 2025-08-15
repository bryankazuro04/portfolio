import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import styles from "./style.module.scss";

export const ImagePreview = ({ image, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => (document.body.style.overflow = "");
  }, []);

  const overlayClickToCloseHandler = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <>
      <div
        className={`${styles.image__preview} fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center`}
        onClick={overlayClickToCloseHandler}
      >
        <button type="button" className={`${styles["image__preview--close-btn"]}`} onClick={onClose}>
          <FontAwesomeIcon icon={faClose} />
        </button>
        <img src={`/assets/images/projects-image/${image}`} alt="Preview" className={styles["image__preview--img"]} />
      </div>
    </>
  );
};
