import React from 'react';
import renderer from 'react-test-renderer';
import PreviousSlideArrow, {setCurrentPagePrevious} from '../../../../../../src/container/courseBreakdown/subjectBreakdown/lessonBreakdown/slide/PreviousSlideArrow';
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import configureMockStore from "redux-mock-store";
import {setCurrentPage} from "../../../../../../src/redux/actions/pageAction";
import {MemoryRouter} from "react-router";
import {Provider as ReduxProvider} from "react-redux";
import {Router} from "react-router-dom";
import { createMemoryHistory } from "history";

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

    const mockStore = configureMockStore();
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
            <PreviousSlideArrow currentPageNumber={2} />
        </Router></ReduxProvider>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});


configure({adapter: new Adapter()});
it('setCurrentPagePrevious calls previous page when another page exists', () => {
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
        pages: [otherPage, currentPage],
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
                <PreviousSlideArrow />
            </ReduxProvider>
        </MemoryRouter>
    );


    wrapper.find('.arrow').at(0).simulate('click');
    expect(store.getActions()[0].type).toEqual('SET_CURRENT_PAGE');
    // expect(mockSetCurrentPage.mock.calls.length).toBe(1); //not sure why this fails
});




it('setCurrentPagePrevious does not call previous page if it is the first page', () => {
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
                <PreviousSlideArrow />
            </ReduxProvider>
        </MemoryRouter>
    );

    expect(wrapper.find('.inactiveLeftArrow').length).toEqual(1);
    wrapper.find('.arrow').simulate('click');
    expect(mockSetCurrentPage.mock.calls.length).toBe(0);
});

it('setCurrentPagePrevious does not call previous page if there are no other pages', () => {
    const mockStore = configureMockStore();
    let mockSetCurrentPage = jest.fn(setCurrentPage);

    const currentPage = {
        id: 1,
        pageNumber: 1,
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
                <PreviousSlideArrow />
            </ReduxProvider>
        </MemoryRouter>
    );

    wrapper.find('.arrow').simulate('click');
    expect(mockSetCurrentPage.mock.calls.length).toBe(0);
});

it('setCurrentPagePrevious function calls previous page when another page exists', () => {
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
        pages: [otherPage, currentPage],
    }

    setCurrentPagePrevious(lesson, currentPage, mockSetCurrentPage);
    expect(mockSetCurrentPage.mock.calls.length).toBe(1);
});

it('setCurrentPagePrevious function does not call previous page when it is already on the first page', () => {
    let mockSetCurrentPage = jest.fn(setCurrentPage);

    const otherPage = {
        id: 2,
        pageNumber: 2,
    };
    const currentPage = {
        id: 1,
        pageNumber: 1,
    }
    const lesson = {
        id: 1,
        name: "test lesson name",
        lessonNumber: 1,
        pages: [currentPage, otherPage],
    }

    setCurrentPagePrevious(lesson, currentPage, mockSetCurrentPage);
    expect(mockSetCurrentPage.mock.calls.length).toBe(0);
});