import * as actions from '../../../src/redux/actions/lessonContentAction';
import {SET_CURRENT_LESSON_CONTENT} from '../../../src/redux/actions/actionTypes';


describe('actions', () => {
    it('should create an action to set current lesson content', () => {
        const lessonContentJson =
            'id: 4, ' +
            'name: "Introduction", ' +
            'lessonNumber: 1, ' +
            'pages: [ ' +
                '{' +
                    'id: 1, ' +
                    'pageNumber: 1, ' +
                    'pageContent: [ ' +
                    '{' +
                        'contentNumber: 1, ' +
                        'content: { ' +
                            'id: 1, ' +
                            'contentType: "DEFINITION", ' +
                            'term: "JVM", ' +
                            'explanation: "Java Virtual Machine" ' +
                        '}' +
                    '},' +
                    '{' +
                        'contentNumber: 2, ' +
                        'content: { ' +
                            'id: 2, ' +
                            'contentType: "FACT", ' +
                            'fact: "Java is an object-oriented programming language" ' +
                        '}' +
                    '}' +
                    ']' +
                '}' +
            ']';
        const expectedAction = {
            type: SET_CURRENT_LESSON_CONTENT,
            payload: {
                currentLessonContent: lessonContentJson
            }
        }
        expect(actions.setCurrentLessonContent(lessonContentJson)).toEqual(expectedAction)
    })
})