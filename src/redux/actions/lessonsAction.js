import { SET_CURRENT_LESSON } from "./actionTypes";

// ActionlessonsAction.jss are payloads of information that send data from your application to your store.

export function setCurrentLesson(currentLesson) {
    return {
        type: SET_CURRENT_LESSON,
        payload: {
            currentLesson: currentLesson
        }
    }
}
