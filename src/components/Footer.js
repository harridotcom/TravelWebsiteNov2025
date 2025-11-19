import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>UnitTravel</h3>
            <p>
              Your trusted travel companion for extraordinary adventures. We create 
              unforgettable experiences that connect you with the world's most amazing places.
            </p>
            <div className="social-links">
              <a href="https://facebook.com" className="social-link">f</a>
              <a href="https://twitter.com" className="social-link">t</a>
              <a href="https://instagram.com" className="social-link">i</a>
              <a href="https://youtube.com" className="social-link">y</a>
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
            <h3>Destinations</h3>
            <ul>
              <li><a href="/destinations/europe">Europe</a></li>
              <li><a href="/destinations/asia">Asia</a></li>
              <li><a href="/destinations/africa">Africa</a></li>
              <li><a href="/destinations/americas">Americas</a></li>
              <li><a href="/destinations/oceania">Oceania</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact Info</h3>
            <p>📍 123 Travel Street, Adventure City, AC 12345</p>
            <p>📞 +91 98765 43210</p>
            <p>✉️ info@unittravel.com</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 UnitTravel. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;