import React from 'react';
import renderer from 'react-test-renderer';
import configureMockStore from "redux-mock-store";
import {Provider as ReduxProvider} from "react-redux";
import {setCurrentLessonContent} from "../../../src/redux/actions/lessonContentAction";
import TeacherEditPageContentIcon, {updateLessonContentToMakeItEditable, showTextBox} from "../../../src/container/teacher/TeacherEditPageContentIcon";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {MemoryRouter} from "react-router";

const mockStore = configureMockStore()
const mockState = {
    slideEditMode: true,
}
let store = mockStore(mockState)

it('renders correctly when setEditSlide boolean is true', () => {

    const tree = renderer
        .create( <ReduxProvider store={store}><TeacherEditPageContentIcon/></ReduxProvider>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

const pageContent1 = {
    contentNumber: 1,
    content: {
        contentType: "FACT",
        fact: "Test Fact",
        id: 1,
        isEditable: false,
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

it('correctly sets pageContent.isEditable to true', () => {
    let lessonContentCopy = updateLessonContentToMakeItEditable(lesson,currentPage,1);
    expect(lessonContentCopy.pages[0].pageContent[0].isEditable).toEqual(true);
});

it('correctly shows text box when icon is clicked', () => {
    const mockFunction = jest.fn(setCurrentLessonContent);
    showTextBox(lesson, currentPage, 1, mockFunction)
    expect(mockFunction.mock.calls.length).toBe(1);
});

configure({adapter: new Adapter()});
it('click icon should call correct action', () => {
    const mockStore = configureMockStore();
    let mockSetCurrentLessonContent = jest.fn(setCurrentLessonContent);

    const pageContent1 = {
        contentNumber: 1,
        isEditable: false,
        content: {
            contentType: "FACT",
            fact: "Test Fact",
            id: 1,
        }
    };

    const pageContent2 = {
        contentNumber: 2,
        isEditable: false,
        content: {
            contentType: "FACT",
            fact: "Test Fact",
            id: 2,
        }
    };

    const otherPage = {
        id: 2,
        pageNumber: 2,
        pageContent: [pageContent2],
    };
    const currentPage = {
        id: 1,
        pageNumber: 1,
        pageContent: [pageContent1],
    }
    const lesson = {
        id: 1,
        name: "test lesson name",
        lessonNumber: 1,
        pages: [currentPage, otherPage],
    }
    const properties = {
        pageContentId: 1,
        lessonContent: lesson,
        currentLessonContent: lesson,
        currentPage: currentPage,
        actions: { setCurrentLessonContent: mockSetCurrentLessonContent },
    };
    let store = mockStore(properties)

    let wrapper = mount(
        <MemoryRouter initialEntries={[ '/' ]}>
            <ReduxProvider store={store}>
                <TeacherEditPageContentIcon pageContentId={1}/>
            </ReduxProvider>
        </MemoryRouter>
    );


    wrapper.find('.fa-edit').at(0).simulate('click');
    expect(store.getActions()[0].type).toEqual('SET_CURRENT_LESSON_CONTENT');
});
