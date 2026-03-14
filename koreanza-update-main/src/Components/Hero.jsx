import React, { useState } from 'react';
import './Hero.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import img1 from '../assets/Images/slider2.png';
import img2 from '../assets/Images/slider5.png';
import img3 from '../assets/Images/slider4.png';
import slider1 from '../assets/Images/slider1.png';

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    { id: 1, img: slider1 },
    { id: 2, img: img1 },
    { id: 3, img: img2 },
    { id: 4, img: img3 },
  ];

  const nextSlide = () => {
    setCurrentIndex(prev =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex(prev =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  // ✅ SHOP NOW CLICK HANDLER
  const handleShopNow = () => {
    const categorySection = document.getElementById('categories');
    if (categorySection) {
      categorySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="slider-outer">
      <div className="slider-wrapper">

        {/* Navigation Buttons */}
        <button className="nav-btn prev" onClick={prevSlide}>
          <ChevronLeft size={30} />
        </button>
        <button className="nav-btn next" onClick={nextSlide}>
          <ChevronRight size={30} />
        </button>

        {/* Slides */}
        <div
          className="slides-container"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map(slide => (
            <div className="slide" key={slide.id}>
              <img
                src={slide.img}
                alt={`Slide ${slide.id}`}
                className="slide-img"
              />

              {/* ✅ WORKING BUTTON */}
              <button
                className="slider-shop-btn"
                onClick={handleShopNow}
              >
                Shop Now
              </button>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="dots">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${currentIndex === index ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;