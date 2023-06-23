import { FETCH_POSTS, NEW_POST } from "./types";
import { ADD_TO_CART, REMOVE_FROM_CART } from "./types";

//The FETCH_POSTS and NEW_POST are for the comment box

export const fetchPosts = () => dispatch => {
        fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => dispatch({
        type: FETCH_POSTS,
        payload: posts
      }));
    };

    export const createPost = (postData) => dispatch => {
      console.log('action called');
      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
      .then(response => response.json())
      .then(post => dispatch({
        type: NEW_POST,
        payload: post
      }));
  };

  //The ADD_TO_CART and REMOVE_FROM_CART are for the Shopping Cart
export const addToCart = (item) => {
  return {
    type: ADD_TO_CART,
    payload: item
  };
};

export const removeFromCart = (itemId) => {
  return {
    type: REMOVE_FROM_CART,
    payload: itemId
  };
};