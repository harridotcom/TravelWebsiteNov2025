import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">
          <img 
            src="/images/units-travel-logo.png" 
            alt="Units Travel LLC" 
            className="logo-image"
            onError={(e) => {
              // Fallback to text if image fails to load
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'inline';
            }}
          />
          <span className="logo-text" style={{display: 'none'}}>Units Travel</span>
        </Link>
        <ul className="nav-menu">
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/destinations" className="nav-link">Destinations</Link></li>
          <li><Link to="/packages" className="nav-link">Packages</Link></li>
          <li><Link to="/about" className="nav-link">About</Link></li>
          <li><Link to="/contact" className="nav-link">Contact</Link></li>
        </ul>
        <button className="book-btn">Book Now</button>
      </div>
    </nav>
  );
}

export default Navbar;