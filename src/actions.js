import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_KITTEN_PENDING,
    REQUEST_KITTEN_SUCCESS,
    REQUEST_KITTEN_FAIL
     } from './constants';


export const setSearchFieldAction = (text) => ({
    type : CHANGE_SEARCH_FIELD,
    payload: text
})


export const requestKittenAction = () => (dispatch) =>
{
    dispatch({type : REQUEST_KITTEN_PENDING});

    fetch("https://jsonplaceholder.typicode.com/users")
      .then(Response => Response.json())
      .then(kittens => {
        dispatch({ type : REQUEST_KITTEN_SUCCESS, payload : kittens });
      }).catch(error => dispatch({type : REQUEST_KITTEN_FAIL, payload : error}));
}