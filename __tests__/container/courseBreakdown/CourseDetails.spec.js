import React from 'react';
import CourseDetails, {populateCourseSubjects, sortLowestNumberFirst} from '../../../src/container/courseBreakdown/CourseDetails';
import renderer from 'react-test-renderer';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from "history";
import SubjectDetails from "../../../src/container/courseBreakdown/subjectBreakdown/SubjectDetails";


it('renders correctly', () => {

    const history = createMemoryHistory();
    history.location.state = {
        course: {
            name: "testCourseName",
            summary: "testCourseSummary",
            subjects: [
                {
                    name: "testSubjectName",
                    summary: "testSubjectSummary",
                    subjectNumber: 1
                }
            ]
        }
    }
    const tree = renderer
        .create(<Router history={history}><CourseDetails /></Router>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

describe('populateCourseSubjects', () => {

    const testSubjects = [
        {
            name: "testSubjectName",
            summary: "testSubjectSummary",
            subjectNumber: 1
        }
    ];

    it('should return undefined if subjects is empty', () => {
        const subjects = null;
        expect(populateCourseSubjects(subjects)).toBeUndefined();
    });

    it('should return map of size 1 when passing in 1 course', () => {
        const result = populateCourseSubjects(testSubjects, sortLowestNumberFirst);
        expect(result.length).toBe(1);
    })

    it('should call sort one time', () => {
        const mockSortFunction = jest.fn(sortLowestNumberFirst);
        const result = populateCourseSubjects(testSubjects, mockSortFunction);
        expect(mockSortFunction.mock.calls.length).toBe(1);
    })
})