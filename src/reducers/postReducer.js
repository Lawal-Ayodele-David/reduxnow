import { ADD_TO_CART, FETCH_POSTS, NEW_POST, REMOVE_FROM_CART } from "../actions/types";

//This is for the post initial state.
const initialState = {
    items: [],
    item: {}
};

//This is for the Shopping Cart initial state.
const cartInitialState ={
    cartItems: [],
    totalPrice: 0
}

//Here is the reducer for the Post
export  function postReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                items: action.payload
            };
        case NEW_POST:
            return {
                ...state,
                item: action.payload
            };
        default: 
            return state;
    };
};

//Here is the reducer for the Shopping Cart
export function cartReducer(state = cartInitialState, action) {
    switch (action.type){
        case ADD_TO_CART:
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload],
                totalPrice: state.totalPrice + action.payload.price
            };
        case REMOVE_FROM_CART:
            const updatedCartItems = state.cartItems.filter(item => item.id !== action.payload);
            const removedItem = state.cartItems.find(item => item.id === action.payload);
            return {
                ...state,
                cartItems: updatedCartItems,
                totalPrice: state.totalPrice - removedItem.price
            };
        default:
            return state;
            }
        };
