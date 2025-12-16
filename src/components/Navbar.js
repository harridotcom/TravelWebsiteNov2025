import { Link } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <img 
            src="/images/units-travel-logo.png" 
            alt="Units Travel LLC" 
            className="logo-image"
            onError={(e) => {
              // Fallback to text if image fails to load
              e.target.style.display = 'none';
            }}
          />
          <span className="logo-text">UNITS TRAVEL LLC</span>
        </Link>
        
        <button 
          className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle mobile menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-menu ${isMenuOpen ? 'mobile-open' : ''}`}>
          <li><Link to="/" className="nav-link" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/destinations" className="nav-link" onClick={closeMenu}>Destinations</Link></li>
          <li><Link to="/visa" className="nav-link" onClick={closeMenu}>Visa</Link></li>
          <li><Link to="/flights" className="nav-link" onClick={closeMenu}>Flights</Link></li>
          <li><Link to="/about" className="nav-link" onClick={closeMenu}>About</Link></li>
          <li><Link to="/contact" className="nav-link" onClick={closeMenu}>Contact</Link></li>
        </ul>

        {isMenuOpen && <div className="mobile-overlay" onClick={closeMenu}></div>}
      </div>
    </nav>
  );
}

export default Navbar;