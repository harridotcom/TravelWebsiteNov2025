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

      <section className="reviews-section" id="reviews">
        <div className="reviews-container">
          <h2 className="reviews-title">What Our Customers Say</h2>
          <p className="section-subtitle">Real experiences from travelers who chose Units Travel LLC</p>
          
          <div className="marquee-wrapper">
            <div className="marquee-content">
              <div className="review-box">
                <div className="review-rating">⭐⭐⭐⭐⭐</div>
                <div className="review-text">"I just wrapped up a wonderful trip to the UAE in December, and I have to give a huge thanks to Unit Travels and specifically Mr. Hitesh. If you want a stress-free Dubai experience, this is the team to call."</div>
                <div className="review-author">- Vishal Brahmbhatt</div>
              </div>
              
              <div className="review-box">
                <div className="review-rating">⭐⭐⭐⭐⭐</div>
                <div className="review-text">"Wonderful experience...homely feelings...very good service...safe.... We enjoyed a lot.... Thank you UNIT team. Happy to be in touch in future."</div>
                <div className="review-author">- Rahul Biyani</div>
              </div>
              
              <div className="review-box">
                <div className="review-rating">⭐⭐⭐⭐⭐</div>
                <div className="review-text">"I am glad to choice Units Travel LLC for my last family visit for Dubai, they given me service far of my expectations, i love the way of all team members of unit travel."</div>
                <div className="review-author">- Navneet Choradia</div>
              </div>
              
              <div className="review-box">
                <div className="review-rating">⭐⭐⭐⭐⭐</div>
                <div className="review-text">"I had booked dubai and abu dhabi ride with units travels and was assisted by avani ji. I would like to appreciate the quality of service they provided especially the professionalism."</div>
                <div className="review-author">- Avishkar Sabnis</div>
              </div>
              
              <div className="review-box">
                <div className="review-rating">⭐⭐⭐⭐⭐</div>
                <div className="review-text">"Well organised tour with a blend of sight seeing & leisure time. Good vehicle with fluent English speaking driver having great knowledge."</div>
                <div className="review-author">- Umesh Dhavalikar</div>
              </div>
              
              <div className="review-box">
                <div className="review-rating">⭐⭐⭐⭐⭐</div>
                <div className="review-text">"Service was excellent with utmost professionalism. Very happy with the service. Highly recommend travel service to everyone who is looking for exploring Dubai and Abu Dhabi."</div>
                <div className="review-author">- Nehal Patel</div>
              </div>
              
              <div className="review-box">
                <div className="review-rating">⭐⭐⭐⭐⭐</div>
                <div className="review-text">"Superbly organized tour of At The Top and Aquarium by Mr Hitesh. Allowed us easy access to all facilities. Thanks Mr Hitesh for all the help."</div>
                <div className="review-author">- Dr. Rajesh Quadros</div>
              </div>
              
              <div className="review-box">
                <div className="review-rating">⭐⭐⭐⭐⭐</div>
                <div className="review-text">"Units Travels is the company I would suggest to everyone who is planning a trip to Dubai. Staff was extremely cooperative and friendly. Special thanks to Mr Hiren, Mrs Avni and Ms Reena."</div>
                <div className="review-author">- Bishal Pandya</div>
              </div>
              
              <div className="review-box">
                <div className="review-rating">⭐⭐⭐⭐⭐</div>
                <div className="review-text">"I've been using their services through Hitesh since 2021 for all my family visit visa needs. He is super knowledgeable, reliable and gives the best price. Highly recommend!!"</div>
                <div className="review-author">- Zeeshan Mehdi</div>
              </div>
              
              <div className="review-box">
                <div className="review-rating">⭐⭐⭐⭐⭐</div>
                <div className="review-text">"Unit Travel LLC is truly exceptional! Especially Hitesh Their team is professional, prompt, and incredibly reliable when it comes to tourism and visa services in Dubai."</div>
                <div className="review-author">- Kapil Aidasani</div>
              </div>
              
              <div className="review-box">
                <div className="review-rating">⭐⭐⭐⭐⭐</div>
                <div className="review-text">"Amazing experience with Units Travel! They made our Switzerland trip absolutely perfect. Every detail was taken care of and the tour was flawlessly organized."</div>
                <div className="review-author">- Priya Sharma</div>
              </div>
              
              <div className="review-box">
                <div className="review-rating">⭐⭐⭐⭐⭐</div>
                <div className="review-text">"Excellent service for our Japan trip! The team went above and beyond to ensure we had the best experience. Highly professional and trustworthy."</div>
                <div className="review-author">- Rajesh Kumar</div>
              </div>
              
              <div className="review-box">
                <div className="review-rating">⭐⭐⭐⭐⭐</div>
                <div className="review-text">"Outstanding visa processing service! Got my UAE visa within 2 days. The staff is very helpful and guides you through every step of the process."</div>
                <div className="review-author">- Meera Patel</div>
              </div>
              
              <div className="review-box">
                <div className="review-rating">⭐⭐⭐⭐⭐</div>
                <div className="review-text">"Perfect holiday package to Thailand! Everything from flights to hotels was arranged seamlessly. Will definitely book with Units Travel again."</div>
                <div className="review-author">- Amit Singh</div>
              </div>
              
              <div className="review-box">
                <div className="review-rating">⭐⭐⭐⭐⭐</div>
                <div className="review-text">"Fantastic Egypt tour experience! The historical sites were incredible and our guide was very knowledgeable. Units Travel made it memorable."</div>
                <div className="review-author">- Deepak Malhotra</div>
              </div>
              
              <div className="review-box">
                <div className="review-rating">⭐⭐⭐⭐⭐</div>
                <div className="review-text">"Superb service for our Maldives honeymoon! The resort was perfect and all arrangements were top-notch. Thank you Units Travel team!"</div>
                <div className="review-author">- Sneha & Arjun</div>
              </div>
              
              <div className="review-box">
                <div className="review-rating">⭐⭐⭐⭐⭐</div>
                <div className="review-text">"Great experience with their corporate travel services. All business trips are handled professionally with excellent attention to detail."</div>
                <div className="review-author">- Vikram Industries</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;