import { SET_CURRENT_PAGE } from "../actions/actionTypes";

const initialState = {};

export default function pageReducer(state = initialState, action) {
    switch (action.type) {
        case SET_CURRENT_PAGE: {
            return action.payload.currentPage;
        }
        default:
            return state;
    }
}
