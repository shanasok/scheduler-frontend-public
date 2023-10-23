import * as actions from '../../../src/redux/actions/lessonsAction';
import {SET_CURRENT_LESSON} from '../../../src/redux/actions/actionTypes';


describe('actions', () => {
    it('should create an action to set current lesson', () => {
        const lessonJson = '{' +
            'id: 1, ' +
            'name: "Introduction", ' +
            'lessonNumber: 1,' +
            'pages: [], '+
        '}';
        const expectedAction = {
            type: SET_CURRENT_LESSON,
            payload: {
                currentLesson: lessonJson
            }
        }
        expect(actions.setCurrentLesson(lessonJson)).toEqual(expectedAction)
    })
})