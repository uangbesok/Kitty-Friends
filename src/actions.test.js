import * as actions from './actions'
import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_KITTEN_PENDING,
    REQUEST_KITTEN_SUCCESS,
    REQUEST_KITTEN_FAIL,
 } from "./constants";

const mockStore = configureStore([thunkMiddleware]);

it('should create an action to search kittens', () => {
    const text = 'wooo';
    const expectedAction = {
        type: CHANGE_SEARCH_FIELD,
        payload: text,
    };

    expect(actions.setSearchFieldAction(text)).toEqual(expectedAction);
})

it('handles requesting kittens API', () => {
    const store = mockStore();
    store.dispatch(actions.requestKittenAction());
    const action = store.getActions();

    const expectedAction = {
        type: REQUEST_KITTEN_PENDING,
    };

    expect(action[0]).toEqual(expectedAction);
})