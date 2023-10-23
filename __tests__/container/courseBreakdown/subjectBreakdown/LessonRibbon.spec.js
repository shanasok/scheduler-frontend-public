import React from 'react';
import LessonRibbon,{populateLessons} from '../../../../src/container/courseBreakdown/subjectBreakdown/LessonRibbon';
import renderer from 'react-test-renderer';
import {lessons as mockLessons} from '../../../../__mocks__/dataMock.js';

it('renders correctly', () => {
    const lessons = {
        name: "Threading the Machine",
        lessonNumber: 1,
    }
    const tree = renderer
        .create(<LessonRibbon lessons={lessons}/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it('populateLessons returns undefined if nothing passed in', () => {
    const result = populateLessons();
    expect(result).toBeUndefined();
});

it('populateLessons returns array of size 2 if 2 lessons passed in', () => {
    const result = populateLessons(mockLessons);
    expect(result.length).toBe(2);
});