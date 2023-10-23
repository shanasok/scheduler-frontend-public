import React from 'react';
import configureMockStore from 'redux-mock-store'
import renderer from 'react-test-renderer';
import MainCourseChooser from '../../../src/container/Main/MainCourseChooser';
import {Provider as ReduxProvider} from "react-redux";
import { createMemoryHistory } from "history";

const courses = [
    {
        name: "testCourseName",
        summary: "testCourseSummary",
        subjects: [
            {
                name: "testSubjectName",
                summary: "testSubjectSummary",
                subjectNumber: 1
            }
        ]
    },
];

const history = createMemoryHistory();
history.location.state = {
    courses: courses,
}

const mockStore = configureMockStore()
const mockState = courses
let store = mockStore(mockState)

it('renders correctly', () => {

    const tree = renderer
        .create(<ReduxProvider store={store}><MainCourseChooser /></ReduxProvider>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});



// .create(<Router history={history}><CourseDetails /></Router>)
// .create(<ReduxProvider store={store}><Router history={history}><MainCourseChooser courses={courses}/></Router></ReduxProvider>)
// .create(<ReduxProvider store={store}><MainCourseChooser/></ReduxProvider>)
// .create(<Router history={history}><MainCourseChooser/></Router>)

