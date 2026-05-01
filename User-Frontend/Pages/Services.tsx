import { FaBell, FaCalendarCheck, FaHome, FaMapMarkedAlt, FaRegHeart, FaUserTie } from "react-icons/fa";
import { Link } from "react-router-dom";

const services = [
  {
    Icon: FaHome,
    title: "Verified property discovery",
    text: "Browse homes, apartments, land, and rental options with clean details and realistic listing information.",
  },
  {
    Icon: FaMapMarkedAlt,
    title: "Neighborhood comparison",
    text: "Understand commute, access, schools, essentials, and location strengths before you make a shortlist.",
  },
  {
    Icon: FaRegHeart,
    title: "Saved shortlists",
    text: "Keep your favorite properties organized so you can compare options with family, partners, or agents.",
  },
  {
    Icon: FaCalendarCheck,
    title: "Tour requests",
    text: "Ask for viewings directly from the property page and keep follow-ups tied to the right listing.",
  },
  {
    Icon: FaBell,
    title: "Matching alerts",
    text: "Get notified when properties appear that fit your location, budget, and property type preferences.",
  },
  {
    Icon: FaUserTie,
    title: "Trusted agent support",
    text: "Connect with local professionals who can answer practical questions and help you move forward.",
  },
];

const Services = () => {
  return (
    <main className="page-shell">
      <section className="page-hero services-hero">
        <div>
          <p className="eyebrow">Services</p>
          <h1>Everything you need from first search to first visit.</h1>
          <p>
            Estatly gives property seekers a simpler path through discovery, comparison, shortlisting, and agent connection.
          </p>
        </div>
      </section>

      <section className="service-grid">
        {services.map(({ Icon, title, text }) => (
          <article key={title} className="service-card">
            <Icon />
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </section>

      <section className="wide-cta">
        <p className="section-kicker">Start simply</p>
        <h2>Build a shortlist you can actually trust.</h2>
        <Link to="/register" className="btn-primary">Create your account</Link>
      </section>
    </main>
  );
};

export default Services;
