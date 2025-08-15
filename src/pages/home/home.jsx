import About from "../about-section/About";
import Contact from "../contact-section/Contact";
import Hero from "../hero-section/HeroSection";
import Projects from "../project-section/Projects";
import "./style.css";

function Home() {
  return (
    <>
      <main className="container py-0 px-4 lg:px-40 xl:px-60 relative">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default Home;
