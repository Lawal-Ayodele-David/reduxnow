// Product.js
import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../actions/postActions";

const Product = ({ name, price, addToCart }) => {
  const handleAddToCart = () => {
    const product = {
      name:"Gold",
      price:9.99,
    };
    addToCart(product);
  };

  return (
    <div>
      <h3>Gold</h3>
      <p>Price: $99.99</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default connect(null, { addToCart })(Product);
