import React from 'react';
import LessonDetails from '../../../../../src/container/courseBreakdown/subjectBreakdown/LessonBreakdown/LessonDetails';
import renderer from 'react-test-renderer';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from "history";
import configureMockStore from "redux-mock-store";
import {Main} from "../../../../../src/container/Main/Main";
import {Provider as ReduxProvider} from "react-redux";


const lesson = {
    id: 1,
    name: "test lesson name",
    lessonNumber: 1,
    pages: []
}

const course =  {
    name: "testCourseName",
    summary: "testCourseSummary",
    subjects: [
        {
            name: "testSubjectName",
            summary: "testSubjectSummary",
            subjectNumber: 1,
            lessons: [
                lesson
            ],
        }
    ]
}

const mockStore = configureMockStore()
const mockState = {
    lesson: lesson
}
let store = mockStore(mockState)

it('renders correctly', () => {
    const lesson = {
        name: "Threading the Machine",
        lessonNumber: 1,
    }

    const history = createMemoryHistory();
    history.location.state = {
        lesson: lesson
    }

    const tree = renderer
        .create(<ReduxProvider store={store}><Router history={history}><LessonDetails lesson={lesson}/></Router></ReduxProvider>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});