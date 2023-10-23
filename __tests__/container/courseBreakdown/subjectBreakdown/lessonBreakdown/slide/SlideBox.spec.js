import React from "react";
import configureMockStore from "redux-mock-store";
import renderer from "react-test-renderer";
import {Provider as ReduxProvider} from "react-redux";
import {Router} from "react-router-dom";
import { createMemoryHistory } from "history";

import SlideBox, {
    chooseKnowledgePointTypeReadOnly,
    chooseKnowledgePointTypeEdit,
    getSlideKnowledgePoints,
    editOrReadOnlyKnowledgePoints
} from "../../../../../../src/container/courseBreakdown/subjectBreakdown/lessonBreakdown/slide/SlideBox";
import KnowledgePointDefinitionReadOnly from "../../../../../../src/container/slideInfo/KnowledgeDefinitionReadOnly";
import KnowledgePointDefinitionEdit from "../../../../../../src/container/slideInfo/KnowledgeDefinitionEdit";
import KnowledgePointFactReadOnly from "../../../../../../src/container/slideInfo/KnowledgePointFactReadOnly";
import KnowledgePointFactEdit from "../../../../../../src/container/slideInfo/KnowledgePointFactEdit";


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
            <SlideBox currentPage={currentPage}/>
        </Router></ReduxProvider>)
        .toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree.children[0]).toEqual("");

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
            <SlideBox currentPage={currentPage}/>
        </Router></ReduxProvider>)
        .toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree.children[0]).toEqual('No content on this slide yet');
});


it('test chooseKnowledgePointTypeReadOnly where content is null', () => {
    const result = chooseKnowledgePointTypeReadOnly();
    expect(result).toEqual(<span>Unknown Data Type</span>);
});

it('test chooseKnowledgePointTypeReadOnly where content is definition', () => {
    const content = {
        contentType: "DEFINITION",
        slideEditable: false,
    }

    const result = chooseKnowledgePointTypeReadOnly(content);
    expect(result.type).toEqual(KnowledgePointDefinitionReadOnly);
});

it('test chooseKnowledgePointTypeReadOnly where content is fact', () => {
    const content = {
        contentType: "FACT",
        slideEditable: false,
    }

    const result = chooseKnowledgePointTypeReadOnly(content);
    expect(result.type).toEqual(KnowledgePointFactReadOnly);
});

it('test chooseKnowledgePointTypeEdit where content is null', () => {
    const result = chooseKnowledgePointTypeEdit();
    expect(result).toEqual(<span>Unknown Data Type</span>);
});

it('test chooseKnowledgePointTypeEdit where content is definition', () => {
    const content = {
        contentType: "DEFINITION",
        slideEditable: true,
    }

    const result = chooseKnowledgePointTypeEdit(content);
    expect(result.type).toEqual(KnowledgePointDefinitionEdit);
});

it('test chooseKnowledgePointTypeEdit where content is fact', () => {
    const content = {
        contentType: "FACT",
        slideEditable: true,
    }

    const result = chooseKnowledgePointTypeEdit(content);
    expect(result.type).toEqual(KnowledgePointFactEdit);
});

it('test editOrReadOnlyKnowledgePoints chooses edit fact correctly', () => {

    const pageContent = {
        isEditable: true,
        content: {
            contentType: "FACT",
            fact: "Test Fact1",
            id: 1
        },
    }

    const result = editOrReadOnlyKnowledgePoints(pageContent);
    expect(Array.isArray(result));
    expect(result.type).toEqual(KnowledgePointFactEdit);
});

it('test getSlideKnowledgePoints with dodgy content', () => {

    const pageContent = [{
        contentNumber: 1,
        content: {
            contentType: "UNKONWNTYPE",
            fact: "Test Unknown Type",
            id: 1,
        }
    }];

    const result = getSlideKnowledgePoints(pageContent);
    expect(Array.isArray(result));
    expect(result[0].type).toEqual('span');
});

it('test getSlideKnowledgePoints with FACT', () => {

    const pageContent = [{
        contentNumber: 1,
        content: {
            contentType: "FACT",
            fact: "Test Fact",
            id: 1,
        }
    }];

    const result = getSlideKnowledgePoints(pageContent);
    expect(Array.isArray(result));
    expect(result[0].type).toEqual(KnowledgePointFactReadOnly);
});

//Just commented this out coz method getPageContent is commented out and I can't remember why
// it('test getPageContent in correct order', () => {
//
//     const pageContent1 = {
//         contentNumber: 1,
//         content: {
//             contentType: "FACT",
//             fact: "Test Fact",
//             id: 1,
//         }
//     };
//     const pageContent2 = {
//         contentNumber: 2,
//         content: {
//             contentType: "FACT",
//             fact: "Test Fact2",
//             id: 2,
//         }
//     };
//
//     const currentPage = {
//         id: 1,
//         pageNumber: 1,
//         pageContent: [pageContent1, pageContent2],
//     };
//
//     const lesson = {
//         id: 1,
//         name: "test lesson name",
//         lessonNumber: 1,
//         pages: [currentPage],
//     };
//
//     const result = getPageContentFromLessonContent(lesson, 1);
//     expect(result).toEqual([pageContent1, pageContent2]);
//     expect(result).toMatchObject([pageContent1, pageContent2])
// });
//
// it('test getPageContent in correct order v2', () => {
//
//     const pageContent1 = {
//         contentNumber: 1,
//         content: {
//             contentType: "FACT",
//             fact: "Test Fact",
//             id: 1,
//         }
//     };
//     const pageContent2 = {
//         contentNumber: 2,
//         content: {
//             contentType: "FACT",
//             fact: "Test Fact2",
//             id: 2,
//         }
//     };
//
//     const currentPage = {
//         id: 1,
//         pageNumber: 1,
//         pageContent: [pageContent2, pageContent1],
//     };
//
//     const lesson = {
//         id: 1,
//         name: "test lesson name",
//         lessonNumber: 1,
//         pages: [currentPage],
//     };
//
//     const result = getPageContentFromLessonContent(lesson, 1);
//     expect(result).toEqual([pageContent1, pageContent2]);
//     expect(result).toMatchObject([pageContent1, pageContent2])
// });
//
//
// it('test getPageContent with no content', () => {
//
//     const lesson = {
//         id: 1,
//         name: "test lesson name",
//         lessonNumber: 1,
//         pages: [],
//     };
//
//     const result = getPageContentFromLessonContent(lesson, 1);
//     expect(result).toBeUndefined();
// });