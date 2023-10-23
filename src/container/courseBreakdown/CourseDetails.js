import React from 'react';
import { withRouter } from "react-router-dom";
import SubjectDetails from "./subjectBreakdown/SubjectDetails";
import CourseName from "./CourseName";
import CourseSummary from "./CourseSummary";
import '../../css/CourseDetailsStyles.css';

export function sortLowestNumberFirst(subjects) {
    return subjects.sort(function(a, b){return a.subjectNumber - b.subjectNumber});
}
//.sort(function(a, b){return a.subjectNumber - b.subjectNumber}) //lowest number first
export function populateCourseSubjects(subjects, sortFunction){
    if (subjects && Array.isArray(subjects)) {
        sortFunction(subjects);
        return subjects
            .map(subject =>
                <SubjectDetails key={'subject'+subject.id} subject={subject}/>
            )
    }
}

class CourseDetails extends React.Component {

    render() {
        const courseName = this.props.location.state.course.name;
        const courseSummary = this.props.location.state.course.summary;
        const subjects = this.props.location.state.course.subjects;
        const courseSubjects = populateCourseSubjects(subjects, sortLowestNumberFirst);

        return <div className="courseDetails">
            <CourseName courseName={courseName} />
            <CourseSummary courseSummary={courseSummary} />
            { courseSubjects }
        </div>
    }
}

export default withRouter(CourseDetails);