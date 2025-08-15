import { useState } from "react";
import { connect, useDispatch } from "react-redux";
import useScrollSpy from "../../hooks/useScrollSpy";
import { changeTabActive } from "../../redux/action";
import styles from "./style.module.scss";

function SideNav({ activeTab, isNavOpen, toggleNav }) {
  const [sections] = useState(["home", "about", "projects", "contact"]);
  const dispath = useDispatch();
  const changeTab = (section) => {
    dispath(changeTabActive(section));
    toggleNav();
  };
  activeTab = useScrollSpy();

  return (
    <>
      <aside
        className={`side__element--right max-lg:h-screen max-lg:w-9/12 max-lg:bg-cyan-950 fixed top-0 max-lg:-left-full lg:top-2/4 lg:right-0 lg:-translate-y-2/4 transition-all z-50 ${
          isNavOpen ? styles.open : ""
        }`}
      >
        <nav
          className={`side__element--right-navigation mr-4 max-lg:h-screen max-lg:w-full flex flex-col flex-wrap justify-center content-center gap-20 lg:gap-4`}
        >
          {sections.map((section, index) => (
            <a
              key={index}
              href={`#${section}`}
              className={`${styles["side__element--right-navigation-page"]} lg:ml-auto text-xs uppercase font-medium flex items-center gap-5 ${
                activeTab === section ? styles.active : ""
              }`}
              onClick={() => changeTab(section)}
            >
              {section}
            </a>
          ))}
        </nav>
      </aside>
    </>
  );
}

const mapStateToProps = (state) => ({
  activeTab: state.activeTab,
});

export default connect(mapStateToProps, { changeTabActive })(SideNav);
