import React from 'react';
import {Main} from '../../../src/container/Main/Main';
import renderer from 'react-test-renderer';
import {Provider as ReduxProvider} from "react-redux";
import configureMockStore from "redux-mock-store";
import Adapter from 'enzyme-adapter-react-16';
import {mount, configure, shallow} from "enzyme";
import {MemoryRouter} from "react-router";
import MainCourseChooser from "../../../src/container/Main/MainCourseChooser";

require('console.table');

const lesson = {
    id: 1,
    name: "test lesson name",
    lessonNumber: 1,
    pages: []
}

const course =  {
    name: "testCourseName",
        summary: "testCourseSummary",
        subjects: [
        {
            name: "testSubjectName",
            summary: "testSubjectSummary",
            subjectNumber: 1,
            lessons: [
                lesson
            ],
        }
    ]
}

const mockStore = configureMockStore()
const mockState = {
    lesson: lesson
}
let store = mockStore(mockState)

it('renders correctly', () => {
    const tree = renderer
        .create(<ReduxProvider store={store}><Main/></ReduxProvider>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

configure({adapter: new Adapter()});
it('valid path mainCourseChooser', () => {
    let wrapper = mount(
        <MemoryRouter initialEntries={[ '/' ]}>
            <ReduxProvider store={store}>
                <Main/>
            </ReduxProvider>
        </MemoryRouter>
    );
    expect(wrapper.find(MainCourseChooser)).toHaveLength(1);
    wrapper.unmount();
});

// it('invalid path retrieves not found', () => {
//     let wrapper = shallow(
//         <MemoryRouter initialEntries={[ '/unknown' ]} >
//             <ReduxProvider store={store}>
//                 <Main/>
//             </ReduxProvider>
//         </MemoryRouter>
//     );
//     expect(wrapper.find(NotFound)).toHaveLength(1);
// });

// it('valid path lesson', () => {
//     //        return <Link to={{ pathname: "/lesson",  state:{ lesson: this.props.lesson } }}>
//     const testProps = {
//        location: {
//             state: {
//                 lesson: lesson,
//             }
//         }
//     };
//     let wrapper = mount(
//         <MemoryRouter initialEntries={[ '/lesson' ]}>
//             <ReduxProvider store={store}>
//                 <Main {...testProps}/>
//             </ReduxProvider>
//         </MemoryRouter>
//     );
//     expect(wrapper).toBeDefined();
//     expect(wrapper.find(LessonSlide)).toHaveLength(1);
//     wrapper.unmount();
// });
