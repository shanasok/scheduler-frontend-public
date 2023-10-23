import React from 'react';
import TeacherSaveEditsSlideButton, {saveAndCloseSlideEditor} from '../../../src/container/teacher/TeacherSaveEditsSlideButton';
import renderer from 'react-test-renderer';
import configureMockStore from "redux-mock-store";
import {Provider as ReduxProvider} from "react-redux";
import {configure, mount} from "enzyme";
import {MemoryRouter} from "react-router";
import Adapter from "enzyme-adapter-react-16";
import {setEditSlideFalse} from "../../../src/redux/actions/editSlideAction";


configure({adapter: new Adapter()});

it('renders correctly when setEditSlide boolean is true', () => {

    const mockStore = configureMockStore()
    const mockState = {
        slideEditMode: true,
    }
    let store = mockStore(mockState);

    const tree = renderer
        .create( <ReduxProvider store={store}><TeacherSaveEditsSlideButton/></ReduxProvider>)
        .toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree.children).toContain("Save Changes");
});

describe('testing saveAndCloseSlideEditor', () => {
    it('testing saveAndCloseSlideEditor calls reducer method that is passed in', () => {
        const mockFunction = jest.fn();
        saveAndCloseSlideEditor(mockFunction);
        expect(mockFunction.mock.calls.length).toBe(1);
    });

    it('testing onClick calls the function we pass in.', () => {
        const mockStore = configureMockStore()
        const mockFunction = jest.fn(setEditSlideFalse);

        const mockState = {
            slideEditMode: true,
            actions: { setEditSlideFalse: mockFunction },
        }

        let store = mockStore(mockState)

        let wrapper = mount(
            <MemoryRouter initialEntries={[ '/' ]}>
                <ReduxProvider store={store}>
                    <TeacherSaveEditsSlideButton />
                </ReduxProvider>
            </MemoryRouter>
        );

        wrapper.find('.saveEditsButton').at(0).simulate('click');
        expect(store.getActions()[0].type).toEqual('SET_EDIT_SLIDE_FALSE');
    });
});