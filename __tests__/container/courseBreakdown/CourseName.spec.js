import React from 'react';
import CourseName from '../../../src/container/courseBreakdown/CourseName';
import renderer from 'react-test-renderer';


it('renders correctly', () => {
    const course = {
        name: "java",
        summary: "java summary"
    }
    const tree = renderer
        .create(<CourseName courseName={course.name}/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});