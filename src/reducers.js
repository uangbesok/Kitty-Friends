import { 
        CHANGE_SEARCH_FIELD,
        REQUEST_KITTEN_FAIL,
        REQUEST_KITTEN_SUCCESS,
        REQUEST_KITTEN_PENDING
    } from './constants';

const initialStateSearch = {
    searchField: ''
}

export const searchKitten = (state = initialStateSearch, action = {}) => {

    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            return { ...state, searchField : action.payload };
        default:
            return state;
    }
} 

const initialStateKitten = {
    isPending: false,
    kittens: [],
    error: ''
}

export const requestKitten = (state = initialStateKitten, action = {}) => {

    switch (action.type) {
        case REQUEST_KITTEN_PENDING:
            return { ...state, isPending : true };
        case REQUEST_KITTEN_SUCCESS:
            return { ...state, isPending : false, kittens : action.payload };
        case REQUEST_KITTEN_FAIL:   
            return { ...state, isPending : false, error : action.payload };   
        default:
            return state;
    }
} 