import React from 'react';
import product from '../product.js';

const Name = () => {
  return (
    <h3 className="product-name fw-bold mb-2">
      {product.name}
    </h3>
  );
};

export default Name;
