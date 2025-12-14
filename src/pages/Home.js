import HeroSlider from '../components/HeroSlider';

function Home() {
  return (
    <>
      <section id="home">
        <HeroSlider />
      </section>

      <section className="features" id="services">
        <div className="features-container">
          <h2 className="features-title">Our Professional Services</h2>
          <p className="section-subtitle">Comprehensive travel solutions tailored for leisure, business, and group travelers</p>
          <div className="services-grid">
            <div className="service-card premium">
              <div className="service-image">
                <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80" alt="Flight Bookings" />
                <div className="service-overlay">
                  <h3 className="service-title">Flight Bookings & Ticketing</h3>
                </div>
              </div>
              <div className="service-content">
                <p className="service-description">
                  Professional flight booking services with competitive rates and comprehensive 
                  ticketing solutions for all your travel needs worldwide.
                </p>
                <div className="service-features">
                  <span>✓ Global Airlines</span>
                  <span>✓ Best Prices</span>
                  <span>✓ 24/7 Support</span>
                </div>
              </div>
            </div>
            <div className="service-card premium">
              <div className="service-image">
                <img src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Holiday Packages" />
                <div className="service-overlay">
                  <h3 className="service-title">Holiday Packages</h3>
                </div>
              </div>
              <div className="service-content">
                <p className="service-description">
                  Inbound and outbound holiday packages tailored to your preferences, 
                  covering destinations across China, Southeast Asia, and the Middle East.
                </p>
                <div className="service-features">
                  <span>✓ Custom Packages</span>
                  <span>✓ Group Tours</span>
                  <span>✓ Local Expertise</span>
                </div>
              </div>
            </div>
            <div className="service-card premium">
              <div className="service-image">
                <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Hotel Reservations" />
                <div className="service-overlay">
                  <h3 className="service-title">Hotel Reservations</h3>
                </div>
              </div>
              <div className="service-content">
                <p className="service-description">
                  Hotel reservations worldwide with luxury travel options and 
                  customized experiences for every type of traveler.
                </p>
                <div className="service-features">
                  <span>✓ Luxury Hotels</span>
                  <span>✓ Budget Options</span>
                  <span>✓ Verified Partners</span>
                </div>
              </div>
            </div>
            <div className="service-card premium">
              <div className="service-image">
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" alt="Corporate Travel" />
                <div className="service-overlay">
                  <h3 className="service-title">Corporate & MICE Travel</h3>
                </div>
              </div>
              <div className="service-content">
                <p className="service-description">
                  Professional business travel management including Meetings, Incentives, 
                  Conferences, and Exhibitions with comprehensive support.
                </p>
                <div className="service-features">
                  <span>✓ Business Travel</span>
                  <span>✓ Event Management</span>
                  <span>✓ Corporate Rates</span>
                </div>
              </div>
            </div>
            <div className="service-card premium">
              <div className="service-image">
                <img src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" alt="Transportation Tours" />
                <div className="service-overlay">
                  <h3 className="service-title">Transportation & Tours</h3>
                </div>
              </div>
              <div className="service-content">
                <p className="service-description">
                  Complete transportation solutions and guided tours to enhance 
                  your travel experience with local expertise and cultural insights.
                </p>
                <div className="service-features">
                  <span>✓ Local Transport</span>
                  <span>✓ Guided Tours</span>
                  <span>✓ Cultural Experiences</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;