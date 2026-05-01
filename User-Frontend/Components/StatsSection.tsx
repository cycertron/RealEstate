import { motion } from "framer-motion";

const stats = [
  { value: "18K+", label: "active property profiles" },
  { value: "32", label: "cities and neighborhoods" },
  { value: "4.8/5", label: "average buyer rating" },
  { value: "24h", label: "typical tour response" },
];

const StatsSection = () => (
  <section className="stats-section">
    <div className="stats-intro">
      <p className="section-kicker">Market confidence</p>
      <h2>Real options, clear signals, less guesswork.</h2>
    </div>
    <div className="stats-container">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          className="stats-item"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: index * 0.08 }}
        >
          <strong>{stat.value}</strong>
          <span>{stat.label}</span>
        </motion.div>
      ))}
    </div>
  </section>
);

export default StatsSection;
