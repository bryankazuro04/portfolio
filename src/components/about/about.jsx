import React from "react";
import Skills from "../Skills/Skills";
import VerticalTimeline from "../timeline/timeline";

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
