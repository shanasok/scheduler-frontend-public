import React from 'react';
import CourseSummary from '../../../src/container/courseBreakdown/CourseSummary';
import renderer from 'react-test-renderer';


it('renders correctly', () => {
    const course = {
        name: "java",
        summary: "java summary"
    }
    const tree = renderer
        .create(<CourseSummary courseSummary={course.summary}/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});