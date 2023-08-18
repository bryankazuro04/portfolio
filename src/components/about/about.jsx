import Skills from "../Skills/Skills";
import HeaderNav from "../header/header-nav";
import SideNav from "../sidebar/sidenav";
import VerticalTimeline from "../timeline/timeline";

const About = () => {
  return (
    <>
      <HeaderNav />
      <main className="container-width">
        <VerticalTimeline />
        <Skills />
      </main>
      <SideNav />
    </>
  );
};

export default About;
