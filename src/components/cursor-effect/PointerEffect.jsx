import { useEffect } from "react";
import styles from "./style.module.scss";

export default function PointerEffect() {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.classList.add(styles.cursor__glow);
    cursor.classList.add("max-lg:hidden");
    document.body.appendChild(cursor);

    let mouseX = 0,
      mouseY = 0;

    const mouseMoveHandler = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const updateCursor = () => {
      cursor.style.left = `${mouseX}px`;
      cursor.style.top = `${mouseY}px`;
      requestAnimationFrame(updateCursor);
    };

    document.addEventListener("mousemove", mouseMoveHandler);
    updateCursor();

    return () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
      document.body.removeChild(cursor);
    };
  }, []);

  useEffect(() => {
    const clickHandler = (e) => {
      const pointer = document.createElement("span");
      pointer.classList.add(styles.animation__click);
      document.body.appendChild(pointer);

      pointer.style.left = `${e.clientX}px`;
      pointer.style.top = `${e.clientY}px`;

      setTimeout(() => pointer.remove(), 500);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  }, []);

  return null;
}
