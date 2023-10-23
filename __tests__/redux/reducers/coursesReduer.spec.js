import coursesReducer from '../../../src/redux/reducers/coursesReducer';
import {LOAD_COURSES} from '../../../src/redux/actions/actionTypes';


describe('coursesReducer', () => {
    it('should create a reducer to set courses', () => {
        const initialState = {};
        const action = {
            type: LOAD_COURSES,
                payload: {
                courses: '{java}'
            }
        }
        expect(coursesReducer(initialState,action)).toEqual('{java}')
    })
})