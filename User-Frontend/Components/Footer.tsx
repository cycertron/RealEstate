import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <h2>Estatly</h2>
          <p>
            A modern property search experience for buyers, renters, investors, and families looking for verified real estate.
          </p>
        </div>
        <div>
          <h3>Explore</h3>
          <Link to="/initialhome/aboutus">About</Link>
          <Link to="/initialhome/services">Services</Link>
          <Link to="/initialhome/contactus">Contact</Link>
        </div>
        <div>
          <h3>Connect</h3>
          <div className="footer-socials">
            <FaFacebookF />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
          <p className="footer-note">Kathmandu, Nepal</p>
        </div>
      </div>
      <div className="footer-bottom">© 2026 Estatly. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
