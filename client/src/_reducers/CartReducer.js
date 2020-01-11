import { ADD_TO_CART_REQUEST, PLACE_ORDER_REQUEST } from '../_actions/constants'

const initialState = {
    books_ordered: []
}

export default (state = initialState, action) => {
    switch(action.type){
        case ADD_TO_CART_REQUEST:
            return {...state, books_ordered: [ ...state.books_ordered, action.item ] }
        case PLACE_ORDER_REQUEST:
            return { ...state, }
        default:
            return state
    }
}