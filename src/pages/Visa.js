function Visa() {
  const visaCategories = [
    {
      title: "Tourist Visa",
      description: "For leisure travel and sightseeing",
      countries: "150+ Countries",
      processing: "3-15 business days",
      features: ["Multiple entry options", "Duration up to 6 months", "Tourism purposes", "Family visits"]
    },
    {
      title: "Global Visa",
      description: "Comprehensive visa services for worldwide travel",
      countries: "180+ Countries",
      processing: "5-20 business days",
      features: ["Worldwide coverage", "Multiple entry types", "Flexible duration", "Expert consultation"]
    }
  ];


  return (
    <div className="page-content">
      {/* Hero Section */}
      <section className="visa-hero">
        <div className="visa-hero-content">
          <div className="hero-text">
            <h1 className="visa-hero-title">Professional Visa Services</h1>
            <p className="visa-hero-subtitle">
              Simplifying visa applications for 180+ destinations worldwide with expert guidance and guaranteed success rates
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">15,000+</span>
                <span className="stat-label">Visas Processed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">98%</span>
                <span className="stat-label">Success Rate</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">180+</span>
                <span className="stat-label">Countries Covered</span>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Professional Visa Services" />
          </div>
        </div>
      </section>

      {/* Visa Categories */}
      <section className="visa-categories">
        <div className="features-container">
          <h2 className="section-title">Visa Categories We Process</h2>
          <p className="section-subtitle">Choose from our comprehensive visa services tailored to your travel needs</p>
          
          <div className="categories-grid">
            {visaCategories.map((category, index) => (
              <div key={index} className="category-card">
                <div className="category-header">
                  <h3 className="category-title">{category.title}</h3>
                  <p className="category-description">{category.description}</p>
                </div>
                <div className="category-info">
                  <div className="info-row">
                    <span className="info-label">Coverage:</span>
                    <span className="info-value">{category.countries}</span>
                  </div>
                  <div className="info-row">
                    <span className="info-label">Processing:</span>
                    <span className="info-value">{category.processing}</span>
                  </div>
                </div>
                <ul className="category-features">
                  {category.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
}

export default Visa;