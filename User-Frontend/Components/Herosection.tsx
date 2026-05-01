import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

import StatsSection from "./StatsSection";
import FeatureShowcase from "./FeatureShowcase";
import TestimonialsSection from "./TestimonialsSection";

const STATS_TICKER = ["2,400+ Agencies", "18,000+ Properties", "4.8★ Rating", "32+ Cities", "24/7 Support"];

const Herosection = () => {
  const navigateto = useNavigate();

  return (
    <>
    <div className="hero-root">
      {/* Parallax BG */}
      <div className="hero-bg-wrap">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075"
          alt="Real Estate"
          className="hero-bg-img"
        />
        <div className="hero-bg-overlay" />
        <div className="orb orb1" />
        <div className="orb orb2" />
        <div className="orb orb3" />
      </div>

      {/* Content */}
      <main className="hero-content">
        <motion.div className="hero-badge"
          initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="hero-badge-dot" /> Trusted by 2,400+ real estate agencies across Nepal &amp; beyond
        </motion.div>

        <motion.h1 className="hero-headline"
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
          <Typewriter
            words={[
              "Manage Your Real Estate Agency",
              "Close More Deals, Faster",
              "Track Every Listing & Client",
              "Grow Your Property Business",
            ]}
            loop={0} cursor cursorStyle="|" typeSpeed={55} deleteSpeed={35} delaySpeed={2000}
          />
        </motion.h1>

        <motion.p className="hero-subtext"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }}>
          The all-in-one real estate CRM. List properties, manage your deal pipeline,
          track commissions, and serve clients — all from one powerful dashboard.
        </motion.p>

        <motion.div className="hero-cta-row"
          initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }}>
          <motion.button className="hero-btn-primary"
            whileHover={{ scale: 1.04, boxShadow: '0 8px 30px rgba(44,62,80,0.35)' }}
            whileTap={{ scale: 0.97 }} onClick={() => navigateto("/login")}>
            Get Started Free →
          </motion.button>
          <motion.button className="hero-btn-glass"
            whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
            onClick={() => navigateto("/register")}>
            Register Your Agency
          </motion.button>
        </motion.div>

        <motion.div className="hero-ticker"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
          {STATS_TICKER.map((s, i) => (
            <span key={i} className="ticker-item">
              <span className="ticker-dot">●</span>
              {s}
            </span>
          ))}
        </motion.div>
      </main>

      <motion.div className="hero-scroll-cue"
        animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
        ↓
      </motion.div>
    </div>

    <StatsSection />
    <FeatureShowcase />
    <TestimonialsSection />

    {/* CTA Banner */}
    <section className="cta-banner">
      <div className="cta-inner">
        <div className="cta-badge">JOIN ESTATLY TODAY</div>
        <h2 className="cta-title">Ready to Grow Your Real Estate Agency?</h2>
        <p className="cta-sub">Join thousands of agencies already using Estatly to manage their property portfolios, track deals, and reach more buyers and investors every day.</p>
        <div className="cta-btns">
          <a href="/register" className="cta-btn-primary">Start For Free →</a>
          <a href="/services" className="cta-btn-outline">View All Features</a>
        </div>
      </div>
      <div className="cta-orb cta-orb1" />
      <div className="cta-orb cta-orb2" />
    </section>
    </>
  );
};

export default Herosection;