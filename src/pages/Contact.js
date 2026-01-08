function Contact() {
  return (
    <div className="page-content">
      <section className="modern-contact-section">
        <div className="contact-hero">
          <div className="contact-hero-content">
            <h1>Get In Touch</h1>
            <p>Ready to plan your next adventure? We're here to help make your travel dreams come true.</p>
          </div>
        </div>

        <div className="contact-main-container">
          <div className="contact-grid">
            <div className="contact-info-section">
              <div className="contact-info-header">
                <h2>Contact Information</h2>
                <p>Reach out to our travel experts</p>
              </div>
              
              <div className="contact-methods">
                <div className="contact-method">
                  <div className="contact-icon phone-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <div className="contact-details">
                    <h3>Call Us</h3>
                    <p>0557272022</p>
                    <span>Available 24/7</span>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="contact-icon whatsapp-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382C17.135 14.382 16.848 14.095 16.848 13.758C16.848 13.421 17.135 13.134 17.472 13.134C17.809 13.134 18.096 13.421 18.096 13.758C18.096 14.095 17.809 14.382 17.472 14.382ZM13.5 14.382C13.163 14.382 12.876 14.095 12.876 13.758C12.876 13.421 13.163 13.134 13.5 13.134C13.837 13.134 14.124 13.421 14.124 13.758C14.124 14.095 13.837 14.382 13.5 14.382ZM9.528 14.382C9.191 14.382 8.904 14.095 8.904 13.758C8.904 13.421 9.191 13.134 9.528 13.134C9.865 13.134 10.152 13.421 10.152 13.758C10.152 14.095 9.865 14.382 9.528 14.382Z" fill="currentColor"/>
                      <path d="M12 2C6.486 2 2 6.486 2 12C2 13.69 2.386 15.295 3.085 16.735L2.035 21.637C1.932 22.04 2.04 22.463 2.321 22.744C2.602 23.025 3.025 23.133 3.428 23.03L8.33 21.98C9.77 22.679 11.375 23.065 13.065 23.065C18.579 23.065 23.065 18.579 23.065 13.065C23.065 7.551 18.579 3.065 13.065 3.065C12.71 3.065 12.355 3.085 12 3.13V2Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <div className="contact-details">
                    <h3>WhatsApp</h3>
                    <p>0501196100</p>
                    <span>Quick responses</span>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="contact-icon email-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <div className="contact-details">
                    <h3>Email</h3>
                    <p>holiday@unitstravel.com</p>
                    <span>We'll respond within 24hrs</span>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="contact-icon location-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22S19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9S10.62 6.5 12 6.5S14.5 7.62 14.5 9S13.38 11.5 12 11.5Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <div className="contact-details">
                    <h3>Visit Us</h3>
                    <p>M-07, Business Point Building<br/>PO Box 18811, Deira<br/>Dubai, UAE</p>
                    <span>Mon - Fri: 9AM - 6PM</span>
                  </div>
                </div>
              </div>

            </div>

            <div className="contact-form-section">
              <div className="contact-form-header">
                <h2>Send us a Message</h2>
                <p>Fill out the form below and we'll get back to you shortly</p>
              </div>

              <form className="modern-contact-form">
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

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" name="email" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="destination">Preferred Destination</label>
                  <select id="destination" name="destination">
                    <option value="">Select a destination</option>
                    <option value="dubai">Dubai</option>
                    <option value="abu-dhabi">Abu Dhabi</option>
                    <option value="turkey">Turkey</option>
                    <option value="europe">Europe</option>
                    <option value="asia">Asia</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Tell us about your travel plans</label>
                  <textarea id="message" name="message" rows="5" placeholder="Describe your ideal trip, budget, travel dates, group size, etc."></textarea>
                </div>

                <button type="submit" className="submit-button">
                  <span>Send Message</span>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.01 21L23 12L2.01 3L2 10L17 12L2 14L2.01 21Z" fill="currentColor"/>
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;