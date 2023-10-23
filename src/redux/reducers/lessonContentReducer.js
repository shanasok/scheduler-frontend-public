import {SET_CURRENT_LESSON_CONTENT} from "../actions/actionTypes";

const initialState = {};

export default function lessonContentReducer(state = initialState, action) {
    switch (action.type) {
        case SET_CURRENT_LESSON_CONTENT: {
            return action.payload.currentLessonContent;
        }
        default:
            return state;
    }
}
