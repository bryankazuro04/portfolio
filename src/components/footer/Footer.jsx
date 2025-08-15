import styles from "./style.module.scss";

export default function Footer() {
  return (
    <>
      <footer className={`${styles.footer} container lg:w-9/12 p-4`}>
        <p>Created by Bryan Kazuro</p>
        <p>&copy; 2025, All rights reserved.</p>
      </footer>
    </>
  );
}
