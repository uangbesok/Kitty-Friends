import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_KITTEN_PENDING,
    REQUEST_KITTEN_SUCCESS,
    REQUEST_KITTEN_FAIL,
 } from "./constants";

 import * as reducers from './reducers';

 describe('searchKitten', () => {

    const initialStateSearch = {
        searchField: '',
    }

    it('should return the initial state', () => {
        expect(reducers.searchKitten(undefined, {})).toEqual({ searchField: ''});
    }) 

    it('should handle CHANGE_SEARCH_FIELD event', () => {
        expect(reducers.searchKitten(initialStateSearch, {
            type: CHANGE_SEARCH_FIELD,
            payload: 'abc',
        })).toEqual(
            {
                searchField: 'abc',
            }
        )
    }) 

 });

 describe('requestKitten', () => {

    const initialStateKitten = {
        isPending: false,
        kittens: [],
        error: ''
    }

    it('should return the initial state', () => {
        expect(reducers.requestKitten(undefined, {})).toEqual(initialStateKitten);
    }) 

    it('should handle REQUEST_KITTEN_SUCCESS event', () => {
        expect(reducers.requestKitten(initialStateKitten, {
            type: REQUEST_KITTEN_SUCCESS,
            payload: [
                {
                    id: 123,
                    name: 'test',
                    email: 'test@gmail.com',
                }
            ]
        })).toEqual(
            {
                kittens: [{
                    id: 123,
                    name: 'test',
                    email: 'test@gmail.com',
                }],
                isPending: false,
                error: '',
            }
        )
    }); 

    it('should handle REQUEST_KITTEN_PENDING event', () => {
        expect(reducers.requestKitten(initialStateKitten, {
            type: REQUEST_KITTEN_PENDING,
        })).toEqual(
            {
                kittens: [],
                isPending: true,
                error: '',
            }
        )
    });
    
    
    it('should handle REQUEST_KITTEN_FAIL event', () => {
        expect(reducers.requestKitten(initialStateKitten, {
            type: REQUEST_KITTEN_FAIL,
            payload: "OOOOPS",
        })).toEqual(
            {
                kittens: [],
                isPending: false,
                error: 'OOOOPS',
            }
        )
    }) 
});