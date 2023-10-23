import { SET_EDIT_SLIDE_TRUE, SET_EDIT_SLIDE_FALSE } from "./actionTypes"

// ActionlessonsAction.jss are payloads of information that send data from your application to your store.

export function setEditSlideTrue() {
    return {
        type: SET_EDIT_SLIDE_TRUE,
        payload: {
            setEditSlide: true
        }
    }
}

export function setEditSlideFalse() {
    return {
        type: SET_EDIT_SLIDE_FALSE,
        payload: {
            setEditSlide: false
        }
    }
}