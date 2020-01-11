import { 
    SEND_REGISTER_REQUEST, SEND_REGISTER_SUCCESS, SEND_REGISTER_ERROR,
    SEND_LOGIN_REQUEST, SEND_LOGIN_SUCCESS, SEND_LOGIN_ERROR
} from '../_actions/constants';

const initialState = {
    loading: null
}
export default ( state = initialState, action ) => {
    switch(action.type){
        case SEND_REGISTER_REQUEST:
            return { ...state, loading: true }
        case SEND_REGISTER_SUCCESS:
            return { ...state, loading: false, result: action.response }
        case SEND_REGISTER_ERROR:
            return { ...state, loading: false, error: action.error }
        case SEND_LOGIN_REQUEST:
            return { ...state, loading: true }
        case SEND_LOGIN_SUCCESS:
            return { ...state, loading: false,result: action.response }
        case SEND_LOGIN_ERROR:
            return { ...state, loading: false, error: action.error }
        default:
            return state;
    }
}