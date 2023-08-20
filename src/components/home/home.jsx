import HeaderNav from "../header/header-nav";
import SideNav from "../sidebar/sidenav";
import "./style.css";
import picture from "/assets/Alan.jpeg";
import Typewriter from "typewriter-effect";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <>
      <HeaderNav />
      <main className="container-width flex">
        <div className="flex flex-center flex-wrap-reverse flex-wrap-md">
          <section className="flex-2-md">
            <h1 className="font-size-2.5" data-aos="fade-down" data-aos-duration="350">
              Hi, I'm Muhammad Alana Fauzan
            </h1>

            <p data-aos="zoom-in" data-aos-duration="100">
              <small
                style={{
                  color: "rgb(var(--main-color))",
                  textShadow: "0 0 5px rgb(var(--main-color))",
                }}
              >
                as Bryan Kazuro
              </small>
            </p>

            <span className="font-size-2">
              <Typewriter
                options={{
                  strings: ["Web Developer", "Music Producer", "Gamer", "Freelancer", "Informatics Student"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>

            <p className="mt-1.25 text-justify" data-aos="fade-up" data-aos-duration="500" style={{ lineHeight: 1.5 }}>
              Saya seorang mahasiswa informatika dari Universitas Malikussaleh yang berfokus pada pengembangan web.
              Sebagai web developer, saya memiliki keahlian dalam merancang dan mengembangkan berbagai proyek online
              yang menarik. Selain itu, saya juga merupakan alumni dari program MSIB Kampus Merdeka X Dicoding, yang
              telah memberikan berbagai pelatihan dan pengalaman berharga dalam dunia teknologi. Saya sangat antusias
              untuk berbagi karya-karya saya dan pengalaman saya dalam portofolio ini. Selamat datang dan semoga Anda
              menikmati melihat proyek-proyek yang telah saya kerjakan!
            </p>

            <NavLink to="/contact" role="button">
              <button type="button" className="contact-button mt-1.25 mb-2" data-aos="fade-up" data-aos-duration="500">
                Contact Me
              </button>
            </NavLink>
          </section>

          <picture className="flex-1" data-aos="fade-left" data-aos-duration="500">
            <img src={picture} alt="Me" className="picture width-100" loading="eager" />
          </picture>
        </div>
      </main>
      <SideNav />
    </>
  );
}

export default Home;
