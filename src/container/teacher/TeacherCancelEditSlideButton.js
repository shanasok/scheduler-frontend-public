import React from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { setEditSlideFalse } from '../../redux/actions/editSlideAction';
import { getCourses } from "../../utils/coursesFetcherGraphQL";
import { setCoursesJson } from "../../redux/actions/coursesAction";
import {getLessonContent} from "../../utils/lessonContentFetcherGraphQL";

export function resetData(setCoursesJson, setEditSlideFalse, lessonId, setCurrentLessonContent){
    getCourses(setCoursesJson, setEditSlideFalse);
    getLessonContent(lessonId, setCurrentLessonContent);
}

class TeacherCancelEditSlideButton extends React.Component {

    render() {
        return <button className='cancelEditSlideButton curvedButton' onClick={
                () => resetData(this.props.actions.setCoursesJson,
                    this.props.actions.setEditSlideFalse,
                    this.props.lesson.id,
                    this.props.actions.setCurrentLessonContent
                )

            }>
                Exit Edit Mode
            </button>
    }
}

const mapStateToProps = state => ({
    lesson: state.currentLesson,
    slideEditMode: state.slideEditMode,
});

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            setCoursesJson,
            setEditSlideFalse,
        }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TeacherCancelEditSlideButton);