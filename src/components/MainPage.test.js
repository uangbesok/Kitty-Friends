import React from 'react';
import { shallow } from "enzyme";
import MainPage from "./MainPage";

let wrapper;
let wrapper2;

beforeEach(() => {
    const mockProps = {
        onRequestKitten: jest.fn(),
        kittens: [],
        searchField: '',
        isPending: false,
        error: null,
    };
    wrapper = shallow(<MainPage {...mockProps} />); 
});

it('renders MainPage without crashing', () => {
    expect(wrapper).toMatchSnapshot();
}); 

it('filters kittens correctly', () => {
    const mockProps2 = {
        onRequestKitten: jest.fn(),
        kittens: [
            {
                id: 3,
                name: 'John',
                email: 'john@gmail.com'
            },
        ],
        searchField: 'a',
        isPending: false,
        error: null,
    };

    wrapper2 = shallow(<MainPage {...mockProps2} />); 
    expect(wrapper2.instance().filteredKittens()).toEqual([]);
})