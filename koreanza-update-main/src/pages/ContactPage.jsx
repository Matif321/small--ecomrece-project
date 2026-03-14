import React from 'react';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-container">
      <h1 className="main-title">We'd love to hear from you!</h1>
      
      <div className="cards-wrapper">
        {/* Left Card: Contact Info */}
        <div className="contact-card">
          <h2 className="card-title">CONTACT US</h2>
          <p className="card-subtitle">We're here to help you.</p>
          <p className="description">
            Have a question about your order, our products, or need support?
          </p>
          <p className="description">Our team is always ready to assist you.</p>
          
          <h3 className="section-heading">Let's Get and Touch</h3>
          <ul className="contact-details">
            <li><strong>Email:</strong> koreanzaa@gmail.com</li>
            <li><strong>Phone:</strong> +92 310 5608442</li>
            <li><strong>Address:</strong> STP shaheed Benazir bhutto women university floor no 3 office no 2 peshawar pakistan</li>
            <li><strong>Support Hours:</strong> Monday - Saturday <br/> 9:00 to 5:00</li>
          </ul>
        </div>

        {/* Right Card: Message Form */}
        <div className="contact-card">
          <h2 className="card-title">SEND US A MESSAGE</h2>
          <p className="description-small">
            Fill out the form below and our support team will get back to you within 24 hours.
          </p>
          
          <form className="contact-form">
            <div className="form-group">
              <label>Full name</label>
              <input type="text" />
            </div>
            <div className="form-group">
              <label>Email address</label>
              <input type="email" />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea rows="5"></textarea>
            </div>
            <button type="submit" className="send-btn">Send message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;