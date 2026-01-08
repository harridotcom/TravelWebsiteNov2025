import React, { useState } from 'react';

function Flights() {
  const [activeTab, setActiveTab] = useState('domestic');
  
  const countries = [
    { name: 'Switzerland', flag: '🇨🇭', code: 'CH', region: 'Europe', popular: true },
    { name: 'Japan', flag: '🇯🇵', code: 'JP', region: 'Asia', popular: true },
    { name: 'United Arab Emirates', flag: '🇦🇪', code: 'AE', region: 'Middle East', popular: true },
    { name: 'Georgia', flag: '🇬🇪', code: 'GE', region: 'Europe', popular: false },
    { name: 'Azerbaijan', flag: '🇦🇿', code: 'AZ', region: 'Europe', popular: false },
    { name: 'Armenia', flag: '🇦🇲', code: 'AM', region: 'Europe', popular: false },
    { name: 'Vietnam', flag: '🇻🇳', code: 'VN', region: 'Asia', popular: true },
    { name: 'Indonesia (Bali)', flag: '🇮🇩', code: 'ID', region: 'Asia', popular: true },
    { name: 'Oman', flag: '🇴🇲', code: 'OM', region: 'Middle East', popular: false },
    { name: 'China', flag: '🇨🇳', code: 'CN', region: 'Asia', popular: true },
    { name: 'Saudi Arabia', flag: '🇸🇦', code: 'SA', region: 'Middle East', popular: false },
    { name: 'France', flag: '🇫🇷', code: 'FR', region: 'Europe', popular: true },
    { name: 'Thailand', flag: '🇹🇭', code: 'TH', region: 'Asia', popular: true },
    { name: 'Maldives', flag: '🇲🇻', code: 'MV', region: 'Asia', popular: true },
    { name: 'Egypt', flag: '🇪🇬', code: 'EG', region: 'Africa', popular: true },
    { name: 'South Africa', flag: '🇿🇦', code: 'ZA', region: 'Africa', popular: true }
  ];

  const popularDestinations = countries.filter(country => country.popular);

  const stats = [
    { number: '50+', label: 'Airlines Partners', icon: 'Airlines' },
    { number: '16', label: 'Countries', icon: 'Countries' },
    { number: '24/7', label: 'Support', icon: 'Support' },
    { number: '99%', label: 'Success Rate', icon: 'Success' }
  ];

  return (
    <div className="page-content">
      <section className="flights-hero">
        <div className="hero-background">
          <div className="floating-elements">
            <div className="floating-plane">✈️</div>
            <div className="floating-cloud">☁️</div>
            <div className="floating-cloud">☁️</div>
          </div>
        </div>
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-text">🏆 Best Flight Booking Service</span>
          </div>
          <h1 className="hero-title">
            Your Gateway to the
            <span className="highlight-text"> World</span>
          </h1>
          <p className="hero-subtitle">
            Experience seamless flight booking with Units Travel LLC. 
            We connect you to amazing destinations with unbeatable prices and 24/7 support.
          </p>
          
          <div className="hero-stats">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <span className="stat-icon">{stat.icon}</span>
                <div className="stat-content">
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="hero-buttons">
            <a href="#destinations" className="btn-primary">
              <span>Explore Destinations</span>
              <span className="btn-icon">🌟</span>
            </a>
            <a href="/contact" className="btn-secondary">
              <span>Get Quote</span>
              <span className="btn-icon">💬</span>
            </a>
          </div>
        </div>
      </section>

      <section className="premium-services">
        <div className="features-container">
          <div className="section-header">
            <div className="section-badge">
              <span>⭐ Premium Services</span>
            </div>
            <h2 className="section-title">Why Choose Units Travel LLC</h2>
            <p className="section-description">
              Experience the difference with our world-class flight booking services
            </p>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon-wrapper">
                <div className="service-icon">💎</div>
              </div>
              <h3>Best Price Guarantee</h3>
              <p>We compare hundreds of airlines and guarantee the best prices. Find a lower price? We'll match it!</p>
              <div className="service-features">
                <span className="feature-tag">Price Match</span>
                <span className="feature-tag">No Hidden Fees</span>
              </div>
            </div>

            <div className="service-card">
              <div className="service-icon-wrapper">
                <div className="service-icon">🎧</div>
              </div>
              <h3>24/7 Expert Support</h3>
              <p>Our travel experts are available round-the-clock to assist with your bookings and travel needs</p>
              <div className="service-features">
                <span className="feature-tag">Live Chat</span>
                <span className="feature-tag">Phone Support</span>
              </div>
            </div>

            <div className="service-card">
              <div className="service-icon-wrapper">
                <div className="service-icon">⚡</div>
              </div>
              <h3>Instant Confirmation</h3>
              <p>Get immediate booking confirmation and e-tickets delivered to your email within minutes</p>
              <div className="service-features">
                <span className="feature-tag">E-Tickets</span>
                <span className="feature-tag">Mobile Ready</span>
              </div>
            </div>

            <div className="service-card">
              <div className="service-icon-wrapper">
                <div className="service-icon">🔒</div>
              </div>
              <h3>Secure & Trusted</h3>
              <p>Your personal and payment information is protected with bank-level security encryption</p>
              <div className="service-features">
                <span className="feature-tag">SSL Protected</span>
                <span className="feature-tag">PCI Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="destinations" className="destinations-showcase">
        <div className="features-container">
          <div className="section-header">
            <h2 className="section-title">Popular Destinations</h2>
            <p className="section-description">
              Discover our most sought-after flight destinations
            </p>
          </div>

          <div className="destinations-grid">
            {popularDestinations.map((country, index) => (
              <div key={index} className="destination-card">
                <div className="destination-flag">{country.flag}</div>
                <div className="destination-info">
                  <h3 className="destination-name">{country.name}</h3>
                  <p className="destination-region">{country.region}</p>
                  <div className="destination-status">
                    <span className="status-dot"></span>
                    <span>Available Now</span>
                  </div>
                </div>
                <div className="destination-action">
                  <a href="/contact" className="book-btn">
                    <span>Book Flight</span>
                    <span className="btn-arrow">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="view-all-destinations">
            <button className="view-all-btn">
              <span>View All 16 Destinations</span>
              <span className="btn-icon">🌍</span>
            </button>
          </div>
        </div>
      </section>

      <section className="booking-process">
        <div className="features-container">
          <div className="process-content">
            <div className="process-info">
              <div className="section-badge">
                <span>📋 Simple Process</span>
              </div>
              <h2 className="section-title">How It Works</h2>
              <p className="section-description">
                Book your perfect flight in just 4 easy steps
              </p>

              <div className="process-steps">
                <div className="process-step">
                  <div className="step-number">01</div>
                  <div className="step-content">
                    <h3>Contact Our Experts</h3>
                    <p>Reach out via phone, email, or chat to start your booking</p>
                  </div>
                </div>

                <div className="process-step">
                  <div className="step-number">02</div>
                  <div className="step-content">
                    <h3>Share Your Preferences</h3>
                    <p>Tell us your dates, destination, and travel requirements</p>
                  </div>
                </div>

                <div className="process-step">
                  <div className="step-number">03</div>
                  <div className="step-content">
                    <h3>Compare & Choose</h3>
                    <p>Review personalized flight options and select your preferred choice</p>
                  </div>
                </div>

                <div className="process-step">
                  <div className="step-number">04</div>
                  <div className="step-content">
                    <h3>Secure Booking</h3>
                    <p>Complete payment and receive instant confirmation</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="process-visual">
              <div className="visual-element">
                <div className="plane-animation">
                  <span className="animated-plane">✈️</span>
                  <div className="flight-path"></div>
                </div>
                <div className="destination-icons">
                  <div className="destination-icon">🏔️</div>
                  <div className="destination-icon">🏖️</div>
                  <div className="destination-icon">🏙️</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Flights;