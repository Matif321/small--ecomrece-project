import React, { useState } from "react";
import "./Cart.css";
import { useShop } from "../context/ShopContext";
import { useNavigate } from "react-router-dom";

const CartTable = () => {
  const { cartItems, removeFromCart, updateQuantity } = useShop();
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: ""
  });

  // WhatsApp configuration
  const phoneNumber = '923005822788'; // Same as WhatsAppButton.jsx

  // Helper to parse price string like "Rs 2999" to number 2999
  const parsePrice = (price) => {
    if (typeof price === 'number') return price;
    if (!price) return 0;
    // Remove all non-numeric characters except dot
    const cleanPrice = String(price).replace(/[^0-9.]/g, '');
    return Number(cleanPrice) || 0;
  };

  // Open the form modal
  const openFormModal = () => {
    if (cartItems.length === 0) return;
    setShowForm(true);
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Validate form
    if (!formData.fullName || !formData.email || !formData.phone || !formData.address) {
      alert("Please fill in all required fields");
      return;
    }

    // Build the order message with customer details
    let message = "🛒 *NEW ORDER FROM WEBSITE*\n\n";
    message += "📦 *Order Details:*\n";
    message += "─────────────────\n";

    cartItems.forEach((item, index) => {
      const itemTotal = parsePrice(item.price) * item.quantity;
      message += `${index + 1}. *${item.name}*\n`;
      message += `   Price: Rs ${parsePrice(item.price)} × ${item.quantity}\n`;
      message += `   Subtotal: Rs ${itemTotal}\n\n`;
    });

    const subtotal = cartItems.reduce((acc, item) => acc + (parsePrice(item.price) * item.quantity), 0);
    message += "─────────────────\n";
    message += `💰 *Total Amount: Rs ${subtotal}*\n\n`;

    message += "📍 *Customer Information:*\n";
    message += `• Name: ${formData.fullName}\n`;
    message += `• Email: ${formData.email}\n`;
    message += `• Phone: ${formData.phone}\n`;
    message += `• Address: ${formData.address}\n\n`;

    message += "Please confirm my order. 😊";

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    // Close form and reset
    setShowForm(false);
    setFormData({ fullName: "", email: "", phone: "", address: "" });
  };

  // Order via WhatsApp
  const orderViaWhatsApp = () => {
    openFormModal();
  };

  // ➕ Increase quantity
  const increaseQty = (id, currentQty) => {
    updateQuantity(id, currentQty + 1);
  };

  // ➖ Decrease quantity
  const decreaseQty = (id, currentQty) => {
    if (currentQty > 1) {
      updateQuantity(id, currentQty - 1);
    }
  };

  // 🗑️ Remove item
  const removeItem = (id) => {
    removeFromCart(id);
  };

  // 🛒 Buy now (Single Item)
  const buyNow = (item) => {
    navigate("/checkout", { state: { product: item } });
  };

  // 🛒 Checkout (All Items)
  const checkoutAll = () => {
    navigate("/checkout", { state: { fromCart: true } });
  }

  const subtotal = cartItems.reduce((acc, item) => acc + (parsePrice(item.price) * item.quantity), 0);

  return (
    <>
    <div className="cart-container">
      <h2 className="section-title">Your Cart</h2>
      <table className="cart-table">
        <thead>
          <tr>
            <th className="col-product">Product</th>
            <th className="col-price">Price</th>
            <th className="col-quantity">Quantity</th>
            <th className="col-total">Total</th>
            <th className="col-actions"></th>
          </tr>
        </thead>

        <tbody>
          {cartItems.length === 0 ? (
            <tr>
              <td colSpan="5" style={{ textAlign: "center", padding: "40px" }}>
                Your cart is empty
              </td>
            </tr>
          ) : (
            cartItems.map((item) => (
              <tr key={item.id} className="cart-row">
                <td className="product-cell">
                  <div className="product-info">
                    <img
                      src={item.image || item.img}
                      alt={item.name}
                      className="product-img"
                    />
                    <span className="product-name">{item.name}</span>
                  </div>
                </td>

                <td className="price-cell">Rs {parsePrice(item.price)}</td>

                <td className="quantity-cell">
                  <div className="quantity-stepper">
                    <button
                      className="step-btn"
                      onClick={() => decreaseQty(item.id, item.quantity)}
                    >
                      −
                    </button>
                    <span className="qty-val">{item.quantity}</span>
                    <button
                      className="step-btn"
                      onClick={() => increaseQty(item.id, item.quantity)}
                    >
                      +
                    </button>
                  </div>
                </td>

                <td className="total-cell">
                  Rs {parsePrice(item.price) * item.quantity}
                </td>

                <td className="actions-cell">
                  <button
                    className="buy-btn"
                    onClick={() => buyNow(item)}
                  >
                    Buy Now
                  </button>

                  <button
                    className="remove-btn"
                    onClick={() => removeItem(item.id)}
                  >
                    <span className="trash-icon">🗑️</span> Remove
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {cartItems.length > 0 && (
        <div className="cart-footer">
          <div className="cart-total">
            <span>Subtotal:</span>
            <span className="total-price">Rs {subtotal}</span>
          </div>
          <button className="whatsapp-order-btn" onClick={orderViaWhatsApp}>
            <svg
              className="whatsapp-btn-icon"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Order via WhatsApp
          </button>
        </div>
      )}
    </div>

    {/* Customer Details Modal */}
    {showForm && (
      <div className="modal-overlay" onClick={() => setShowForm(false)}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h3>Enter Your Details</h3>
            <button className="modal-close" onClick={() => setShowForm(false)}>&times;</button>
          </div>

          <form onSubmit={handleFormSubmit} className="customer-form">
            <div className="form-field">
              <label>Full Name *</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="form-field">
              <label>Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-field">
              <label>Phone Number *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Enter your phone number"
                required
              />
            </div>

            <div className="form-field">
              <label>Delivery Address *</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Enter your complete delivery address"
                rows="3"
                required
              />
            </div>

            <div className="form-actions">
              <button type="button" className="btn-cancel" onClick={() => setShowForm(false)}>
                Cancel
              </button>
              <button type="submit" className="btn-submit">
                <svg
                  className="whatsapp-icon"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Send Order via WhatsApp
              </button>
            </div>
          </form>
        </div>
      </div>
    )}
  </>
  );
};

export default CartTable;
