import { combineReducers } from 'redux';
import UserReducer from './UserReducer';
import CartReducer from './CartReducer';

const allReducers = combineReducers({
    user: UserReducer,
    cart: CartReducer
})
export default allReducers;