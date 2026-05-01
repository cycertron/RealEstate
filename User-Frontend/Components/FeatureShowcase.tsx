import { motion } from "framer-motion";

const FEATURES = [
  { icon: "🏠", title: "Property Listings Management",   desc: "Add, update, and manage your entire property portfolio with photos, specs, pricing, and status tracking.", span: 1 },
  { icon: "📊", title: "Real-Time Analytics",            desc: "Live dashboards showing active listings, commission earned, monthly trends, and pipeline health.", span: 1 },
  { icon: "📋", title: "Deal Pipeline CRM",              desc: "Drag-and-drop Kanban board tracks every deal from first lead to contract signing — never miss a follow-up.", span: 2 },
  { icon: "👥", title: "Client Intelligence",            desc: "Buyer, Seller, Investor, and Tenant profiles with budget ranges, preferred areas, and deal history.", span: 1 },
  { icon: "💰", title: "Commission Tracker",             desc: "Automatically calculate commissions per deal, track pending payouts, and export reports for accounting.", span: 1 },
  { icon: "📱", title: "Mobile App Exposure",            desc: "Your listings appear in the Estatly mobile app, visible to thousands of active property seekers.", span: 2 },
];

const FeatureShowcase = () => (
  <section className="features-section">
    <div className="section-label">PLATFORM FEATURES</div>
    <motion.h2 className="section-title"
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.6 }}>
      Everything You Need to Run Your Agency
    </motion.h2>
    <div className="bento-grid">
      {FEATURES.map((f, i) => (
        <motion.div key={f.title} className={`bento-card bento-span-${f.span}`}
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
          whileHover={{ scale: 1.02, rotateX: 2, rotateY: -2 }}
          style={{ transformStyle: 'preserve-3d' }}>
          <div className="bento-icon">{f.icon}</div>
          <h3 className="bento-title">{f.title}</h3>
          <p className="bento-desc">{f.desc}</p>
          <div className="bento-shimmer" />
        </motion.div>
      ))}
    </div>
  </section>
);

export default FeatureShowcase;
