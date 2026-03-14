import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useShop } from "../context/ShopContext";
import "./Checkout.css";

const Checkout = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { cartItems } = useShop();
    const [orderItems, setOrderItems] = useState([]);
    const [step, setStep] = useState(1); // 1 = Details, 2 = Payment

    // WhatsApp configuration
    const phoneNumber = '923005822788';

    // Determine what we are checking out
    useEffect(() => {
        if (location.state?.product) {
            setOrderItems([location.state.product]);
        } else if (location.state?.fromCart) {
            setOrderItems(cartItems);
        } else {
            // Fallback
            setOrderItems(cartItems);
        }
    }, [location.state, cartItems]);

    // Helper to parse price string like "Rs 2999" to number 2999
    const parsePrice = (price) => {
        if (typeof price === 'number') return price;
        if (!price) return 0;
        // Remove all non-numeric characters except dot
        const cleanPrice = String(price).replace(/[^0-9.]/g, '');
        return Number(cleanPrice) || 0;
    };

    const subtotal = orderItems.reduce((acc, item) => acc + (parsePrice(item.price) * (item.quantity || 1)), 0);
    const shipping = 60; // Hardcoded
    const total = subtotal + shipping;

    const handleContinue = (e) => {
        e.preventDefault();

        // Get form data
        const form = e.target;
        const email = form.querySelector('input[placeholder="Email or mobile phone number"]')?.value || '';
        const country = form.querySelector('input[placeholder="Country/Region"]')?.value || '';
        const firstName = form.querySelector('input[placeholder="First name"]')?.value || '';
        const lastName = form.querySelector('input[placeholder="Last name"]')?.value || '';
        const address = form.querySelector('input[placeholder="Address"]')?.value || '';
        const city = form.querySelector('input[placeholder="City"]')?.value || '';
        const postalCode = form.querySelector('input[placeholder="Postal code"]')?.value || '';
        const phoneNumber_form = form.querySelector('input[placeholder="Phone number"]')?.value || '';

        // Validate required fields
        if (!email || !firstName || !lastName || !address || !city || !phoneNumber_form) {
            alert("Please fill in all required fields (Email, Name, Address, City, Phone)");
            return;
        }

        // Build the WhatsApp message
        let message = "🛒 *NEW ORDER FROM WEBSITE*\n\n";
        message += "📦 *Order Details:*\n";
        message += "─────────────────\n";

        orderItems.forEach((item, index) => {
            const itemTotal = parsePrice(item.price) * (item.quantity || 1);
            message += `${index + 1}. *${item.name}*\n`;
            message += `   Price: Rs ${parsePrice(item.price)} × ${item.quantity || 1}\n`;
            message += `   Subtotal: Rs ${itemTotal}\n\n`;
        });

        message += "─────────────────\n";
        message += `💰 *Subtotal: Rs ${subtotal}*\n`;
        message += `🚚 *Shipping: Rs ${shipping}*\n`;
        message += `💵 *Total Amount: Rs ${total}*\n\n`;

        message += "📍 *Customer Information:*\n";
        message += `• Name: ${firstName} ${lastName}\n`;
        message += `• Email: ${email}\n`;
        message += `• Phone: ${phoneNumber_form}\n`;
        message += `• Address: ${address}, ${city}${postalCode ? ' ' + postalCode : ''}\n`;
        if (country) message += `• Country: ${country}\n`;

        message += "\nPlease confirm my order. 😊";

        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    const handleBack = () => {
        setStep(1);
    };

    const handlePaymentSubmit = (e) => {
        e.preventDefault();
        alert(`Order Placed Successfully! Total: Rs ${total}`);
        navigate("/");
    };

    return (
        <div className="checkout-container">
            {step === 2 && (
                <button onClick={handleBack} className="back-link">
                    &larr; Back to Details
                </button>
            )}

            <div className="checkout-content">
                {/* FORM SECTION */}
                <div className="checkout-form-section">
                    {step === 1 ? (
                        <form onSubmit={handleContinue}>
                            {/* CONTACT */}
                            <div className="form-group">
                                <h3>CONTACT</h3>
                                <input type="email" placeholder="Email or mobile phone number" required className="checkout-input" />
                            </div>

                            {/* DELIVERY */}
                            <div className="form-group">
                                <h3>Delivery</h3>
                                <input type="text" placeholder="Country/Region" className="checkout-input" />
                                <div className="input-row">
                                    <input type="text" placeholder="First name" required className="checkout-input half" />
                                    <input type="text" placeholder="Last name" required className="checkout-input half" />
                                </div>
                                <input type="text" placeholder="Address" required className="checkout-input" />
                                <div className="input-row">
                                    <input type="text" placeholder="City" required className="checkout-input half" />
                                    <input type="text" placeholder="Postal code" className="checkout-input half" />
                                </div>
                                <input type="tel" placeholder="Phone number" required className="checkout-input" />

                                <div className="checkbox-row">
                                    <input type="checkbox" id="save-info" />
                                    <label htmlFor="save-info">Save the information for next time</label>
                                </div>
                            </div>

                            {/* SHIPPING METHOD */}
                            <div className="form-group">
                                <h3>Shipping method</h3>
                                <div className="shipping-option">
                                    <span>Free shipping</span>
                                    <span>Free</span>
                                </div>
                            </div>

                            <button type="submit" className="pay-now-btn">Continue to Payment</button>
                        </form>
                    ) : (
                        <form onSubmit={handlePaymentSubmit} className="payment-details-form">
                            <h3>Payment Details</h3>

                            <div className="form-group">
                                <label className="input-label">Cardholder name</label>
                                <input type="text" className="checkout-input" placeholder="" />
                            </div>

                            <div className="form-group">
                                <label className="input-label">Card number</label>
                                <input type="text" className="checkout-input" placeholder="" />
                            </div>

                            <div className="input-row">
                                <div className="form-group half">
                                    <label className="input-label">Expiry date</label>
                                    <input type="text" className="checkout-input" placeholder="MM/YY" />
                                </div>
                                <div className="form-group half">
                                    <label className="input-label">CVV</label>
                                    <input type="text" className="checkout-input" placeholder="123" />
                                </div>
                            </div>

                            {/* Payment Summary Box */}
                            <div className="payment-summary-box">
                                <div className="summary-row">
                                    <span>Subtotal</span>
                                    <span>Rs {subtotal}</span>
                                </div>
                                <div className="summary-row">
                                    <span>Shipping</span>
                                    <span>Rs {shipping}</span>
                                </div>
                                <hr className="divider" />
                                <div className="summary-row total-row">
                                    <span>Total</span>
                                    <span>Rs {total}</span>
                                </div>
                            </div>

                            <button type="submit" className="pay-now-btn">Pay now</button>

                            <div className="secure-footer">
                                <span>🔒 Secure payment with SSL encryption</span>
                            </div>
                        </form>
                    )}
                </div>

                {/* ORDER SUMMARY - Visible in both steps or just step 1? Usually both. */}
                <div className="order-summary-section">
                    <div className="summary-card">
                        {orderItems.map((item, index) => (
                            <div key={index} className="summary-item">
                                <div className="summary-img-box">
                                    {item.image || item.img ? <img src={item.image || item.img} alt={item.name} /> : <div className="img-placeholder"></div>}
                                </div>
                                <div className="summary-details">
                                    <p className="summary-name">{item.name}</p>
                                    <p className="summary-price">RS {parsePrice(item.price)}</p>
                                </div>
                            </div>
                        ))}

                        <hr className="divider" />

                        <div className="summary-row">
                            <span>Subtotal</span>
                            <span>RS {subtotal}</span>
                        </div>
                        <div className="summary-row">
                            <span>Shipping</span>
                            <span>RS {shipping}</span>
                        </div>

                        <hr className="divider" />

                        <div className="summary-row total-row">
                            <span>Total</span>
                            <span>RS {total}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
