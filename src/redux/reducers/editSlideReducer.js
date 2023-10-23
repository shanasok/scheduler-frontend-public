import {SET_EDIT_SLIDE_TRUE, SET_EDIT_SLIDE_FALSE} from "../actions/actionTypes";

const initialState = {};

export default function editSlideReducer(state = initialState, action) {
    switch (action.type) {
        case SET_EDIT_SLIDE_TRUE: {
            return action.payload.setEditSlide;
        }
        case SET_EDIT_SLIDE_FALSE: {
            return action.payload.setEditSlide;
        }
        default:
            return state;
    }
}
