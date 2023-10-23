import renderer from "react-test-renderer";
import {Provider as ReduxProvider} from "react-redux";
import App from "../src/App";
import React from "react";
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore()
const mockState = {}
let store = mockStore(mockState)

describe('My Test Suite', () => {
    it('My Test Case', () => {
        expect(true).toEqual(true);
    });

    it('renders correctly', () => {
        const tree = renderer
            .create( <ReduxProvider store={store}><App/></ReduxProvider>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

});