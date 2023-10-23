import React from 'react';
import LessonSlide from '../../../../../src/container/courseBreakdown/subjectBreakdown/LessonBreakdown/LessonSlide';
import renderer from 'react-test-renderer';
import {Router} from "react-router-dom";
import { createMemoryHistory } from "history";
import {Provider as ReduxProvider} from "react-redux";
import configureMockStore from "redux-mock-store";

const currentPage = {
    id: 1,
    pageNumber: 1,
};

const lesson = {
    id: 1,
    name: "test lesson name",
    lessonNumber: 1,
    pages: [currentPage],
};

const mockStore = configureMockStore()
const mockState = {
    currentLesson: lesson,
    currentPage: currentPage,
}
let store = mockStore(mockState)

it('renders correctly', () => {

    const history = createMemoryHistory();
    history.location.state = {
        lesson: {
            id: 1,
            name: "Threading the Machine",
            lessonNumber: 1,
            pages:[],
        }
    };

    const tree = renderer
        .create(<ReduxProvider store={store}><Router history={history}><LessonSlide/></Router></ReduxProvider>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it('redirects when lesson has no pages', () => {

    const history = createMemoryHistory();
    history.location.state = {
        lesson: {
            id: 1,
            name: "Threading the Machine",
            lessonNumber: 1,
        }
    };

    const lesson = {
        id: 1,
        name: "test lesson name",
        lessonNumber: 1,
    };

    const mockStore = configureMockStore()
    const mockState = {
        currentLesson: lesson,
        currentPage: currentPage,
    }
    let store = mockStore(mockState)

    const tree = renderer
        .create(<ReduxProvider store={store}><Router history={history}><LessonSlide/></Router></ReduxProvider>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
