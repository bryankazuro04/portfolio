import React, { useState } from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Contact = () => {
  const [input, setInput] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setInput({
      ...input,
      [name]: value,
    });
  }
  return (
    <>
      <main className="container-width">
        <h1
          className="font-size-2.5"
          style={{ marginBlock: "3rem 4rem", textAlign: "center", color: "rgb(var(--main-color))" }}
          data-aos="fade-down"
        >
          Contact Me
        </h1>
        <div className="flex flex-wrap-reverse">
          <div
            className="flex flex-col flex-1 gap-1 contact-list"
            style={{ paddingBottom: "2rem" }}
            data-aos="fade-right"
          >
            <div className="socialMedia flex gap-1">
              <a
                href="https://github.com/bryankazuro04"
                className="socialMedia-github"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>

              <a
                href="https://linkedin.com/in/muhammad-alana-fauzan"
                className="socialMedia-linkedin"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>

              <a
                href="https://instagram.com/bryan.kazuro"
                className="socialMedia-instagram"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>

            <div className="flex flex-col gap-1">
              <div className="telp flex gap-1" style={{ alignItems: "center" }}>
                <FontAwesomeIcon icon={faPhone} />
                <span className="flex flex-col">
                  <span>Whatsapp/Telp.</span>
                  <span>+62-821-1976-0841</span>
                </span>
              </div>

              <div className="mail flex gap-1" style={{ alignItems: "center" }}>
                <FontAwesomeIcon icon={faEnvelope} />
                <span className="flex flex-col">
                  <span>E-Mail</span>
                  <span>mhdalana211201@gmail.com</span>
                </span>
              </div>
            </div>
          </div>
          <form
            action={`mailto:mhdalana211201@gmail.com?subject=${input["subject"]}&body=${input["message"]}`}
            method="POST"
            className="flex flex-center flex-col flex-2 width-100 gap-1"
            data-aos="fade-left"
          >
            <section className="inputbox mb-2">
              <input type="text" name="subject" placeholder="Subject..." onChange={handleChange} required />
              <span>
                <label htmlFor="">Subject</label>
              </span>
              <i></i>
            </section>

            <section className="inputbox">
              <textarea
                type="text"
                name="message"
                placeholder="Message..."
                rows={"5"}
                onChange={handleChange}
                required
              ></textarea>
              <span>
                <label htmlFor="">Message</label>
              </span>
              <i></i>
            </section>

            <button type="submit" className="contact-button mt-1.25 mb-2">
              Send
            </button>
          </form>
        </div>
      </main>
    </>
  );
};

export default Contact;
