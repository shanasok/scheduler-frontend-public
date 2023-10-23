import { combineReducers } from "redux";
import coursesReducer from "./coursesReducer";
import lessonReducer from "./lessonReducer";
import lessonContentReducer from "./lessonContentReducer";
import editSlideReducer from "./editSlideReducer";
import pageReducer from "./pageReducer";

const rootReducer = combineReducers({
    courses: coursesReducer,
    currentLesson: lessonReducer,
    currentLessonContent: lessonContentReducer,
    slideEditMode: editSlideReducer,
    currentPage: pageReducer,
})

export default rootReducer;