import React from 'react';
import LessonViewSlideButton, { setReduxLessonAndPage } from '../../../../../src/container/courseBreakdown/subjectBreakdown/LessonBreakdown/LessonViewSlideButton';
import renderer from 'react-test-renderer';
import {Router} from "react-router-dom";
import { createMemoryHistory } from "history";
import {Provider as ReduxProvider} from "react-redux";
import configureMockStore from "redux-mock-store";
import {setCurrentLesson} from "../../../../../src/redux/actions/lessonsAction";
import {setCurrentPage} from "../../../../../src/redux/actions/pageAction";
import {mount, configure} from "enzyme";
import {MemoryRouter} from "react-router";
import Adapter from "enzyme-adapter-react-16";


var expect = require('expect');


const lesson = {
    id: 1,
    name: "test lesson name",
    lessonNumber: 1,
    pages: []
}

const mockStore = configureMockStore()
const mockState = {
    lesson: lesson
}
let store = mockStore(mockState)

it('renders correctly', () => {

    const history = createMemoryHistory();
    const lesson = {
        name: "Threading the Machine",
        lessonNumber: 1,
        pages:[],
    };
    history.location.state = {
        lesson: lesson
    }

    const tree = renderer
        .create(<ReduxProvider store={store}><Router history={history}><LessonViewSlideButton lesson={lesson}/></Router></ReduxProvider>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

describe('populateLessonViewSlideButton', () => {
    it('should call both functions once', () => {
        const mockSetCurrentLesson = jest.fn(setCurrentLesson);
        const mockSetCurrentPage = jest.fn(setCurrentPage);
        const currentPage = {
            id: 1,
            pageNumber: 1,
        };
        const properties = {
            actions: {
                setCurrentLesson: mockSetCurrentLesson,
                setCurrentPage: mockSetCurrentPage,
            },
            lesson: {
                name: "Threading the Machine",
                lessonNumber: 1,
                pages: [currentPage],
            }
        };

        setReduxLessonAndPage(properties);
        expect(mockSetCurrentLesson.mock.calls.length).toBe(1);
        expect(mockSetCurrentPage.mock.calls.length).toBe(1);
    });

    it('should not set current page if there are no pages in the lesson', () => {
        const mockSetCurrentLesson = jest.fn(setCurrentLesson);
        const mockSetCurrentPage = jest.fn(setCurrentPage);
        const properties = {
            actions: {
                setCurrentLesson: mockSetCurrentLesson,
                setCurrentPage: mockSetCurrentPage,
            },
            lesson: {
                name: "Threading the Machine",
                lessonNumber: 1,
                pages: [],
            }
        };

        setReduxLessonAndPage(properties);
        expect(mockSetCurrentLesson.mock.calls.length).toBe(1);
        expect(mockSetCurrentPage.mock.calls.length).toBe(0);
    });

    const mockStore = configureMockStore()
    const mockState = {
        lesson: lesson
    }
    let store = mockStore(mockState)

    configure({adapter: new Adapter()});
    it('onClick of button it should call function one time', () => {
        let wrapper = mount(
            <MemoryRouter initialEntries={[ '/' ]}>
                <ReduxProvider store={store}>
                    <LessonViewSlideButton lesson={lesson}/>
                </ReduxProvider>
            </MemoryRouter>
        );
        wrapper.find('.lessonViewButton').simulate('click');

        expect(wrapper.find(LessonViewSlideButton)).toHaveLength(1);
        wrapper.unmount();
    });
});
