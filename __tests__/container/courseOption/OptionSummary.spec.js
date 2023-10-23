import React from 'react';
import {OptionSummary} from '../../../src/container/courseOption/OptionSummary';
import renderer from 'react-test-renderer';


it('renders correctly', () => {
    const course = {
        name: "java",
        summary: "java summary"
    }
    const tree = renderer
        .create(<OptionSummary summary={course.summary}/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
})