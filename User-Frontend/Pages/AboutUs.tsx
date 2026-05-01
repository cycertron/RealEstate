import { FaChartLine, FaMapMarkedAlt, FaShieldAlt } from "react-icons/fa";

const pillars = [
  {
    Icon: FaShieldAlt,
    title: "Trust first",
    text: "We focus on verified listing details, clear property information, and practical buyer support.",
  },
  {
    Icon: FaMapMarkedAlt,
    title: "Local context",
    text: "Homes are easier to compare when location, access, lifestyle, and value are shown together.",
  },
  {
    Icon: FaChartLine,
    title: "Better decisions",
    text: "Estatly helps people move from browsing to shortlisting to touring with less uncertainty.",
  },
];

const AboutUs = () => {
  return (
    <main className="page-shell">
      <section className="page-hero about-hero">
        <div>
          <p className="eyebrow">About Estatly</p>
          <h1>Real estate search should feel transparent, guided, and human.</h1>
          <p>
            We built Estatly for people who want to understand their options before making one of life's biggest decisions.
          </p>
        </div>
      </section>

      <section className="story-section">
        <div className="story-copy">
          <p className="section-kicker">Our purpose</p>
          <h2>We connect serious property seekers with clearer choices.</h2>
          <p>
            Property hunting often spreads across calls, screenshots, unverified posts, and disconnected agent conversations. Estatly brings the experience into one place: verified listings, helpful context, saved searches, and easier tour requests.
          </p>
          <p>
            Whether someone is buying a family home, renting near work, or comparing investment properties, the goal is the same: less noise and more confidence.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop"
          alt="Real estate agent showing a home"
          className="story-image"
        />
      </section>

      <section className="pillar-grid">
        {pillars.map(({ Icon, title, text }) => (
          <article className="pillar-card" key={title}>
            <Icon />
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </section>
    </main>
  );
};

export default AboutUs;
