import { ADD_TO_CART_REQUEST, PLACE_ORDER_REQUEST, ADD_DROPDOWN_FILTER, CLEAR_DROPDOWN_FILTER } 
from '../_actions/constants'
import { categories } from '../_fixtures'

const initialState = {
    books_ordered: [],
    dropdownTerm: '',
    bookItems: [],
    headingTitle: ''
}

export default (state = initialState, action) => {
    switch(action.type){
        case ADD_TO_CART_REQUEST:
            return {...state, books_ordered: [ ...state.books_ordered, action.item ] }
        case PLACE_ORDER_REQUEST:
            return { ...state, }
        case ADD_DROPDOWN_FILTER:
            let name = categories.filter( value => {
                return value.id === action.term
            })[0].name;
            return { ...state, dropdownTerm: action.term, bookItems: action.items, headingTitle: name}
        case CLEAR_DROPDOWN_FILTER:
            return { ...state, dropdownTerm: null, bookItems: [],headingTitle:'' }
        default:
            return state
    }
}