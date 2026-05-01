import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Anita Poudel",
    role: "First-time buyer",
    text: "I could compare apartments, save the ones I liked, and book tours without calling ten different numbers.",
  },
  {
    name: "Rohit Shrestha",
    role: "Investor",
    text: "The neighborhood details helped me understand the upside of each listing before visiting in person.",
  },
  {
    name: "Mina Tamang",
    role: "Family home seeker",
    text: "The search felt organized. We found a home near school and work faster than we expected.",
  },
];

const TestimonialsSection = () => (
  <section className="testimonials-section">
    <div className="section-kicker">Buyer stories</div>
    <motion.h2
      className="section-title"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      People use Estatly when the decision needs to feel clear.
    </motion.h2>
    <div className="testimonial-grid">
      {testimonials.map((testimonial, index) => (
        <motion.article
          key={testimonial.name}
          className="testimonial-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: index * 0.08 }}
        >
          <p>"{testimonial.text}"</p>
          <div>
            <strong>{testimonial.name}</strong>
            <span>{testimonial.role}</span>
          </div>
        </motion.article>
      ))}
    </div>
  </section>
);

export default TestimonialsSection;
