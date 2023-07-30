import { useState } from "react";
import HeaderNav from "../header/header-nav";
import SideNav from "../sidebar/sidenav";
import "./style.css";

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
      <HeaderNav />

      <main className="container-width">
        <h1 style={{ marginBlock: "3rem 4rem", textAlign: "center", color: "rgb(var(--main-color))" }}>Contact Me</h1>
        <div className="flex">
          <div className="flex flex-center flex-col flex-1">
            <div className="socialMedia">
              <div className="socialMedia-github">Github</div>
              <div className="socialMedia-linkedin">LinkedIn</div>
              <div className="socialMedia-instagram">Instagram</div>
            </div>
            <div className="telp">Telepon</div>
            <div className="mail">E-Mail</div>
          </div>
          <form
            action={`mailto:mhdalana211201@gmail.com?subject=${input["subject"]}&body=${input["message"]}`}
            method="POST"
            className="flex flex-center flex-col flex-2 width-100 gap-1"
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

      <SideNav />
    </>
  );
};

export default Contact;
