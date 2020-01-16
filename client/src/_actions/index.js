import { API_BASE, SEND_REGISTER_REQUEST, SEND_REGISTER_SUCCESS, SEND_REGISTER_ERROR,
                   SEND_LOGIN_REQUEST,SEND_LOGIN_SUCCESS, SEND_LOGIN_ERROR,
                   ADD_TO_CART_REQUEST, PLACE_ORDER_REQUEST, ADD_DROPDOWN_FILTER,CLEAR_DROPDOWN_FILTER
        } from './constants';
import axios from 'axios';

export const postSignUp = () => ({
    type: SEND_REGISTER_REQUEST
})

export const signUpSuccess = response => ({
    type: SEND_REGISTER_SUCCESS,
    response
})

export const signUpFailed = error => ({
    type: SEND_REGISTER_ERROR,
    error
})

export const postLoginRequest = () => ({
    type: SEND_LOGIN_REQUEST
})

export const postLoginSuccess = response => ({
    type: SEND_LOGIN_SUCCESS,
    response
})

export const postLoginFailed = error => ({
    type: SEND_LOGIN_ERROR,
    error
})


export const addToCartRequest = payload => ({
    type: ADD_TO_CART_REQUEST,
    item: {
        id: payload.id,
        title: payload.title,
        price: payload.price,
        author: payload.author
    }
})


export const placeOrderRequest = () => ({
    type: PLACE_ORDER_REQUEST
})

export const addDropdownFilter = (filter, items) => ({
    type: ADD_DROPDOWN_FILTER,
    term: filter,
    items
})

export const clearDropdownFilter = () => ({
    type: CLEAR_DROPDOWN_FILTER
})




export const register = (payload, success, error) => {
    return dispatch => {
        dispatch( postSignUp() );
        axios.post(`${API_BASE}/register`, payload).then(
            response => {
               dispatch(signUpSuccess(response.data));
               success();
            }
        ).catch( error => {
            dispatch( signUpFailed( error ))
            error();
        })
    }
}


export const sendLogin = (payload, success, error) => {
    return dispatch => {
        dispatch( postLoginRequest() );
        axios.post(`${API_BASE}/login`, payload).then(
            response => {
               dispatch( postLoginSuccess( response.data ) )
               success()
            }
        ).catch( err => {
            dispatch( postLoginFailed( err ) )
            error()
        })
    }
}


export const addToCart = (payload, success, error) => {
    return dispatch => {
        dispatch( addToCartRequest(payload) )
    }
}

export const sendOrderRequest = () => {
    return dispatch => {
        dispatch( placeOrderRequest() )
        axios.post(`${API_BASE}/forwardOrder`, {}).then( response => {
            console.log( 'result',response )
        })
    }
}

export const sendFilterCategory = (term, books)=> {
    return dispatch => {
        dispatch( clearDropdownFilter() )
        dispatch( addDropdownFilter(term,books) );
    }
}