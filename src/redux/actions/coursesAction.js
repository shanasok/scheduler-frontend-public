import { LOAD_COURSES } from "./actionTypes";

// Actions are payloads of information that send data from your application to your store.

export function setCoursesJson(coursesJson) {
    return {
        type: LOAD_COURSES,
        payload: {
            courses: coursesJson
        }
    }
}
