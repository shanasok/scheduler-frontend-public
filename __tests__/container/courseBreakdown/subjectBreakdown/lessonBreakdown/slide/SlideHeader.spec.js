import React from "react";
import configureMockStore from "redux-mock-store";
import renderer from "react-test-renderer";
import {Provider as ReduxProvider} from "react-redux";
import {Router} from "react-router-dom";
import { createMemoryHistory } from "history";

import SlideHeader from "../../../../../../src/container/courseBreakdown/subjectBreakdown/lessonBreakdown/slide/SlideHeader";

it('renders correctly', () => {

    const pageContent1 = {
        contentNumber: 1,
        content: {
            contentType: "FACT",
            fact: "Test Fact",
            id: 1,
        }
    };
    const currentPage = {
        id: 1,
        pageNumber: 1,
        pageContent: [pageContent1],
    };

    const lesson = {
        id: 1,
        name: "test lesson name",
        lessonNumber: 1,
        pages: [currentPage],
    };

    const mockStore = configureMockStore()
    const mockState = {
        currentLessonContent: lesson,
        currentPage: currentPage,
    }
    let store = mockStore(mockState)

    const history = createMemoryHistory();
    history.location.state = {
        currentLessonContent: {
            id: 1,
            name: "Threading the Machine",
            lessonNumber: 1,
            pages:[currentPage],
        }
    };

    const tree = renderer
        .create(<ReduxProvider store={store}><Router history={history}>
            <SlideHeader currentPage={currentPage}/>
        </Router></ReduxProvider>)
        .toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree.children[0].children[0].children[0]).toEqual("Edit Slide");

});

it('renders correctly with no pageContent', () => {

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
        .create(<ReduxProvider store={store}><Router history={history}>
            <SlideHeader currentPage={currentPage}/>
        </Router></ReduxProvider>)
        .toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree.children[0].children[0].children[0]).toEqual('Edit Slide');
});


it('renders cancel and save buttons when slideEditMode is true', () => {

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
        slideEditMode: true,
    }
    let store = mockStore(mockState)

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
        .create(<ReduxProvider store={store}><Router history={history}>
            <SlideHeader currentPage={currentPage}/>
        </Router></ReduxProvider>)
        .toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree.children[0].children[0].children[0].children[0]).toEqual('Cancel Edits');
    expect(tree.children[0].children[2].children[0]).toEqual('Save Changes');
});