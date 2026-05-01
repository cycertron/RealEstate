import { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const contacts = [
  { Icon: FaMapMarkerAlt, title: "Visit", lines: ["Durbar Marg", "Kathmandu, Nepal"] },
  { Icon: FaPhoneAlt, title: "Call", lines: ["+977-1-4XXXXXXX", "+977-98XXXXXXXX"] },
  { Icon: FaEnvelope, title: "Email", lines: ["hello@estatly.com", "support@estatly.com"] },
];

const ContactUs = () => {
  const [sent, setSent] = useState(false);

  return (
    <main className="page-shell">
      <section className="page-hero contact-hero">
        <div>
          <p className="eyebrow">Contact</p>
          <h1>Tell us what kind of property you are looking for.</h1>
          <p>
            Send a message and our team will help you get oriented, shortlist options, or connect with the right agent.
          </p>
        </div>
      </section>

      <section className="contact-layout">
        <div className="contact-details">
          <p className="section-kicker">Reach us</p>
          <h2>Property questions deserve clear answers.</h2>
          <p>
            Whether you are buying, renting, investing, or listing your property, we can help you take the next step with less back-and-forth.
          </p>

          <div className="contact-list">
            {contacts.map(({ Icon, title, lines }) => (
              <article key={title}>
                <Icon />
                <div>
                  <h3>{title}</h3>
                  {lines.map((line) => <span key={line}>{line}</span>)}
                </div>
              </article>
            ))}
          </div>
        </div>

        <form
          className="contact-form"
          onSubmit={(event) => {
            event.preventDefault();
            setSent(true);
          }}
        >
          <label>
            Full name
            <input type="text" placeholder="Your name" />
          </label>
          <label>
            Email
            <input type="email" placeholder="you@example.com" />
          </label>
          <label>
            What are you looking for?
            <input type="text" placeholder="Apartment, house, land, rental..." />
          </label>
          <label>
            Message
            <textarea rows={5} placeholder="Tell us your location, budget, and timeline." />
          </label>
          <button className="btn-primary" type="submit">Send message</button>
          {sent && <p className="form-success">Thanks. We will get back to you soon.</p>}
        </form>
      </section>
    </main>
  );
};

export default ContactUs;
