import React from 'react';
import { connect } from 'react-redux';
import { addToCart, removeFromCart } from '../actions/postActions';

const Product = ({ product, addToCart, removeFromCart }) => {
    const handleAddToCart = () => {
        addToCart(product); //Dispatch the addToCArt action with the product as the payload
    };

    const handleRemoveFromCart = () => {
        removeFromCart = () => {
            removeFromCart(product.id); //Dispatch the removeFroCart action with the product ID as the payload
        };
    };

        return (
            <div>
                <h3>{product.name}</h3>
                <p>Price: {product.price}</p>
                <button onClick={handleAddToCart}>Add to Cart</button>
                <button onClick={handleRemoveFromCart}>Remove from Cart</button>
            </div>
        );
    };

    export default connect(null, { addToCart, removeFromCart })(Product);
    