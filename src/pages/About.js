import OrganizationChart from '../components/OrganizationChart';

function About() {
  return (
    <div className="page-content">
      <section className="page-hero">
        <div className="page-hero-content">
          <h1 className="page-title">About Units Travel LLC</h1>
          <p className="page-subtitle">Where Travel Meets Trust – Discover the World with Us</p>
        </div>
      </section>

      <section className="about-story">
        <div className="features-container">
          <div className="about-content-grid">
            <div className="about-text">
              <h2 className="features-title">About Us</h2>
              <p className="about-description">
                Units Travel LLC is a premier Destination Management Company (DMC). Units Travel L.L.C. operates 
                inbound and outbound travel services in China, Southeast Asia, and the Middle East. With our offices 
                in China, Dubai, and Iraq, and over 15 years of experience in the field, we have built a reliable 
                bespoke service for our clients to cater to their individual needs and tastes.
              </p>
              <p className="about-description">
                We specialize in providing comprehensive travel and tourism solutions tailored for leisure, 
                business, and group travelers. Our strong presence in Dubai, China, Saudi Arabia, and Iraq 
                ensures full-service travel management under one roof with professional team expertise and 
                reliable local partnerships with 24/7 support.
              </p>
            </div>
            <div className="about-image">
              <img src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Our team" />
            </div>
          </div>
        </div>
      </section>


      <section className="team-section">
        <OrganizationChart />
      </section>

      <section className="offices-section">
        <div className="features-container">
          <h2 className="features-title">Our Global Presence</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🏢</div>
              <h3 className="feature-title">Dubai Office</h3>
              <p className="feature-description">
                Our Dubai headquarters serves as the central hub for Middle East operations, 
                providing comprehensive travel services across the region.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏢</div>
              <h3 className="feature-title">Saudi Arabia Office</h3>
              <p className="feature-description">
                Strategic location serving the Kingdom of Saudi Arabia with specialized 
                knowledge of local travel requirements and cultural preferences.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏢</div>
              <h3 className="feature-title">China Office</h3>
              <p className="feature-description">
                Our China office facilitates seamless travel experiences across Asia, 
                leveraging deep local partnerships and cultural expertise.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏢</div>
              <h3 className="feature-title">Iraq Office</h3>
              <p className="feature-description">
                Dedicated office providing specialized travel services and support 
                for business and leisure travelers in the Iraqi market.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="achievements">
        <div className="features-container">
          <h2 className="features-title">Why Partner With Us</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">15+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">4</div>
              <div className="stat-label">Global Offices</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Customer Support</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100%</div>
              <div className="stat-label">Trusted Service</div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default About;