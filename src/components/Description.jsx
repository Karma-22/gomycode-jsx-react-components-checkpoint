import React from 'react';
import product from '../product.js';

const Description = () => {
  return (
    <div className="product-description-container mb-4">
      <p className="product-description text-secondary lh-base mb-3">
        {product.description}
      </p>
      {product.features && product.features.length > 0 && (
        <ul className="product-features-list list-unstyled ps-0 mb-0">
          {product.features.map((feature, idx) => (
            <li key={idx} className="d-flex align-items-center gap-2 mb-1 text-muted small">
              <span className="feature-check text-primary">✔</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Description;
