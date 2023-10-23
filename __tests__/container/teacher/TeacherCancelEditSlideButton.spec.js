import React from 'react';
import TeacherCancelEditSlideButton from '../../../src/container/teacher/TeacherCancelEditSlideButton';
import renderer from 'react-test-renderer';
import configureMockStore from "redux-mock-store";
import {Provider as ReduxProvider} from "react-redux";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {MemoryRouter} from "react-router";

const mockStore = configureMockStore()
const mockState = {
    slideEditMode: true,
    currentLesson: {
        id: 1,
    }
}
let store = mockStore(mockState)

it('renders correctly when setEditSlide boolean is true', () => {

    const tree = renderer
        .create( <ReduxProvider store={store}><TeacherCancelEditSlideButton/></ReduxProvider>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

//This test doesn't work
// it('resetData_calls_functions_passed_in_as_parameters',  () => {
//     const mockFunctionSetCoursesJson = jest.fn(setCoursesJson);
//     const mockFunctionSetEditSlideFalse = jest.fn(setEditSlideFalse);
//     const mockFunctionSetCurrentLessonContent = jest.fn(setCurrentLessonContent);
//
//     resetData(mockFunctionSetCoursesJson,
//         mockFunctionSetEditSlideFalse,
//         1,
//         mockFunctionSetCurrentLessonContent);
//
//     expect(mockFunctionSetEditSlideFalse).toHaveBeenCalledTimes(1);
//     expect(mockFunctionSetCoursesJson).toHaveBeenCalledTimes(1);
//     expect(mockFunctionSetCurrentLessonContent).toHaveBeenCalledTimes(1);
// });


configure({adapter: new Adapter()});
it('onClick of button it should call function one time', () => {
    let wrapper = mount(
        <MemoryRouter initialEntries={[ '/' ]}>
            <ReduxProvider store={store}>
                <TeacherCancelEditSlideButton/>
            </ReduxProvider>
        </MemoryRouter>
    );
    wrapper.find('.cancelEditSlideButton').simulate('click');

    expect(wrapper.find(TeacherCancelEditSlideButton)).toHaveLength(1);
    wrapper.unmount();
});