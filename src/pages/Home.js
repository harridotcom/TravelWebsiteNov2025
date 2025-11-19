function Home() {
  return (
    <>
      <section className="hero" id="home">
        <div className="hero-content">
          <h1 className="hero-title">Discover Amazing Places</h1>
          <p className="hero-subtitle">
            Embark on unforgettable journeys to the world's most beautiful destinations. 
            Create memories that will last a lifetime with our expertly crafted travel experiences.
          </p>
          <button className="cta-button">Start Your Adventure</button>
        </div>
      </section>

      <section className="features" id="destinations">
        <div className="features-container">
          <h2 className="features-title">Why Choose UnitTravel?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🌍</div>
              <h3 className="feature-title">Global Destinations</h3>
              <p className="feature-description">
                Explore over 200+ destinations worldwide with our carefully curated travel packages 
                designed to give you the best experience in every corner of the globe.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⭐</div>
              <h3 className="feature-title">Expert Guidance</h3>
              <p className="feature-description">
                Our team of travel experts with 15+ years of experience will guide you through 
                every step of your journey, ensuring a seamless and memorable trip.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💎</div>
              <h3 className="feature-title">Luxury Experience</h3>
              <p className="feature-description">
                Enjoy premium accommodations, exclusive access to attractions, and personalized 
                services that transform your vacation into an extraordinary adventure.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;