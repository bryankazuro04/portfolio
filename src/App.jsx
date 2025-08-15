import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PointerEffect from "./components/cursor-effect/PointerEffect";
import Footer from "./components/footer/Footer";
import HeaderBar from "./components/header/HeaderBar";
import SideElementLeft from "./components/side-element/left";
import SideNav from "./components/sidebar-right/sidenav";
import Home from "./pages/home/home";

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  useEffect(() => {
    if (window.innerWidth < 1024) document.body.style.overflow = isNavOpen ? "hidden" : "";
  }, [isNavOpen]);

  return (
    <>
      <BrowserRouter>
        <HeaderBar toggleNav={toggleNav} />
        <SideNav isNavOpen={isNavOpen} toggleNav={toggleNav} />

        <Routes>
          <Route path="/" index element={<Home />} />
        </Routes>

        <SideElementLeft />
        <Footer />

        {isNavOpen && window.innerWidth < 1024 && <div className="fixed inset-0 bg-black/50 z-40" onClick={toggleNav} />}

        <PointerEffect />
      </BrowserRouter>
    </>
  );
}

export default App;
