import React from 'react';
import SubjectDetails from '../../../../src/container/courseBreakdown/subjectBreakdown/SubjectDetails';
import renderer from 'react-test-renderer';


it('renders correctly', () => {
    const subject = {
        name: "Threading the Machine",
        summary: "testSummary",
        subjectNumber: 1,
    }
    const tree = renderer
        .create(<SubjectDetails subject={subject}/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});