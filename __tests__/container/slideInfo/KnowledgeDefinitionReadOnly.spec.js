import React from 'react';
import KnowledgeDefinitionReadOnly from '../../../src/container/slideInfo/KnowledgeDefinitionReadOnly';
import renderer from 'react-test-renderer';
import {Provider as ReduxProvider} from "react-redux";
import configureMockStore from "redux-mock-store";
import {configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

it('readonly renders correctly when definition is given', () => {

    const content = {
        contentType: "DEFINITION",
        explanation: "test explanation",
        term: "test term",
        id: "1",
    }

    const tree = renderer
        .create(<ReduxProvider store={store}><KnowledgeDefinitionReadOnly content={content}/></ReduxProvider>)
        .toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree.children).toContain(content.explanation);
    expect(tree.children).toContain(content.term);
});

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
configure({adapter: new Adapter()});

it('readonly renders correctly when definition is not given', () => {

    const tree = renderer
        .create(<ReduxProvider store={store}><KnowledgeDefinitionReadOnly/></ReduxProvider>)
        .toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree.children).toContain("");
});

it('Shows icons when slideEditMode is true', () => {

    const mockStore1 = configureMockStore()
    const mockState1 = {
        lesson: lesson,
        slideEditMode: true
    }
    let store1 = mockStore1(mockState1)

    const tree = renderer
        .create(<ReduxProvider store={store1}><KnowledgeDefinitionReadOnly /></ReduxProvider>)
        .toJSON();
    expect(tree.children[0].type).toEqual('i');
});

it('Does not show icons when slideEditMode is false', () => {

    const mockStore1 = configureMockStore()
    const mockState1 = {
        lesson: lesson,
        slideEditMode: false
    }
    let store1 = mockStore1(mockState1)

    const tree = renderer
        .create(<ReduxProvider store={store1}><KnowledgeDefinitionReadOnly /></ReduxProvider>)
        .toJSON();
    expect(tree.children[2]).toEqual("");
});