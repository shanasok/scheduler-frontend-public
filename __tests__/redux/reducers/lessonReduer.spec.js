import lessonReducer from '../../../src/redux/reducers/lessonReducer';
import {SET_CURRENT_LESSON} from '../../../src/redux/actions/actionTypes';

describe('lessonReducer', () => {
    it('should create a reducer to set current lesson', () => {
        const initialState = {};
        const action = {
            type: SET_CURRENT_LESSON,
                payload: {
                currentLesson: '{' +
                    'id: 1, ' +
                    'name: "Introduction", ' +
                    'lessonNumber: 1,' +
                    'pages: [], '+
                '}'
            }
        }
        expect(lessonReducer(initialState,action)).toEqual('{' +
            'id: 1, ' +
            'name: "Introduction", ' +
            'lessonNumber: 1,' +
            'pages: [], '+
            '}');
    })
})