import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Typewriter from "typewriter-effect";
import styles from "./style.module.scss";

export default function Hero() {
  return (
    <>
      <section
        className={`${styles.hero} grid lg:grid-cols-2 place-content-center relative h-screen overflow-visible`}
        id="home"
      >
        <div className="hero__content">
          <p className={`${styles["hero__content--title"]} mb-1 font-semibold text-xl lg:text-3xl`}>Hi 👋</p>
          <h1 className={`${styles["hero__content--subtitle"]} text-3xl lg:text-5xl`}>
            I&apos;m Muhammad Alana Fauzan
          </h1>
          <span className="text-xl">
            <small>as Bryan Kazuro</small>
          </span>
          <span className="text-xl lg:text-3xl">
            <Typewriter
              options={{
                strings: ["Web Developer", "Freelancer", "IT Student"],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
          <p className={`${styles["hero__content--desc"]} my-5 text-xs lg:text-base`}>
            Passionate about turning ideas into interactive digital experiences. With a strong foundation in frontend
            and backend development, I can craft fast, modern, and accessible websites that engage and deliver.
            Let&apos;s build something amazing together.
          </p>
          <ul className="flex text-4xl gap-5 my-4">
            <li>
              <a
                href="https://linkedin.com/in/muhammad-alana-fauzan"
                className={"hover:text-[#33f0ff]"}
                aria-label="LinkedIn link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>

            <li>
              <a
                href="https://github.com/bryankazuro04"
                className={"hover:text-[#33f0ff]"}
                aria-label="Github link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
          </ul>
          <a href={"/assets/files/CV-Muhammad_Alana_Fauzan.pdf"} className="a-btn" download role="button">
            Download CV
          </a>
        </div>

        <div className={`${styles["hero__img"]} hidden lg:block w-full -z-10 pointer-events-none`}></div>
      </section>
    </>
  );
}
