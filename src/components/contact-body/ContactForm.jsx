import { useState } from "react";
import styles from "./style.module.scss";

export default function ContactForm() {
  const [input, setInput] = useState("");

  const inputValueChangeHandler = (event) => {
    const { name, value } = event.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  return (
    <>
      <form
        action={`mailto:mhdalana211201@gmail.com?subject=${input["subject"]}&body=${input["message"]}`}
        method="POST"
        className={`${styles.contact__form} grid gap-4 max-w-xl mx-auto`}
      >
        <input
          type="text"
          className={`${styles["contact__form--input"]} p-3 rounded`}
          name="subject"
          onChange={inputValueChangeHandler}
          placeholder="Subject..."
          required
        />
        <textarea
          className={`${styles["contact__form--textarea"]} p-3 rounded`}
          name="message"
          onChange={inputValueChangeHandler}
          rows={5}
          placeholder="Message..."
          required
        ></textarea>
        <button type="submit" className={`${styles["contact__form--button"]} py-3 px-6 rounded`}>
          Send Message
        </button>
      </form>
    </>
  );
}
