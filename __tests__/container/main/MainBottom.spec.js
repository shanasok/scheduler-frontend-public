import React from 'react';
import {MainBottom} from '../../../src/container/Main/MainBottom';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer
        .create(<MainBottom/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});