import React from 'react';
import SubjectSummary from '../../../../src/container/courseBreakdown/subjectBreakdown/SubjectSummary';
import renderer from 'react-test-renderer';


it('renders correctly', () => {
    const summary = "testSummary";
    const tree = renderer
        .create(<SubjectSummary summary={summary}/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});