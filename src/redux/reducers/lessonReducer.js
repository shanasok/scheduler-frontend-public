import { SET_CURRENT_LESSON } from "../actions/actionTypes";

const initialState = {};

export default function lessonReducer(state = initialState, action) {
    switch (action.type) {
        case SET_CURRENT_LESSON: {
            return action.payload.currentLesson;
        }
        default:
            return state;
    }
}
