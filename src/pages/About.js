function About() {
  return (
    <div className="page-content">
      <section className="page-hero">
        <div className="page-hero-content">
          <h1 className="page-title">About UnitTravel</h1>
          <p className="page-subtitle">Creating unforgettable travel experiences for adventurers around the world</p>
        </div>
      </section>

      <section className="about-story">
        <div className="features-container">
          <div className="about-content-grid">
            <div className="about-text">
              <h2 className="features-title">Our Story</h2>
              <p className="about-description">
                Founded in 2010, UnitTravel began as a small family-owned business with a simple mission: 
                to make extraordinary travel experiences accessible to everyone. What started as a local 
                tour company has grown into a global travel agency, but we've never lost sight of our 
                core values of personalized service and authentic experiences.
              </p>
              <p className="about-description">
                Over the past decade, we've helped over 50,000 travelers discover the world's most 
                amazing destinations. From solo backpackers to luxury family vacations, we believe 
                that travel has the power to transform lives and create lasting memories.
              </p>
            </div>
            <div className="about-image">
              <img src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Our team" />
            </div>
          </div>
        </div>
      </section>

      <section className="about-mission">
        <div className="features-container">
          <h2 className="features-title">Our Mission</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🌟</div>
              <h3 className="feature-title">Exceptional Experiences</h3>
              <p className="feature-description">
                We craft unique travel experiences that go beyond typical tourist attractions, 
                connecting you with local cultures and hidden gems.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🤝</div>
              <h3 className="feature-title">Personal Service</h3>
              <p className="feature-description">
                Every traveler is unique, and we provide personalized attention to ensure 
                your journey perfectly matches your dreams and preferences.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌍</div>
              <h3 className="feature-title">Sustainable Tourism</h3>
              <p className="feature-description">
                We're committed to responsible travel that benefits local communities 
                and preserves the natural beauty of our destinations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="features-container">
          <h2 className="features-title">Meet Our Team</h2>
          <div className="team-grid">
            <div className="team-card">
              <div className="team-image">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="John Smith" />
              </div>
              <div className="team-info">
                <h3 className="team-name">John Smith</h3>
                <p className="team-role">Founder & CEO</p>
                <p className="team-description">
                  A passionate traveler who has visited over 80 countries. John founded UnitTravel 
                  to share his love of exploration with the world.
                </p>
              </div>
            </div>

            <div className="team-card">
              <div className="team-image">
                <img src="https://images.unsplash.com/photo-1494790108755-2616b612b5bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Sarah Johnson" />
              </div>
              <div className="team-info">
                <h3 className="team-name">Sarah Johnson</h3>
                <p className="team-role">Head of Operations</p>
                <p className="team-description">
                  With 15 years in the travel industry, Sarah ensures every detail of your 
                  journey is perfectly planned and executed.
                </p>
              </div>
            </div>

            <div className="team-card">
              <div className="team-image">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Michael Chen" />
              </div>
              <div className="team-info">
                <h3 className="team-name">Michael Chen</h3>
                <p className="team-role">Travel Consultant</p>
                <p className="team-description">
                  Specializing in Asian destinations, Michael brings deep cultural knowledge 
                  and local connections to create authentic experiences.
                </p>
              </div>
            </div>

            <div className="team-card">
              <div className="team-image">
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Emma Rodriguez" />
              </div>
              <div className="team-info">
                <h3 className="team-name">Emma Rodriguez</h3>
                <p className="team-role">Adventure Specialist</p>
                <p className="team-description">
                  An adventure enthusiast who designs thrilling expeditions and outdoor 
                  adventures for the most daring travelers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="achievements">
        <div className="features-container">
          <h2 className="features-title">Our Achievements</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">50,000+</div>
              <div className="stat-label">Happy Travelers</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">200+</div>
              <div className="stat-label">Destinations</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">15</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">98%</div>
              <div className="stat-label">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="features-container">
          <div className="cta-content">
            <h2>Ready to Start Your Adventure?</h2>
            <p>Let our experienced team help you create the perfect travel experience tailored just for you.</p>
            <button className="cta-button">Plan Your Trip</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;