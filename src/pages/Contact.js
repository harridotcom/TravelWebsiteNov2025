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
        <div className="contact-container">
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
      </section>

      <section className="contact-info-section">
        <div className="contact-container">
          <h2 className="contact-info-title">Get in Touch</h2>
          <div className="contact-details-grid">
            <div className="contact-detail-card">
              <div className="contact-icon">📱</div>
              <h3>WhatsApp</h3>
              <p>+971 501196100</p>
            </div>
            <div className="contact-detail-card">
              <div className="contact-icon">☎️</div>
              <h3>Phone</h3>
              <p>04 236 9880</p>
            </div>
            <div className="contact-detail-card">
              <div className="contact-icon">📧</div>
              <h3>Email</h3>
              <p>holiday@unitstravel.com</p>
            </div>
            <div className="contact-detail-card">
              <div className="contact-icon">📍</div>
              <h3>Address</h3>
              <p>M-07, Business Point Bldg<br/>PO Box 18811 Deira<br/>Dubai, UAE</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Contact;