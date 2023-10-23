import React from 'react';
import {CourseStructuredData, makeCourseSchema} from '../../../src/container/structuredData/CourseStructuredData';
import renderer from 'react-test-renderer';

it('renders correctly', () => {

    const course = {
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

    const tree = renderer
        .create(<CourseStructuredData course={course}/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it('accesses course details correctly when course provided', () => {

    const course = {
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

    const structuredDataSchema = makeCourseSchema(course);
    expect(structuredDataSchema).toBeDefined();
    expect(structuredDataSchema.name).toEqual(course.name);
    expect(structuredDataSchema.description).toEqual(course.summary);
});

it('accesses course details correctly when course not provided', () => {

    const structuredDataSchema = makeCourseSchema();
    expect(structuredDataSchema).toBeDefined();
    expect(structuredDataSchema.name).toEqual("");
    expect(structuredDataSchema.description).toEqual("");
});