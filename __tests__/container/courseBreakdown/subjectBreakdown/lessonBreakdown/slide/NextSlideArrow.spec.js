import React from 'react';
import NextSlideArrow from '../../../../../../src/container/courseBreakdown/subjectBreakdown/lessonBreakdown/slide/NextSlideArrow';
import {setCurrentPage} from "../../../../../../src/redux/actions/pageAction";
import {Provider as ReduxProvider} from "react-redux";
import configureMockStore from "redux-mock-store";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {MemoryRouter} from "react-router";
import { createMemoryHistory } from "history";
import renderer from 'react-test-renderer';
import {Router} from "react-router-dom";


it('renders correctly', () => {
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
            <NextSlideArrow currentPageNumber={2} totalNumberOfPages={3} />
        </Router></ReduxProvider>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

configure({adapter: new Adapter()});
it('setCurrentPageNext calls next page when another page exists', () => {
    const mockStore = configureMockStore();
    let mockSetCurrentPage = jest.fn(setCurrentPage);

    const currentPage = {
        id: 1,
        pageNumber: 1,
    };
    const otherPage = {
        id: 2,
        pageNumber: 2,
    }
    const lesson = {
        id: 1,
        name: "test lesson name",
        lessonNumber: 1,
        pages: [currentPage, otherPage],
    }
    const properties = {
        currentLesson: lesson,
        currentPage: currentPage,
        actions: { setCurrentPage: mockSetCurrentPage },
    };
    let store = mockStore(properties)

    let wrapper = mount(
        <MemoryRouter initialEntries={[ '/' ]}>
            <ReduxProvider store={store}>
                <NextSlideArrow />
            </ReduxProvider>
        </MemoryRouter>
    );

    wrapper.find('.arrow').at(0).simulate('click');
    expect(store.getActions()[0].type).toEqual('SET_CURRENT_PAGE');
    // expect(mockSetCurrentPage.mock.calls.length).toBe(1);
});


it('setCurrentPageNext does not call next page if it is the last page', () => {
    const mockStore = configureMockStore();
    let mockSetCurrentPage = jest.fn(setCurrentPage);

    const currentPage = {
        id: 2,
        pageNumber: 2,
    };
    const otherPage = {
        id: 1,
        pageNumber: 1,
    }
    const lesson = {
        id: 1,
        name: "test lesson name",
        lessonNumber: 1,
        pages: [currentPage, otherPage],
    }
    const properties = {
        currentLesson: lesson,
        currentPage: currentPage,
        actions: { setCurrentPage: mockSetCurrentPage },
    };
    let store = mockStore(properties)

    let wrapper = mount(
        <MemoryRouter initialEntries={[ '/' ]}>
            <ReduxProvider store={store}>
                <NextSlideArrow />
            </ReduxProvider>
        </MemoryRouter>
    );

    wrapper.find('.arrow').simulate('click');
    expect(mockSetCurrentPage.mock.calls.length).toBe(0);
});

it('setCurrentPageNext does not call next page if there are no pages at all', () => {
    const mockStore = configureMockStore();
    let mockSetCurrentPage = jest.fn(setCurrentPage);

    const currentPage = {
        id: 2,
        pageNumber: 2,
    };

    const lesson = {
        id: 1,
        name: "test lesson name",
        lessonNumber: 1,
        pages: [currentPage],
    }
    const properties = {
        currentLesson: lesson,
        currentPage: currentPage,
        actions: { setCurrentPage: mockSetCurrentPage },
    };
    let store = mockStore(properties)

    let wrapper = mount(
        <MemoryRouter initialEntries={[ '/' ]}>
            <ReduxProvider store={store}>
                <NextSlideArrow />
            </ReduxProvider>
        </MemoryRouter>
    );

    wrapper.find('.arrow').simulate('click');
    expect(mockSetCurrentPage.mock.calls.length).toBe(0);
});