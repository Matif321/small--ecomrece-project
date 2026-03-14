import React from 'react';
import { Quote, Star } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
  const data = [
    {
      name: "Sana Khan",
      role: "Verified Buyer",
      text: "The Firming Face Cream is a game-changer! My skin feels so much tighter and more hydrated. Truly a premium experience from packaging to results.",
      img: "https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg",
      rating: 5
    },
    {
      name: "Ayesha Malik",
      role: "Skincare Enthusiast",
      text: "I've tried many Korean brands, but the quality here is unmatched. The shipping was fast, and the products are 100% authentic. Highly recommended!",
      img: "https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg",
      rating: 5
    },
    {
      name: "Zainab Ahmed",
      role: "Model",
      text: "Twinkle Pop is my new favorite for daily glow. It’s subtle yet stunning. I love how it blends effortlessly into my routine.",
      img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
      rating: 5
    }
  ];

  return (
    <section className="testimonial-container">
      <div className="testimonial-header">
        <span className="testimonial-subtitle">Testimonials</span>
        <h2 className="testimonial-title">What Our Customers Say</h2>
      </div>

      <div className="testimonial-grid">
        {data.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <div className="quote-icon-top">
              <Quote size={32} fill="currentColor" opacity={0.1} />
            </div>

            <div className="rating-stars">
              {[...Array(item.rating)].map((_, i) => (
                <Star key={i} size={16} fill="#FFD700" color="#FFD700" />
              ))}
            </div>

            <p className="user-text">"{item.text}"</p>

            <div className="user-profile">
              <div className="image-wrapper">
                <img src={item.img} alt={item.name} />
              </div>
              <div className="user-info">
                <h3 className="user-name">{item.name}</h3>
                <span className="user-role">{item.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;