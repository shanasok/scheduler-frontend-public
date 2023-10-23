import React from 'react';
import TeacherEditSlideButton from '../../../src/container/teacher/TeacherEditSlideButton';
import renderer from 'react-test-renderer';
import configureMockStore from "redux-mock-store";
import {Provider as ReduxProvider} from "react-redux";

const mockStore = configureMockStore()
const mockState = {
    slideEditMode: false,
}
let store = mockStore(mockState)

it('renders correctly when setEditSlide boolean is false', () => {

    const tree = renderer
        .create( <ReduxProvider store={store}><TeacherEditSlideButton/></ReduxProvider>)
        .toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree.children[0].children).toContain("Edit Slide");
});
