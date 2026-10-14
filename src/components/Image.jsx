import React from 'react';
import product from '../product.js';

const Image = () => {
  return (
    <div className="product-image-wrapper">
      <img
        src={product.image}
        alt={product.name}
        className="product-image img-fluid w-100"
      />
      <div className="product-rating-badge">
        ⭐ {product.rating} <span className="reviews-count">({product.reviewsCount})</span>
      </div>
    </div>
  );
};

export default Image;
