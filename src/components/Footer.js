import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">Units Travel LLC</h3>
            <p className="footer-description">
              Where Travel Meets Trust – Discover the World with Us. Premier Destination Management Company 
              operating across China, Southeast Asia, and the Middle East with over 15 years of experience.
            </p>
            <div className="social-links">
              <a href="https://www.facebook.com/unitstravelllc/" className="social-link" target="_blank" rel="noopener noreferrer">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="tel:+97142369880" className="social-link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02L6.62 10.79z"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/destinations">Destinations</Link></li>
              <li><Link to="/packages">Travel Packages</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Our Services</h3>
            <ul>
              <li><a href="#">Flight Bookings & Ticketing</a></li>
              <li><a href="#">Holiday Packages</a></li>
              <li><a href="#">Hotel Reservations</a></li>
              <li><a href="#">Corporate & MICE Travel</a></li>
              <li><a href="#">Luxury Travel Experiences</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Global Offices</h3>
            <div className="office-info">
              <div className="office">
                <h4>Dubai (Headquarters)</h4>
                <p>📞 +97142369880</p>
              </div>
              <div className="office">
                <h4>Other Locations</h4>
                <p>🇸🇦 Saudi Arabia</p>
                <p>🇨🇳 China</p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2024 Units Travel LLC. All rights reserved.</p>
            <div className="footer-links">
              <a href="#">Privacy Policy</a>
              <span>|</span>
              <a href="#">Terms of Service</a>
              <span>|</span>
              <a href="#">Travel Insurance</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;