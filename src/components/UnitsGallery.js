import React, { useState } from 'react';
import './UnitsGallery.css';

export default function UnitsGallery() {
    const [selectedImage, setSelectedImage] = useState(null);
    
    const galleryImages = [
        {
            id: 1,
            src: '/images/IMG-20251126-WA0012.jpg',
            title: 'Office Environment',
            description: 'Our professional workspace'
        },
        {
            id: 2,
            src: '/images/IMG-20251126-WA0014.jpg',
            title: 'Team Collaboration',
            description: 'Working together for excellence'
        },
        {
            id: 3,
            src: '/images/IMG-20251126-WA0016.jpg',
            title: 'Client Services',
            description: 'Dedicated to serving our clients'
        },
        {
            id: 4,
            src: '/images/IMG-20251126-WA0018.jpg',
            title: 'Professional Meeting',
            description: 'Strategic planning sessions'
        },
        {
            id: 5,
            src: '/images/IMG-20251126-WA0020.jpg',
            title: 'Travel Planning',
            description: 'Creating memorable journeys'
        },
        {
            id: 6,
            src: '/images/IMG-20251126-WA0022.jpg',
            title: 'Customer Support',
            description: 'Always here to help'
        },
        {
            id: 7,
            src: '/images/IMG-20251126-WA0024.jpg',
            title: 'Team Excellence',
            description: 'Committed to quality service'
        },
        {
            id: 8,
            src: '/images/IMG-20251126-WA0026.jpg',
            title: 'Global Reach',
            description: 'Connecting destinations worldwide'
        }
    ];

    const openModal = (image) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    const handleNext = () => {
        const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
        const nextIndex = (currentIndex + 1) % galleryImages.length;
        setSelectedImage(galleryImages[nextIndex]);
    };

    const handlePrev = () => {
        const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
        const prevIndex = currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1;
        setSelectedImage(galleryImages[prevIndex]);
    };

    return (
        <section className="units-gallery">
            <div className="features-container">
                <h2 className="features-title">Awards & Recognition</h2>
                <p className="section-subtitle">
                    Celebrating our achievements and milestones in the travel industry
                </p>
                
                <div className="gallery-grid">
                    {galleryImages.map((image) => (
                        <div 
                            key={image.id} 
                            className="gallery-item"
                            onClick={() => openModal(image)}
                        >
                            <div className="gallery-image-container">
                                <img 
                                    src={image.src} 
                                    alt={image.title}
                                    className="gallery-image"
                                    loading="lazy"
                                />
                                <div className="gallery-overlay">
                                    <div className="gallery-content">
                                        <h3 className="gallery-title">{image.title}</h3>
                                        <p className="gallery-description">{image.description}</p>
                                        <button className="gallery-view-btn">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M21 9.5C21 16.4 12 23 12 23S3 16.4 3 9.5C3 5.9 7.03 2 12 2S21 5.9 21 9.5Z" stroke="currentColor" strokeWidth="2"/>
                                                <circle cx="12" cy="9.5" r="2.5" stroke="currentColor" strokeWidth="2"/>
                                            </svg>
                                            View
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {selectedImage && (
                <div className="gallery-modal" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2"/>
                            </svg>
                        </button>
                        
                        <button className="modal-nav modal-prev" onClick={handlePrev}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2"/>
                            </svg>
                        </button>
                        
                        <div className="modal-image-container">
                            <img 
                                src={selectedImage.src} 
                                alt={selectedImage.title}
                                className="modal-image"
                            />
                            <div className="modal-info">
                                <h3 className="modal-title">{selectedImage.title}</h3>
                                <p className="modal-description">{selectedImage.description}</p>
                            </div>
                        </div>
                        
                        <button className="modal-nav modal-next" onClick={handleNext}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2"/>
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}