import React from "react";
import Skills from "../../components/Skills/Skills";
import VerticalTimeline from "../../components/timeline/timeline";

const About = () => {
  return (
    <>
      <main className="container-width">
        <VerticalTimeline />
        <Skills />
      </main>
    </>
  );
};

export default About;
