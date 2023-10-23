import { SET_CURRENT_LESSON_CONTENT } from "./actionTypes";

// ActionlessonsAction.jss are payloads of information that send data from your application to your store.

export function setCurrentLessonContent(currentLessonContent) {
    return {
        type: SET_CURRENT_LESSON_CONTENT,
        payload: {
            currentLessonContent: currentLessonContent
        }
    }
}