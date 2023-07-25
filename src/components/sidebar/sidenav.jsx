import "./style.css";

function SideNav() {
  return (
    <>
      <aside>
        <nav>
          <div className="nav-item">
            <span>home</span>
            <i className="fa-solid fa-house"></i>
          </div>
          <div className="nav-item">
            <span>Project</span>
            <i className="fa-solid fa-bars-progress"></i>
          </div>
          <div className="nav-item">
            <span>pendidikan</span>
            <i className="fa-solid fa-school"></i>
          </div>
          <div className="nav-item">
            <span>item4</span>
            <i className="fa-solid fa-house"></i>
          </div>
        </nav>
      </aside>
    </>
  );
}

export default SideNav;
