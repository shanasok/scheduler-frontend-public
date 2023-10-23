import React from 'react';
import KnowledgePointFactEdit from '../../../src/container/slideInfo/KnowledgePointFactEdit';
import renderer from 'react-test-renderer';
import configureMockStore from "redux-mock-store";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Provider as ReduxProvider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {MemoryRouter} from "react-router";

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

it('renders correctly when fact is given', () => {

    const content = {
        contentType: "FACT",
        fact: "Test Fact",
        id: "1",
    }

    const tree = renderer
        .create(<BrowserRouter><ReduxProvider store={store}><KnowledgePointFactEdit content={content}/></ReduxProvider></BrowserRouter>)
        .toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree.children[1].props['defaultValue']).toContain(content.fact);
});

it('renders correctly when fact is not given', () => {

    const tree = renderer
        .create(<BrowserRouter><ReduxProvider store={store}><KnowledgePointFactEdit /></ReduxProvider></BrowserRouter>)
        .toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree.children[1].props['defaultValue']).toContain("");
});


it("should call setState with new fact val", () => {
    const content = {
        'newVal':'testVal',
    }

    const mockEventFact = {
        target: {
            value: "newTestVal"
        }
    };

    const expected = {
        'newVal':'newTestVal',
    }

    let wrapper = mount(
        <MemoryRouter initialEntries={[ '/' ]}>
            <ReduxProvider store={store}>
                <KnowledgePointFactEdit content={content}/>
            </ReduxProvider>
        </MemoryRouter>
    );

    wrapper.find('.factEditBox').simulate('change',mockEventFact);
    wrapper.instance().updateLocalState = jest.fn();
    wrapper.instance().updateLocalState(mockEventFact);
    expect(wrapper.instance().updateLocalState).toHaveBeenCalledWith(mockEventFact);

    expect(wrapper.childAt(0).childAt(0).childAt(0).childAt(0).childAt(0)
        .instance().state).toEqual(expected);
});