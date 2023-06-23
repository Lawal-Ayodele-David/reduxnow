import React from 'react';
import { connect } from 'react-redux';
import { addToCart, removeFromCart } from '../actions/postActions';

const Cart = ({ cartItems, addToCart, removeFromCart }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} - {item.price}
              <button onClick={() => removeFromCart(index)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <button onClick={() => addToCart({ name: 'Item', price: 10 })}>
        Add Item
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cartItems: state.cartItems
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: item => dispatch(addToCart(item)),
    removeFromCart: index => dispatch(removeFromCart(index))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);