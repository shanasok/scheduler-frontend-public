import * as actions from '../../../src/redux/actions/coursesAction';
import {LOAD_COURSES} from '../../../src/redux/actions/actionTypes';


describe('actions', () => {
    it('should create an action to set courses', () => {
        const coursesJson = '{java}';
        const expectedAction = {
            type: LOAD_COURSES,
            payload: {
                courses: coursesJson
            }
        }
        expect(actions.setCoursesJson(coursesJson)).toEqual(expectedAction)
    })
})