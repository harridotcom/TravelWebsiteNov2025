function Contact() {
  return (
    <div className="page-content">
      <section className="page-hero">
        <div className="page-hero-content">
          <h1 className="page-title">Contact Us</h1>
          <p className="page-subtitle">Get in touch with our travel experts to plan your perfect adventure</p>
        </div>
      </section>

      <section className="contact-section">
        <div className="features-container">
          <div className="contact-grid">
            <div className="contact-form-container">
              <h2 className="contact-title">Send us a Message</h2>
              <form className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" name="firstName" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" name="lastName" required />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" />
                </div>
                <div className="form-group">
                  <label htmlFor="destination">Interested Destination</label>
                  <select id="destination" name="destination">
                    <option value="">Select a destination</option>
                    <option value="europe">Europe</option>
                    <option value="asia">Asia</option>
                    <option value="africa">Africa</option>
                    <option value="americas">Americas</option>
                    <option value="oceania">Oceania</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="travelDate">Preferred Travel Date</label>
                  <input type="date" id="travelDate" name="travelDate" />
                </div>
                <div className="form-group">
                  <label htmlFor="budget">Budget Range</label>
                  <select id="budget" name="budget">
                    <option value="">Select budget range</option>
                    <option value="80000-200000">₹80,000 - ₹2,00,000</option>
                    <option value="200000-400000">₹2,00,000 - ₹4,00,000</option>
                    <option value="400000-800000">₹4,00,000 - ₹8,00,000</option>
                    <option value="800000+">₹8,00,000+</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="5" placeholder="Tell us about your dream vacation..."></textarea>
                </div>
                <button type="submit" className="contact-submit-btn">Send Message</button>
              </form>
            </div>

            <div className="contact-info-container">
              <h2 className="contact-title">Get in Touch</h2>
              <div className="contact-info-cards">
                <div className="contact-info-card">
                  <div className="contact-icon">📍</div>
                  <h3>Visit Our Office</h3>
                  <p>123 Travel Street<br/>Adventure City, AC 12345<br/>United States</p>
                </div>
                <div className="contact-info-card">
                  <div className="contact-icon">📞</div>
                  <h3>Call Us</h3>
                  <p>+91 98765 43210<br/>Mon - Fri: 9AM - 6PM EST<br/>Sat: 10AM - 4PM EST</p>
                </div>
                <div className="contact-info-card">
                  <div className="contact-icon">✉️</div>
                  <h3>Email Us</h3>
                  <p>info@unittravel.com<br/>support@unittravel.com<br/>bookings@unittravel.com</p>
                </div>
                <div className="contact-info-card">
                  <div className="contact-icon">💬</div>
                  <h3>Live Chat</h3>
                  <p>Available 24/7<br/>Instant responses<br/>Expert travel advice</p>
                </div>
              </div>

              <div className="emergency-contact">
                <h3>24/7 Emergency Support</h3>
                <p>For travelers in need of immediate assistance:</p>
                <p className="emergency-number">+91 98765 00911</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-cta">
        <div className="features-container">
          <div className="cta-content">
            <h2>Ready to Start Planning?</h2>
            <p>Our travel experts are standing by to help create your perfect vacation experience.</p>
            <div className="cta-buttons">
              <button className="cta-button">Schedule a Consultation</button>
              <button className="cta-button-outline">Request a Quote</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;