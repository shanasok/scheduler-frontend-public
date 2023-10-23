import React from 'react';
import {MainTitle} from '../../../src/container/Main/MainTitle';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer
        .create(<MainTitle/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});