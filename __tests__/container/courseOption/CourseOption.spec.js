import React from 'react';
import {CourseOption} from '../../../src/container/courseOption/CourseOption';
import renderer from 'react-test-renderer';
import {BrowserRouter} from "react-router-dom";


it('renders correctly', () => {
    const course = {
        name: "java",
        summary: "java summary"
    }
    const tree = renderer
        .create(<BrowserRouter><CourseOption course={course}/></BrowserRouter>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders correctly when no course is passed in', () => {
    const tree = renderer
        .create(<BrowserRouter><CourseOption /></BrowserRouter>)
        .toJSON();
    expect(tree).toBeNull();
});