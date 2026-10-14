import React from 'react';
import product from '../product.js';

const Price = () => {
  return (
    <div className="product-price-wrapper d-flex align-items-baseline gap-2 mb-3">
      <span className="product-price fs-2 fw-extrabold text-primary">
        {product.price}
      </span>
      <span className="product-price-badge badge bg-success-subtle text-success border border-success-subtle px-2 py-1 rounded-pill">
        En Stock
      </span>
    </div>
  );
};

export default Price;
