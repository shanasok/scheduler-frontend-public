import React from 'react';
import KnowledgeDefinitionEdit from '../../../src/container/slideInfo/KnowledgeDefinitionEdit';
import renderer from 'react-test-renderer';
import configureMockStore from "redux-mock-store";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Provider as ReduxProvider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {lessonContent} from "../../../__mocks__/lessonMock";
import {MemoryRouter} from "react-router";

const mockStore = configureMockStore()
const mockState = {
    lesson: lessonContent
}
let store = mockStore(mockState)
configure({adapter: new Adapter()});

it('renders correctly when definition is given', () => {

    const content = {
        contentType: "DEFINITION",
        explanation: "test explanation",
        term: "test term",
        id: "1",
    }

    const tree = renderer
        .create(<BrowserRouter><ReduxProvider store={store}><KnowledgeDefinitionEdit content={content}/></ReduxProvider></BrowserRouter>)
        .toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree.children[1].props['defaultValue']).toEqual(content.term);
    expect(tree.children[3].props['defaultValue']).toEqual(content.explanation);
});

it('renders correctly when definition is not given', () => {

    const tree = renderer
        .create(<BrowserRouter><ReduxProvider store={store}><KnowledgeDefinitionEdit /></ReduxProvider></BrowserRouter>)
        .toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree.children[1].props['defaultValue']).toEqual("");
});

it("should call setState on definition term", () => {
    const content = {
        'term':'testTerm',
        'explanation':'testExplanation',
    }

    const mockEventTerm = {
        target: {
            value: "newTestTerm"
        }
    };

    const mockEventExplanation = {
        target: {
            value: "newTestExplanation"
        }
    };

    const expected = {
        'termNewVal':'newTestTerm',
        'explanationNewVal':'newTestExplanation',
    }

    let wrapper = mount(
        <MemoryRouter initialEntries={[ '/' ]}>
            <ReduxProvider store={store}>
                <KnowledgeDefinitionEdit content={content}/>
            </ReduxProvider>
        </MemoryRouter>
    );

    wrapper.find('.definitionTermEditBox').simulate('change',mockEventTerm);
    wrapper.instance().updateKnowledgePointDefinitionTermInState = jest.fn();
    wrapper.instance().updateKnowledgePointDefinitionTermInState(mockEventTerm);
    expect(wrapper.instance().updateKnowledgePointDefinitionTermInState).toHaveBeenCalledWith(mockEventTerm);


    wrapper.find('.definitionExplanationEditBox').simulate('change',mockEventExplanation);
    wrapper.instance().updateKnowledgePointDefinitionExplanationInState = jest.fn();
    wrapper.instance().updateKnowledgePointDefinitionExplanationInState(mockEventExplanation);
    expect(wrapper.instance().updateKnowledgePointDefinitionExplanationInState).toHaveBeenCalledWith(mockEventExplanation);

    expect(wrapper.childAt(0).childAt(0).childAt(0).childAt(0).childAt(0)
        .instance().state).toEqual(expected);
});