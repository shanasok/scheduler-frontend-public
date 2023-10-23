import React from 'react';
import SubjectName from '../../../../src/container/courseBreakdown/subjectBreakdown/SubjectName';
import renderer from 'react-test-renderer';


it('renders correctly', () => {
    const name = "testName";
    const tree = renderer
        .create(<SubjectName name={name}/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});