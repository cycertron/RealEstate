import { motion } from "framer-motion";

const TESTIMONIALS = [
  { name: "Bikash Shrestha",  agency: "Kathmandu Realty Group",   rating: 5, text: "Estatly completely changed how we track deals. Our agents close 40% more transactions since we moved our pipeline here.", avatar: "BS" },
  { name: "Anita Poudel",    agency: "Highland Properties Nepal", rating: 5, text: "Adding and managing listings is so easy. Our clients can see real-time status updates and we get instant offer notifications.", avatar: "AP" },
  { name: "Rohit Agarwal",   agency: "Prime Estates KTM",        rating: 5, text: "The commission tracker alone saves us hours every month. No more spreadsheets — everything is calculated automatically.", avatar: "RA" },
  { name: "Sunita Tamang",   agency: "Valley View Real Estate",   rating: 5, text: "Client profiles with budget ranges and preferred areas help our agents match properties instantly. Conversion rate is up 35%.", avatar: "ST" },
  { name: "Dipesh Karki",    agency: "Urban Nest Properties",     rating: 4, text: "The mobile app visibility brought us 3 new international investor clients in the first month. Highly recommended!", avatar: "DK" },
  { name: "Meena Maharjan",  agency: "Golden Gate Realty",        rating: 5, text: "Estatly's analytics dashboard gives us insights we never had before. We know exactly which neighborhoods perform best.", avatar: "MM" },
];

const COLORS = [
  'linear-gradient(135deg,#2c3e50,#34495e)',
  'linear-gradient(135deg,#1a6b3a,#27ae60)',
  'linear-gradient(135deg,#1a3a6b,#2980b9)',
  'linear-gradient(135deg,#6b1a3a,#c0392b)',
  'linear-gradient(135deg,#6b4f1a,#e67e22)',
  'linear-gradient(135deg,#3b1a6b,#8e44ad)',
];

const TestimonialsSection = () => (
  <section className="testimonials-section">
    <div className="section-label">TESTIMONIALS</div>
    <motion.h2 className="section-title"
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.6 }}>
      What Agency Owners Say
    </motion.h2>
    <div className="marquee-outer">
      <div className="marquee-track">
        {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
          <div className="testimonial-card" key={i}>
            <div className="tc-header">
              <div className="tc-avatar" style={{ background: COLORS[i % COLORS.length] }}>{t.avatar}</div>
              <div>
                <div className="tc-name">{t.name}</div>
                <div className="tc-hotel">{t.agency}</div>
              </div>
            </div>
            <div className="tc-stars">{'★'.repeat(t.rating)}{'☆'.repeat(5 - t.rating)}</div>
            <p className="tc-text">"{t.text}"</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
