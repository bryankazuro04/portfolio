import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef } from "react";
import styles from "./style.module.scss";

export default function HeaderBar({ toggleNav }) {
  const headerRef = useRef(null);

  useEffect(() => {
    const header = headerRef.current;
    let lastScroll = window.scrollY;

    const scrollHandler = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll && currentScroll > 100 && window.innerWidth >= 1024) {
        header.classList.add("scrolled");
        header.style.boxShadow = "0 0 1rem #0c1c33";
      } else {
        header.classList.remove("scrolled");
        if (currentScroll < 100) header.style.boxShadow = "unset";
      }

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <>
      <header className={`${styles.header} px-4 py-4 lg:px-12 lg:h-20 fixed w-full`} ref={headerRef}>
        <div className={`container`}>
          <div className={`${styles.header__navigation} flex justify-between items-center`}>
            <h1 className={`${styles["header__navigation--brand"]} text-base lg:text-2xl uppercase tracking-[1px] font-bold`}>Bryan Kazuro</h1>

            <span className="text-slate-100 lg:hidden" onClick={toggleNav} role="button">
              <FontAwesomeIcon icon={faBars} />
            </span>
          </div>
        </div>
      </header>
    </>
  );
}
