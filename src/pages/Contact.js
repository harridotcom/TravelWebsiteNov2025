function Contact() {
  return (
    <div className="page-content">
      <section className="simple-contact-section">
        <div className="simple-contact-container">
          <div className="contact-header">
            <h1>Contact Us</h1>
            <p>Get in touch for your travel needs</p>
          </div>

          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <span className="icon">📱</span>
                <div>
                  <h3>WhatsApp</h3>
                  <p>+971 501196100</p>
                </div>
              </div>
              
              <div className="contact-item">
                <span className="icon">☎️</span>
                <div>
                  <h3>Phone</h3>
                  <p>04 236 9880</p>
                </div>
              </div>
              
              <div className="contact-item">
                <span className="icon">📧</span>
                <div>
                  <h3>Email</h3>
                  <p>holiday@unitstravel.com</p>
                </div>
              </div>
              
              <div className="contact-item">
                <span className="icon">📍</span>
                <div>
                  <h3>Address</h3>
                  <p>M-07, Business Point Bldg<br/>PO Box 18811 Deira<br/>Dubai, UAE</p>
                </div>
              </div>
            </div>

            <form className="simple-contact-form">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Email Address" required />
              <input type="tel" placeholder="Phone Number" />
              <textarea placeholder="Your Message" rows="6"></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;