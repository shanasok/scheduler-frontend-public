import { LOAD_COURSES } from "./actionTypes";

// Actions are payloads of information that send data from your application to your store.

export const loadCourses = courses => ({
    type: LOAD_COURSES,
    payload: {
        courses: courses
    }
});
