import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaArrowRight, FaCalendarCheck, FaMapMarkerAlt, FaSearch } from "react-icons/fa";

import StatsSection from "./StatsSection";
import FeatureShowcase from "./FeatureShowcase";
import TestimonialsSection from "./TestimonialsSection";

const neighborhoods = ["Kathmandu", "Lalitpur", "Bhaktapur", "Pokhara"];

const Herosection = () => {
  const navigateTo = useNavigate();

  return (
    <>
      <section className="hero-root">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070&auto=format&fit=crop"
          alt="Modern home with warm interior lighting"
          className="hero-bg-img"
        />
        <div className="hero-bg-overlay" />

        <main className="hero-content">
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <p className="eyebrow">Trusted property search across Nepal</p>
            <h1 className="hero-headline">Find a better place to live, invest, and belong.</h1>
            <p className="hero-subtext">
              Browse verified homes, compare neighborhoods, book private tours, and connect with trusted agents from one polished real-estate experience.
            </p>

            <div className="hero-actions">
              <button className="btn-primary" onClick={() => navigateTo("/register")}>
                Explore homes <FaArrowRight />
              </button>
              <button className="btn-secondary" onClick={() => navigateTo("/initialhome/services")}>
                How it works
              </button>
            </div>
          </motion.div>

          <motion.aside
            className="search-panel"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
          >
            <div className="search-title">
              <span>
                <FaSearch />
              </span>
              Quick home search
            </div>
            <div className="search-grid">
              <label>
                Location
                <span><FaMapMarkerAlt /> Kathmandu Valley</span>
              </label>
              <label>
                Budget
                <span>Rs. 80L - Rs. 2.5Cr</span>
              </label>
              <label>
                Type
                <span>House, apartment, land</span>
              </label>
              <label>
                Tour
                <span><FaCalendarCheck /> This week</span>
              </label>
            </div>
            <button className="search-submit" onClick={() => navigateTo("/register")}>
              Match me with properties
            </button>
          </motion.aside>
        </main>

        <div className="neighborhood-strip">
          {neighborhoods.map((area) => (
            <span key={area}>{area}</span>
          ))}
        </div>
      </section>

      <StatsSection />
      <FeatureShowcase />
      <TestimonialsSection />

      <section className="cta-banner">
        <div className="cta-inner">
          <p className="eyebrow">Ready when you are</p>
          <h2>Start your property search with a clearer map.</h2>
          <p>
            Create your account to save listings, request tours, and keep every conversation with your agent in one place.
          </p>
          <div className="cta-btns">
            <button className="btn-primary" onClick={() => navigateTo("/register")}>
              Create account <FaArrowRight />
            </button>
            <button className="btn-secondary" onClick={() => navigateTo("/initialhome/contactus")}>
              Talk to us
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Herosection;
