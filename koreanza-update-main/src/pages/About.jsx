import React from 'react';
import './About.css';
import aboutImg from "../assets/Images/About.png";
const BeautyLanding = () => {
  return (
    <div className="container">
      <header className="main-header">
        <h1>ABOUT KOREANZA</h1>
      </header>

      <main className="content-grid">
        <div className="text-side">
          {/* Brand Introduction Section */}
          <section className="section-who">
            <h2>Our Story</h2>
            <p>
              Koreanza is a Cosmetic & Skincare Brand inspired by Korean Beauty standards.<br />
              Our focus is gentle, effective, and high-quality skincare solutions.<br />
              All products are sourced from South Korea to ensure authenticity and premium quality.
            </p>
          </section>

          <div className="divider-horizontal"></div>

          <div className="bottom-sections">
            {/* Vision Section */}
            <section className="section-mission">
              <h2>Vision </h2>
              <p>
                To become a trusted skincare brand known for quality, care, and visible results.
              </p>
              <h2 style={{ marginTop: '20px' }}>Mission </h2>
              <p>
                To bring authentic Korean skincare to our customers. To offer safe, gentle, and effective products.
              </p>
            </section>

            <div className="divider-vertical"></div>

            {/* Why Korea Section */}
            <section className="section-why">
              <h2>Why Koreaza?</h2>
              <ul>
                <li>Advanced Skincare research hub.</li>
                <li>Focus on hydration, skin barrier & long-term health.</li>
                <li>High-quality ingredients & innovation.</li>
                <li>Trusted worldwide for results.</li>
              </ul>
            </section>
          </div>
        </div>

        <div className="image-side">
          <img
            src={aboutImg}
            alt="Koreanza Brand"
          />
        </div>
      </main>
    </div>
  );
};

export default BeautyLanding;