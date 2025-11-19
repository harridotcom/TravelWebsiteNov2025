function Destinations() {
  return (
    <div className="page-content">
      <section className="page-hero">
        <div className="page-hero-content">
          <h1 className="page-title">Explore Destinations</h1>
          <p className="page-subtitle">Discover the world's most amazing places with our expertly curated destinations</p>
        </div>
      </section>

      <section className="destinations-section">
        <div className="features-container">
          <div className="destinations-grid">
            <div className="destination-card large">
              <div className="destination-image">
                <img src="https://images.unsplash.com/photo-1502602898536-47ad22581b52?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Europe" />
                <div className="destination-overlay">
                  <h3 className="destination-title">Europe</h3>
                  <p className="destination-subtitle">Rich history, stunning architecture, diverse cultures</p>
                  <button className="destination-btn">Explore Europe</button>
                </div>
              </div>
              <div className="destination-details">
                <h4>Popular Destinations</h4>
                <ul>
                  <li>🇫🇷 Paris, France</li>
                  <li>🇮🇹 Rome, Italy</li>
                  <li>🇪🇸 Barcelona, Spain</li>
                  <li>🇬🇧 London, UK</li>
                </ul>
              </div>
            </div>

            <div className="destination-card">
              <div className="destination-image">
                <img src="https://images.unsplash.com/photo-1552550049-db097c9480d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Asia" />
                <div className="destination-overlay">
                  <h3 className="destination-title">Asia</h3>
                  <p className="destination-subtitle">Ancient traditions meet modern marvels</p>
                  <button className="destination-btn">Explore Asia</button>
                </div>
              </div>
              <div className="destination-details">
                <h4>Must-Visit Cities</h4>
                <ul>
                  <li>🇯🇵 Tokyo, Japan</li>
                  <li>🇹🇭 Bangkok, Thailand</li>
                  <li>🇸🇬 Singapore</li>
                  <li>🇮🇩 Bali, Indonesia</li>
                </ul>
              </div>
            </div>

            <div className="destination-card">
              <div className="destination-image">
                <img src="https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Africa" />
                <div className="destination-overlay">
                  <h3 className="destination-title">Africa</h3>
                  <p className="destination-subtitle">Wildlife safaris and natural wonders</p>
                  <button className="destination-btn">Explore Africa</button>
                </div>
              </div>
              <div className="destination-details">
                <h4>Safari Adventures</h4>
                <ul>
                  <li>🇰🇪 Kenya</li>
                  <li>🇹🇿 Tanzania</li>
                  <li>🇿🇦 South Africa</li>
                  <li>🇧🇼 Botswana</li>
                </ul>
              </div>
            </div>

            <div className="destination-card">
              <div className="destination-image">
                <img src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Americas" />
                <div className="destination-overlay">
                  <h3 className="destination-title">Americas</h3>
                  <p className="destination-subtitle">From ancient ruins to modern cities</p>
                  <button className="destination-btn">Explore Americas</button>
                </div>
              </div>
              <div className="destination-details">
                <h4>Highlights</h4>
                <ul>
                  <li>🇺🇸 New York, USA</li>
                  <li>🇵🇪 Machu Picchu, Peru</li>
                  <li>🇧🇷 Rio de Janeiro, Brazil</li>
                  <li>🇦🇷 Buenos Aires, Argentina</li>
                </ul>
              </div>
            </div>

            <div className="destination-card">
              <div className="destination-image">
                <img src="https://images.unsplash.com/photo-1539650116574-75c0c6d73c6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Oceania" />
                <div className="destination-overlay">
                  <h3 className="destination-title">Oceania</h3>
                  <p className="destination-subtitle">Pristine beaches and unique wildlife</p>
                  <button className="destination-btn">Explore Oceania</button>
                </div>
              </div>
              <div className="destination-details">
                <h4>Island Paradise</h4>
                <ul>
                  <li>🇦🇺 Sydney, Australia</li>
                  <li>🇳🇿 Auckland, New Zealand</li>
                  <li>🇫🇯 Fiji</li>
                  <li>🇹🇴 Tonga</li>
                </ul>
              </div>
            </div>

            <div className="destination-card">
              <div className="destination-image">
                <img src="https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Middle East" />
                <div className="destination-overlay">
                  <h3 className="destination-title">Middle East</h3>
                  <p className="destination-subtitle">Ancient history meets luxury</p>
                  <button className="destination-btn">Explore Middle East</button>
                </div>
              </div>
              <div className="destination-details">
                <h4>Cultural Gems</h4>
                <ul>
                  <li>🇦🇪 Dubai, UAE</li>
                  <li>🇮🇱 Jerusalem, Israel</li>
                  <li>🇯🇴 Petra, Jordan</li>
                  <li>🇶🇦 Doha, Qatar</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="destination-types">
        <div className="features-container">
          <h2 className="features-title">Travel by Interest</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🏔️</div>
              <h3 className="feature-title">Adventure Travel</h3>
              <p className="feature-description">
                Hiking, trekking, mountaineering, and extreme sports in breathtaking locations 
                around the world.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏖️</div>
              <h3 className="feature-title">Beach & Relaxation</h3>
              <p className="feature-description">
                Pristine beaches, luxury resorts, spa treatments, and peaceful tropical 
                getaways for ultimate relaxation.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏛️</div>
              <h3 className="feature-title">Cultural Heritage</h3>
              <p className="feature-description">
                Explore ancient civilizations, historic sites, museums, and immerse yourself 
                in local traditions and customs.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🍷</div>
              <h3 className="feature-title">Food & Wine</h3>
              <p className="feature-description">
                Culinary tours, wine tastings, cooking classes, and gastronomic adventures 
                with world-renowned chefs.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📸</div>
              <h3 className="feature-title">Photography Tours</h3>
              <p className="feature-description">
                Capture stunning landscapes, wildlife, and cultural moments with expert 
                photography guides and workshops.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👨‍👩‍👧‍👦</div>
              <h3 className="feature-title">Family Adventures</h3>
              <p className="feature-description">
                Kid-friendly activities, educational experiences, and family bonding time 
                in safe, exciting destinations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="seasonal-destinations">
        <div className="features-container">
          <h2 className="features-title">Best Time to Visit</h2>
          <div className="seasonal-grid">
            <div className="seasonal-card">
              <h3>Spring (Mar-May)</h3>
              <p>🌸 Cherry blossoms in Japan</p>
              <p>🌷 Tulip season in Netherlands</p>
              <p>🏔️ Mild weather in Nepal</p>
            </div>
            <div className="seasonal-card">
              <h3>Summer (Jun-Aug)</h3>
              <p>☀️ Mediterranean beaches</p>
              <p>🌿 Northern Europe & Scandinavia</p>
              <p>🏔️ Alpine hiking season</p>
            </div>
            <div className="seasonal-card">
              <h3>Fall (Sep-Nov)</h3>
              <p>🍂 New England foliage</p>
              <p>🍇 Harvest season in wine regions</p>
              <p>🌤️ Perfect weather in India</p>
            </div>
            <div className="seasonal-card">
              <h3>Winter (Dec-Feb)</h3>
              <p>❄️ Winter sports in Alps</p>
              <p>🏖️ Southeast Asia dry season</p>
              <p>🎊 Festival season in South America</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Destinations;