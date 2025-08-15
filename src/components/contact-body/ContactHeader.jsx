import styles from "./style.module.scss";

export default function ContactHeader() {
  return (
    <>
      <h2 className={`${styles.contact__title} mb-2 text-3xl font-semibold flex justify-center items-center`}>Get in Touch</h2>
      <p className={`${styles.contact__subtitle} mb-8 max-w-xl`}>
        Have a project idea or just want to say hello? Feel free to reach out using the form below.
      </p>
    </>
  );
}
