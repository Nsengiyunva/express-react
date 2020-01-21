import { API_BASE, SEND_REGISTER_REQUEST, SEND_REGISTER_SUCCESS, SEND_REGISTER_ERROR,
                   SEND_LOGIN_REQUEST,SEND_LOGIN_SUCCESS, SEND_LOGIN_ERROR,
                   ADD_TO_CART_REQUEST, PLACE_ORDER_REQUEST, 
                   ADD_DROPDOWN_FILTER,CLEAR_DROPDOWN_FILTER, GET_ALL_REVIEWS,
                   GET_ALL_REVIEWS_SUCCESS, GET_ALL_REVIEWS_FAILED,
                   ADD_A_REVIEW_REQUEST, ADD_A_REVIEW_SUCCESS, ADD_A_REVIEW_FAILED
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

export const getReviewsRequest = () => ({
    type: GET_ALL_REVIEWS
})

export const getReviewsSuccess = response => ({
    type:  GET_ALL_REVIEWS_SUCCESS,
    data: response
})

export const getReviewsFailed = error => ({
    type: GET_ALL_REVIEWS_FAILED,
    error
})


export const addAReviewRequest = () => ({
    type: ADD_A_REVIEW_REQUEST
})

export const addAReviewSuccess = response => ({
    type: ADD_A_REVIEW_SUCCESS,
    data: response
})

export const addAReviewFailed = error => ({
    type: ADD_A_REVIEW_FAILED,
    error
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

export const sendOrderRequest = (items) => {
    return dispatch => {
        dispatch( placeOrderRequest() )
        // console.log( items )
        axios.post(`${API_BASE}/forwardOrder`, {
            booksOrdered: items
        }).then( response => {
            console.log( 'result',response );
        }).catch( error => {
            console.log('error', error)
        })
    }
}

export const sendFilterCategory = (term, books)=> {
    return dispatch => {
        dispatch( clearDropdownFilter() )
        dispatch( addDropdownFilter(term,books) );
    }
}

export const getAllReviews = () => {
    return dispatch => {
        dispatch ( getReviewsRequest() )
        axios.post(`${API_BASE}/getReviews`,{}).then( response => {
            dispatch( getReviewsSuccess( response ) )
            console.log( 'result', response )
        }).catch( err => {
            dispatch( getReviewsFailed( err ) )
            console.log('error', err )
        })
    }
}

export const addReview = (payload) => {
    return dispatch => {
        dispatch( addAReviewRequest() )
        axios.post(`${API_BASE}/addAReview`, {
            emailAddress: payload.emailAddress,
            comment: payload.comment,
            bookReviewed: payload.bookReviewed,
            completed: payload.completed
        }).then( response => {
            console.log(response )
        })
    }
}