import { combineReducers } from 'redux';
import UserReducer from './UserReducer';
import CartReducer from './CartReducer';
import AddressReducer from './AddressReducer';

const allReducers = combineReducers({
    user: UserReducer,
    cart: CartReducer,
    address: AddressReducer
})
export default allReducers;