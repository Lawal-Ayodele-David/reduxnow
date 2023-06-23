import { combineReducers } from 'redux';
import { postReducer, cartReducer } from './postReducer';

export default combineReducers({
    posts: postReducer,
    cart: cartReducer, 
});