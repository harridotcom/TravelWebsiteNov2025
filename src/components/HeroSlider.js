import React, { useState, useEffect } from 'react';
import './HeroSlider.css';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://i.pinimg.com/1200x/0b/0a/b4/0b0ab46b7ee0ea830ff466699f8a55b8.jpg',
      title: 'Burj Khalifa & Downtown Dubai',
      subtitle: 'Experience the world\'s tallest building and Dubai\'s magnificent skyline'
    },
    {
      image: 'https://i.pinimg.com/1200x/d2/f6/70/d2f670e47780a8459b34509cd4005ca7.jpg',
      title: 'Burj Al Arab',
      subtitle: 'Visit the world\'s most luxurious hotel and Dubai\'s iconic sail-shaped masterpiece'
    },
    {
      image: 'https://i.pinimg.com/736x/9e/df/5f/9edf5faa5a2a4d8d5d6167d5265ebcd3.jpg',
      title: 'Ferrari World',
      subtitle: 'Experience the ultimate thrill at Ferrari World theme park and museum'
    },
    {
      image: 'https://i.pinimg.com/736x/ab/7c/5f/ab7c5f16c093e86106eac82c70499e6d.jpg',
      title: 'Palm Jumeirah',
      subtitle: 'Visit the world\'s largest artificial island and luxury resorts'
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  return (
    <div className="hero-slider">
      <div className="slides-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="slide-overlay">
              <div className="slide-content">
                <h2 className="slide-title">{slide.title}</h2>
                <p className="slide-subtitle">{slide.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>



      <div className="slide-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;