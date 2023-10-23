import React from 'react';
import {OptionHeader} from '../../../src/container/courseOption/OptionHeader';
import renderer from 'react-test-renderer';


it('renders correctly', () => {
    const course = {
        name: "java",
        summary: "java summary"
    }
    const tree = renderer
        .create(<OptionHeader name={course.name}/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});