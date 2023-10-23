import React from 'react';
import LessonDetails from "./lessonBreakdown/LessonDetails";

export function populateLessons(lessons){
    if (lessons && Array.isArray(lessons)) {
        return lessons
            .sort(function(a, b){return a.lessonNumber - b.lessonNumber}) //lowest number first
            .map(lesson =>
                <LessonDetails key={'lesson'+lesson.id} lesson={lesson}/>
            )
    }
}

class LessonRibbon extends React.Component {

    render() {
        const lessons = populateLessons(this.props.lessons);

        return <div className="lessonRibbon">
            {lessons}
        </div>
    }
}

export default LessonRibbon;