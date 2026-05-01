import { NavLink } from "react-router-dom";
import { FaArrowRight, FaHome } from "react-icons/fa";

const InitialNav = () => {
  const links = [
    { name: "Home", to: "/initialhome/herosection" },
    { name: "About", to: "aboutus" },
    { name: "Services", to: "services" },
    { name: "Contact", to: "contactus" },
  ];

  return (
    <header className="site-nav">
      <div className="nav-shell">
        <NavLink to="/initialhome/herosection" className="brand-lockup" aria-label="Estatly home">
          <span className="brand-mark">
            <FaHome />
          </span>
          <span>
            <strong>Estatly</strong>
            <small>Real estate made simple</small>
          </span>
        </NavLink>

        <nav className="nav-links" aria-label="Primary navigation">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => `nav-link ${isActive ? "nav-link-active" : ""}`}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <NavLink to="/register" className="nav-cta">
          Start <FaArrowRight />
        </NavLink>
      </div>
    </header>
  );
};

export default InitialNav;
