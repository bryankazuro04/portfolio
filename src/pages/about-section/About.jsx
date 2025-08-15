import Skills from "../../components/Skills/Skills";
import VerticalTimeline from "../../components/timeline/timeline";
import styles from "./style.module.scss";

export default function About() {
  return (
    <>
      <section className={`${styles.about} px-8 relative`} id="about">
        <h2
          className={`${styles["about__title"]} max-xl:mb-8 text-xl lg:text-3xl whitespace-nowrap font-semibold relative flex items-center`}
        >
          About Me
        </h2>
        <div className={`${styles["about__info"]} mt-10 xl:px-8 grid lg:grid-cols-2 items-center justify-items-center`}>
          <p className={`${styles["about__info--desc"]} max-lg:text-sm`}>
            Hello! I&apos;m <span className="highlight primary">Muhammad Alana Fauzan</span>, a student at Malikussaleh
            University, majoring in Informatics Engineering with great enthusiasm for web development. I have a strong
            interest in developing modern application, both on the frontend and backend using{" "}
            <span className="highlight">React.js</span>, <span className="highlight">Tailwind CSS</span>, and{" "}
            <span className="highlight">Laravel</span>. <br /> <br />
            I enjoy building attractive and responsive interfaces, as well as designing web solutions that are not only
            functional but also visually pleasing and easy to use. I&apos;m also familiar with working in a native
            approach when needed, as I understand the importance of flexibility in every projects. <br />
            <br />
            This portfolio is a reflection of my journey and learning in the world of technology. Feel free to explore
            my works and don&apos;t hesitate to get in touch if you&apos;d like to discuss or collaborate on an exicitng
            project!
            <Skills />
          </p>
          <img
            src={"./assets/images/Alan.jpeg"}
            alt="Alan"
            className={`about__info-image max-lg:mt-10 rounded-full max-lg:scale-110 max-md:w-full md:max-lg:w-1/2 lg:w-full xl:ml-40`}
          />
        </div>

        <VerticalTimeline />
      </section>
    </>
  );
}
