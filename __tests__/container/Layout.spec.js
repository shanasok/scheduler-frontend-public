import React from 'react';
import renderer from 'react-test-renderer';
import {Provider as ReduxProvider} from "react-redux";
import configureMockStore from 'redux-mock-store'
import Layout from '../../src/container/Layout';

const mockStore = configureMockStore()
const mockState = {}
let store = mockStore(mockState)

it('renders correctly', () => {
    const tree = renderer
        .create( <ReduxProvider store={store}><Layout/></ReduxProvider>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});