import React from 'react';
import MainCourses, { populateCourseOption } from '../../../src/container/Main/MainCourses';
import renderer from 'react-test-renderer';
// import {describe, expect} from "@jest/globals";

it('renders correctly', () => {
    const tree = renderer
        .create(<MainCourses/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

const testCourses =  [{
    name: "testCourseName",
        summary: "testCourseSummary",
        subjects: [
        {
            name: "testSubjectName",
            summary: "testSubjectSummary",
            subjectNumber: 1
        }
    ]
}]

describe('populateCourseOption', () => {
    it('should return undefined if courses is empty', () => {
        const courses = null;
        expect(populateCourseOption(courses)).toBeUndefined();
    });

    it('should return map of size 1 when passing in 1 course', () => {
        const result = populateCourseOption(testCourses);
        expect(result.length).toBe(1);
    })
})