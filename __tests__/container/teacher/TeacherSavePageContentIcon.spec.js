import TeacherSavePageContentIcon, {updateLessonContentToMakeItNotEditable} from "../../../src/container/teacher/TeacherSavePageContentIcon";
import {lessonContent} from "../../../__mocks__/lessonMock";
import {saveAndHideTextBox} from "../../../src/container/teacher/TeacherSavePageContentIcon";
import {setCurrentLessonContent} from "../../../src/redux/actions/lessonContentAction";
import configureMockStore from "redux-mock-store";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {MemoryRouter} from "react-router";
import {Provider as ReduxProvider} from "react-redux";
import React from "react";

it('updateLessonContentToMakeItNotEditable correctly makes pageContent not editable', () => {

    let currentPage = {id: 1, pageNumber: 1};
    let pageContentId = 4;
    let modifiedLessonContent = updateLessonContentToMakeItNotEditable(lessonContent, currentPage, pageContentId)
    expect(modifiedLessonContent.pages[0].pageContent[0].isEditable).toBeFalsy();
});



it('saveAndHideTextBox functions correctly calls modify content for Fact', () => {
    let originalLessonContent = {
        "id": 4,
        "name": "Introduction",
        "lessonNumber": 1,
        "pages": [
            {
                "id": 1,
                "pageNumber": 1,
                "pageContent": [
                    {
                        "contentNumber": 4,
                        "isEditable": false,
                        "content": {
                            "id": 4,
                            "contentType": "DEFINITION",
                            "term": "JVM",
                            "explanation": "Java Virtual Machine"
                        }
                    },
                    {
                        "contentNumber": 1,
                        "isEditable": false,
                        "content": {
                            "id": 1,
                            "contentType": "FACT",
                            "fact": "Java is an object-oriented programming language"
                        }
                    },
                    {
                        "contentNumber": 2,
                        "isEditable": false,
                        "content": {
                            "id": 2,
                            "contentType": "FACT",
                            "fact": "Java is platform independent"
                        }
                    },
                    {
                        "contentNumber": 3,
                        "isEditable": false,
                        "content": {
                            "id": 3,
                            "contentType": "FACT",
                            "fact": "Compiler converts Java code to Java bytecode"
                        }
                    },
                    {
                        "contentNumber": 5,
                        "isEditable": false,
                        "content": {
                            "id": 5,
                            "contentType": "FACT",
                            "fact": "JVM executes Java bytecode"
                        }
                    }
                ]
            },
            {
                "id": 2,
                "pageNumber": 2,
                "pageContent": []
            },
            {
                "id": 3,
                "pageNumber": 3,
                "pageContent": []
            }
        ]
    };

    let expectedContent = {
        "id": 4,
        "name": "Introduction",
        "lessonNumber": 1,
        "pages": [
            {
                "id": 1,
                "pageNumber": 1,
                "pageContent": [
                    {
                        "contentNumber": 4,
                        "isEditable": false,
                        "content": {
                            "id": 4,
                            "contentType": "DEFINITION",
                            "term": "JVM",
                            "explanation": "Java Virtual Machine"
                        }
                    },
                    {
                        "contentNumber": 1,
                        "isEditable": false,
                        "content": {
                            "id": 1,
                            "contentType": "FACT",
                            "fact": "new test fact data"
                        }
                    },
                    {
                        "contentNumber": 2,
                        "isEditable": false,
                        "content": {
                            "id": 2,
                            "contentType": "FACT",
                            "fact": "Java is platform independent"
                        }
                    },
                    {
                        "contentNumber": 3,
                        "isEditable": false,
                        "content": {
                            "id": 3,
                            "contentType": "FACT",
                            "fact": "Compiler converts Java code to Java bytecode"
                        }
                    },
                    {
                        "contentNumber": 5,
                        "isEditable": false,
                        "content": {
                            "id": 5,
                            "contentType": "FACT",
                            "fact": "JVM executes Java bytecode"
                        }
                    }
                ]
            },
            {
                "id": 2,
                "pageNumber": 2,
                "pageContent": []
            },
            {
                "id": 3,
                "pageNumber": 3,
                "pageContent": []
            }
        ]
    };

    let currentPage = {
        id: 1,
        pageNumber: 1,
    }

    let newValues={
        'fact':'new test fact data'
    }

    const mockSetCurrentLessonContent = jest.fn(setCurrentLessonContent);

    saveAndHideTextBox(originalLessonContent, currentPage,
        mockSetCurrentLessonContent, 1, newValues);

    expect(mockSetCurrentLessonContent).toBeCalledWith(expectedContent);
});

it('saveAndHideTextBox functions correctly calls modify content for Definition', () => {

    let originalLessonContent = {
        "id": 4,
        "name": "Introduction",
        "lessonNumber": 1,
        "pages": [
            {
                "id": 1,
                "pageNumber": 1,
                "pageContent": [
                    {
                        "contentNumber": 4,
                        "isEditable": false,
                        "content": {
                            "id": 4,
                            "contentType": "DEFINITION",
                            "term": "JVM",
                            "explanation": "Java Virtual Machine"
                        }
                    },
                    {
                        "contentNumber": 1,
                        "isEditable": false,
                        "content": {
                            "id": 1,
                            "contentType": "FACT",
                            "fact": "Java is an object-oriented programming language"
                        }
                    },
                    {
                        "contentNumber": 2,
                        "isEditable": false,
                        "content": {
                            "id": 2,
                            "contentType": "FACT",
                            "fact": "Java is platform independent"
                        }
                    },
                    {
                        "contentNumber": 3,
                        "isEditable": false,
                        "content": {
                            "id": 3,
                            "contentType": "FACT",
                            "fact": "Compiler converts Java code to Java bytecode"
                        }
                    },
                    {
                        "contentNumber": 5,
                        "isEditable": false,
                        "content": {
                            "id": 5,
                            "contentType": "FACT",
                            "fact": "JVM executes Java bytecode"
                        }
                    }
                ]
            },
            {
                "id": 2,
                "pageNumber": 2,
                "pageContent": []
            },
            {
                "id": 3,
                "pageNumber": 3,
                "pageContent": []
            }
        ]
    };

    let expectedContent = {
        "id": 4,
        "name": "Introduction",
        "lessonNumber": 1,
        "pages": [
            {
                "id": 1,
                "pageNumber": 1,
                "pageContent": [
                    {
                        "contentNumber": 4,
                        "isEditable": false,
                        "content": {
                            "id": 4,
                            "contentType": "DEFINITION",
                            "term": "JVM modified",
                            "explanation": "Java Virtual Machine modified"
                        }
                    },
                    {
                        "contentNumber": 1,
                        "isEditable": false,
                        "content": {
                            "id": 1,
                            "contentType": "FACT",
                            "fact": "Java is an object-oriented programming language"
                        }
                    },
                    {
                        "contentNumber": 2,
                        "isEditable": false,
                        "content": {
                            "id": 2,
                            "contentType": "FACT",
                            "fact": "Java is platform independent"
                        }
                    },
                    {
                        "contentNumber": 3,
                        "isEditable": false,
                        "content": {
                            "id": 3,
                            "contentType": "FACT",
                            "fact": "Compiler converts Java code to Java bytecode"
                        }
                    },
                    {
                        "contentNumber": 5,
                        "isEditable": false,
                        "content": {
                            "id": 5,
                            "contentType": "FACT",
                            "fact": "JVM executes Java bytecode"
                        }
                    }
                ]
            },
            {
                "id": 2,
                "pageNumber": 2,
                "pageContent": []
            },
            {
                "id": 3,
                "pageNumber": 3,
                "pageContent": []
            }
        ]
    };

    let currentPage = {
        id: 1,
        pageNumber: 1,
    }

    let newValues={
        "term": "JVM modified",
        "explanation": "Java Virtual Machine modified"
    }

    const mockSetCurrentLessonContent = jest.fn(setCurrentLessonContent);

    saveAndHideTextBox(originalLessonContent, currentPage,
        mockSetCurrentLessonContent, 4, newValues);

    expect(mockSetCurrentLessonContent).toBeCalledWith(expectedContent);
});

//
it('2saveAndHideTextBox functions correctly calls modify content for Definition', () => {

    let originalLessonContent = {
        "id": 4,
        "name": "Introduction",
        "lessonNumber": 1,
        "pages": [
            {
                "id": 1,
                "pageNumber": 1,
                "pageContent": [
                    {
                        "contentNumber": 4,
                        "isEditable": false,
                        "content": {
                            "id": 4,
                            "contentType": "DEFINITION",
                            "term": "JVM",
                            "explanation": "Java Virtual Machine"
                        }
                    },
                    {
                        "contentNumber": 1,
                        "isEditable": false,
                        "content": {
                            "id": 1,
                            "contentType": "FACT",
                            "fact": "Java is an object-oriented programming language"
                        }
                    },
                    {
                        "contentNumber": 2,
                        "isEditable": false,
                        "content": {
                            "id": 2,
                            "contentType": "FACT",
                            "fact": "Java is platform independent"
                        }
                    },
                    {
                        "contentNumber": 3,
                        "isEditable": false,
                        "content": {
                            "id": 3,
                            "contentType": "FACT",
                            "fact": "Compiler converts Java code to Java bytecode"
                        }
                    },
                    {
                        "contentNumber": 5,
                        "isEditable": false,
                        "content": {
                            "id": 5,
                            "contentType": "FACT",
                            "fact": "JVM executes Java bytecode"
                        }
                    }
                ]
            },
            {
                "id": 2,
                "pageNumber": 2,
                "pageContent": []
            },
            {
                "id": 3,
                "pageNumber": 3,
                "pageContent": []
            }
        ]
    };

    let expectedContent = {
        "id": 4,
        "name": "Introduction",
        "lessonNumber": 1,
        "pages": [
            {
                "id": 1,
                "pageNumber": 1,
                "pageContent": [
                    {
                        "contentNumber": 4,
                        "isEditable": false,
                        "content": {
                            "id": 4,
                            "contentType": "DEFINITION",
                            "term": "JVM modified",
                            "explanation": "Java Virtual Machine modified"
                        }
                    },
                    {
                        "contentNumber": 1,
                        "isEditable": false,
                        "content": {
                            "id": 1,
                            "contentType": "FACT",
                            "fact": "Java is an object-oriented programming language"
                        }
                    },
                    {
                        "contentNumber": 2,
                        "isEditable": false,
                        "content": {
                            "id": 2,
                            "contentType": "FACT",
                            "fact": "Java is platform independent"
                        }
                    },
                    {
                        "contentNumber": 3,
                        "isEditable": false,
                        "content": {
                            "id": 3,
                            "contentType": "FACT",
                            "fact": "Compiler converts Java code to Java bytecode"
                        }
                    },
                    {
                        "contentNumber": 5,
                        "isEditable": false,
                        "content": {
                            "id": 5,
                            "contentType": "FACT",
                            "fact": "JVM executes Java bytecode"
                        }
                    }
                ]
            },
            {
                "id": 2,
                "pageNumber": 2,
                "pageContent": []
            },
            {
                "id": 3,
                "pageNumber": 3,
                "pageContent": []
            }
        ]
    };

    let currentPage = {
        id: 1,
        pageNumber: 1,
    }

    let newValues={
        "term": "JVM modified",
        "explanation": "Java Virtual Machine modified"
    }

    const mockSetCurrentLessonContent = jest.fn(setCurrentLessonContent);

    saveAndHideTextBox(originalLessonContent, currentPage,
        mockSetCurrentLessonContent, 4, newValues);

    expect(mockSetCurrentLessonContent).toBeCalledWith(expectedContent);
});

//

configure({adapter: new Adapter()});
it('testing onClick calls the function we pass in.', () => {
    const mockStore = configureMockStore()
    const mockSetCurrentLessonContent = jest.fn(setCurrentLessonContent);

    let currentLessonContent = lessonContent;
    let currentPage = {
        id: 1,
        pageNumber: 1,
    }

    let newValues={
        "term": "JVM modified",
        "explanation": "Java Virtual Machine modified"
    }

    const mockState = {
        currentLessonContent: currentLessonContent,
        currentPage: currentPage,
        actions: { setCurrentLessonContent: mockSetCurrentLessonContent },
    }

    let store = mockStore(mockState);

    let wrapper = mount(
        <MemoryRouter initialEntries={[ '/' ]}>
            <ReduxProvider store={store}>
                <TeacherSavePageContentIcon contentId={4} newValues={newValues}/>
            </ReduxProvider>
        </MemoryRouter>
    );

    wrapper.find('.mouseOverBecomeArrow').at(0).simulate('click');
    expect(store.getActions()[0].type).toEqual('SET_CURRENT_LESSON_CONTENT');

});
