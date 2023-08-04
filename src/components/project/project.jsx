import HeaderNav from "../header/header-nav";
import SideNav from "../sidebar/sidenav";
import "./style.css";
import alres from "/assets/projects-image/Alres.png";
import blog from "/assets/projects-image/Bryan-Kazuro-Blog.png";
import bookshelf from "/assets/projects-image/Bryan-Kazuro-s-Bookshelf.png";
import aratekHome from "/assets/projects-image/Home-Aratek.png";
import aratekDashboard from "/assets/projects-image/Dashboard-Aratek.png";
import dji from "/assets/projects-image/Duta-Jaringan-Indonesia.png";
import djiRemake from "/assets/projects-image/Duta-Jaringan-Clone.png";
import simasti from "/assets/projects-image/Home-Simasti.png";
import barcamp from "/assets/projects-image/Kazuro-Barcamp.png";
import portalRemake from "/assets/projects-image/Portal-Unimal-Clone.png";
import { useState } from "react";

function Project() {
  const [active, setActive] = useState("");

  const cardClick = (event) => {
    setActive((click) => ({
      ...click,
      [event]: !click[event],
    }));
  };

  return (
    <>
      <HeaderNav />
      <main className="container-width">
        <section className="flex flex-wrap gap-1 pb-2">
          <div className="flip-card flex-50" data-aos="zoom-in" onClick={() => cardClick(1)}>
            <figure className="flip-card-inner">
              <img src={alres} alt="Alres Project" className="flip-card-front" />
              <figcaption className={`flip-card-back ${active[1] ? "show" : ""}`}>
                Submission Project kelas Menjadi Front-End Web Developer Expert Dicoding
                <p>Teknologi: HTML, CSS, Javascript, Node.js, Webpack</p>
                <a href="https://alres.vercel.app" target="_blank">
                  Alres
                </a>
              </figcaption>
            </figure>
          </div>

          <div className="flip-card flex-50" data-aos="zoom-in" onClick={() => cardClick(2)}>
            <figure className="flip-card-inner">
              <img src={blog} alt="Blog Project" className="flip-card-front" />
              <figcaption className={`flip-card-back ${active[2] ? "show" : ""}`}>
                Submission Project kelas Belajar Dasar Pemrograman Web Dicoding
                <p>Teknologi: HTML, CSS, Javascript</p>
                <a href="https://blog-bryankazuro.vercel.app" target="_blank">
                  Blog
                </a>
              </figcaption>
            </figure>
          </div>

          <div className="flip-card flex-50" data-aos="zoom-in" onClick={() => cardClick(3)}>
            <figure className="flip-card-inner">
              <img src={bookshelf} alt="Bookshelf Project" className="flip-card-front" />
              <figcaption className={`flip-card-back ${active[3] ? "show" : ""}`}>
                Submission Project kelas Belajar Membuat Front-End Web untuk Pemula Dicoding
                <p>Teknologi: HTML, CSS, Javascript</p>
                <a href="https://bookshelf-blond.vercel.app" target="_blank">
                  Bookshelf
                </a>
              </figcaption>
            </figure>
          </div>

          <div className="flip-card flex-50" data-aos="zoom-in" onClick={() => cardClick(4)}>
            <figure className="flip-card-inner">
              <img src={aratekHome} alt="Aratek Project Homepage" className="flip-card-front" />
              <figcaption className={`flip-card-back ${active[4] ? "show" : ""}`}>
                Website Aratek Homepage
                <p>Teknologi: Laravel 9, Bootstrap 5.3.0 Beta, JQuery, DataTables</p>
              </figcaption>
            </figure>
          </div>

          <div className="flip-card flex-50" data-aos="zoom-in" onClick={() => cardClick(5)}>
            <figure className="flip-card-inner">
              <img src={aratekDashboard} alt="Aratek Project Dashboard" className="flip-card-front" />
              <figcaption className={`flip-card-back ${active[5] ? "show" : ""}`}>
                Website Aratek Dashboard
                <p>Teknologi: Laravel 9, Bootstrap 5.3.0 Beta, JQuery, DataTables</p>
              </figcaption>
            </figure>
          </div>

          <div className="flip-card flex-50" data-aos="zoom-in" onClick={() => cardClick(6)}>
            <figure className="flip-card-inner">
              <img src={dji} alt="Duta Jaringan Indonesia Project" className="flip-card-front" />
              <figcaption className={`flip-card-back ${active[6] ? "show" : ""}`}>
                Website Duta Jaringan Indonesia
                <p>Teknologi: CodeIgniter4, PHP, Bootstrap 5.2</p>
              </figcaption>
            </figure>
          </div>

          <div className="flip-card flex-50" data-aos="zoom-in" onClick={() => cardClick(7)}>
            <figure className="flip-card-inner">
              <img src={djiRemake} alt="Duta Jaringan Indonesia Remake" className="flip-card-front" />
              <figcaption className={`flip-card-back ${active[7] ? "show" : ""}`}>
                Remake Website Duta Jaringan Indonesia Homepage
                <p>Teknologi: HTML, CSS/SASS</p>
              </figcaption>
            </figure>
          </div>

          <div className="flip-card flex-50" data-aos="zoom-in" onClick={() => cardClick(8)}>
            <figure className="flip-card-inner">
              <img src={simasti} alt="Simasti Project" className="flip-card-front" />
              <figcaption className={`flip-card-back ${active[8] ? "show" : ""}`}>
                Simasti Project
                <p>Teknologi: CodeIgniter4, PHP, Bootstrap 5.2</p>
              </figcaption>
            </figure>
          </div>

          <div className="flip-card flex-50" data-aos="zoom-in" onClick={() => cardClick(9)}>
            <figure className="flip-card-inner">
              <img src={barcamp} alt="Barcamp Project" className="flip-card-front" />
              <figcaption className={`flip-card-back ${active[9] ? "show" : ""}`}>
                Submission project kelas Belajar Fundamental Front-End Web Development Dicoding
                <p>Teknologi: HTML, CSS, Javascript, Node.js, Webpack, API</p>
                <a href="https://barcamp.vercel.app" target="_blank">
                  Barcamp
                </a>
              </figcaption>
            </figure>
          </div>

          <div className="flip-card flex-50" data-aos="zoom-in" onClick={() => cardClick(10)}>
            <figure className="flip-card-inner">
              <img src={portalRemake} alt="Portal Akademik Unimal Remake" className="flip-card-front" />
              <figcaption className={`flip-card-back ${active[10] ? "show" : ""}`}>
                Remake Portal Akademik Unimal
                <p>Teknologi: HTML, Bootstrap 5.3, Javascript</p>
              </figcaption>
            </figure>
          </div>
        </section>
      </main>
      <SideNav />
    </>
  );
}

export default Project;
