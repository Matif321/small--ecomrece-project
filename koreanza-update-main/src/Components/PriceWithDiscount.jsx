import React from 'react';
import './PriceWithDiscount.css';

const PriceWithDiscount = ({ price, originalPrice, size = 'medium', align = 'left' }) => {
    // Helper to parse price string/number to float
    const parsePrice = (priceVal) => {
        if (!priceVal) return 0;
        // Remove "Rs" or "Rs." or any non-numeric except .
        const numStr = String(priceVal).replace(/[^0-9.]/g, '');
        return parseFloat(numStr) || 0;
    };

    const currentVal = parsePrice(price);
    const originalVal = parsePrice(originalPrice);

    let discountPercentage = 0;
    if (originalVal > currentVal && originalVal > 0) {
        discountPercentage = Math.round(((originalVal - currentVal) / originalVal) * 100);
    }

    const hasDiscount = discountPercentage > 0;

    return (
        <div className={`price-container size-${size} align-${align}`}>
            <div className="price-row">
                <span className="current-price">
                    {price}
                </span>
                {hasDiscount && (
                    <span className="original-price">
                        {originalPrice}
                    </span>
                )}
            </div>

            {hasDiscount && (
                <span className="discount-badge">
                    {discountPercentage}% OFF
                </span>
            )}
        </div>
    );
};

export default PriceWithDiscount;
