import Jumbotron from "./components/jumbotron/jumbotron";
import Project from "./components/project/project";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Education from "./components/education/education";
import Contact from "./components/contact/contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Jumbotron />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
