import { LOAD_COURSES } from "../actions/actionTypes";

const initialState = {};

export default function coursesReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_COURSES: {
            return action.payload.courses;
            // return {
            //     ...state,
            //     courses: action.payload.courses
            // };
        }
        default:
            return state;
    }
}
