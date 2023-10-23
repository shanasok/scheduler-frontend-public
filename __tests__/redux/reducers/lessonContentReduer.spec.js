import lessonContentReducer from '../../../src/redux/reducers/lessonContentReducer';
import {SET_CURRENT_LESSON_CONTENT} from '../../../src/redux/actions/actionTypes';

describe('lessonContentReducer', () => {
    it('should create a reducer to set current lesson content', () => {
        const initialState = {};
        const action = {
            type: SET_CURRENT_LESSON_CONTENT,
                payload: {
                currentLessonContent:
                    'id: 4, ' +
                    'name: "Introduction", ' +
                    'lessonNumber: 1, ' +
                    'pages: [ ' +
                    '{' +
                        'id: 1, ' +
                        'pageNumber: 1, ' +
                        'pageContent: [ ' +
                            '{' +
                                'contentNumber: 2, ' +
                                'content: { ' +
                                    'id: 2, ' +
                                    'contentType: "DEFINITION", ' +
                                    'term: "JVM", ' +
                                    'explanation: "Java Virtual Machine" ' +
                                '}' +
                            '},' +
                            '{' +
                                'contentNumber: 1, ' +
                                'content: { ' +
                                    'id: 1, ' +
                                    'contentType: "FACT", ' +
                                    'fact: "Java is an object-oriented programming language" ' +
                                '}' +
                            '}' +
                        ']' +
                    '}' +
                ']'
            }
        }
        expect(lessonContentReducer(initialState,action)).toEqual(
        'id: 4, ' +
                'name: "Introduction", ' +
                'lessonNumber: 1, ' +
                'pages: [ ' +
                    '{' +
                        'id: 1, ' +
                        'pageNumber: 1, ' +
                        'pageContent: [ ' +
                            '{' +
                                'contentNumber: 2, ' +
                                'content: { ' +
                                    'id: 2, ' +
                                    'contentType: "DEFINITION", ' +
                                    'term: "JVM", ' +
                                    'explanation: "Java Virtual Machine" ' +
                                '}' +
                            '},' +
                            '{' +
                                'contentNumber: 1, ' +
                                'content: { ' +
                                    'id: 1, ' +
                                    'contentType: "FACT", ' +
                                    'fact: "Java is an object-oriented programming language" ' +
                                '}' +
                            '}' +
                        ']' +
                    '}' +
                ']'
        );
    })
})