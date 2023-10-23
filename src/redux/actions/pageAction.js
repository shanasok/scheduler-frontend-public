import { SET_CURRENT_PAGE } from "./actionTypes";

// ActionlessonsAction.jss are payloads of information that send data from your application to your store.

export function setCurrentPage(currentPage) {
    return {
        type: SET_CURRENT_PAGE,
        payload: {
            currentPage: currentPage
        }
    }
}
