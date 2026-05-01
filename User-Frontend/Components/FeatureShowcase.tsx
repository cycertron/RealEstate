import { motion } from "framer-motion";
import { FaBell, FaCamera, FaHandshake, FaMapMarkedAlt, FaShieldAlt, FaSlidersH } from "react-icons/fa";

const features = [
  {
    Icon: FaShieldAlt,
    title: "Verified listings",
    desc: "Every property profile is reviewed for clear photos, current pricing, and essential ownership details.",
  },
  {
    Icon: FaMapMarkedAlt,
    title: "Neighborhood clarity",
    desc: "Compare locations by commute, nearby essentials, lifestyle, and long-term value before you book a tour.",
  },
  {
    Icon: FaCamera,
    title: "Rich property media",
    desc: "Explore photo galleries, floor details, amenities, and practical notes without digging through scattered messages.",
  },
  {
    Icon: FaSlidersH,
    title: "Smarter filters",
    desc: "Search by budget, room count, property type, city, and purpose so you only see homes that fit.",
  },
  {
    Icon: FaBell,
    title: "Saved alerts",
    desc: "Keep track of promising properties and get notified when matching homes or price updates appear.",
  },
  {
    Icon: FaHandshake,
    title: "Agent connection",
    desc: "Move from discovery to viewing with trusted local agents who understand your shortlist.",
  },
];

const FeatureShowcase = () => (
  <section className="features-section">
    <div className="section-kicker">Why Estatly</div>
    <motion.h2
      className="section-title"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55 }}
    >
      A calmer way to choose your next property.
    </motion.h2>
    <div className="feature-grid">
      {features.map(({ Icon, title, desc }, index) => (
        <motion.article
          key={title}
          className="feature-card"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: index * 0.06 }}
        >
          <span className="feature-icon">
            <Icon />
          </span>
          <h3>{title}</h3>
          <p>{desc}</p>
        </motion.article>
      ))}
    </div>
  </section>
);

export default FeatureShowcase;
