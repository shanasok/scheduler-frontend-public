import React from 'react';
import '../../../../css/lessonStyles.css';
import LessonViewSlideButton from "./LessonViewSlideButton";
import RibbonLessonName from "./RibbonLessonName";

class LessonDetails extends React.Component {

    render() {
        return <div className="lesson">
            {/*{this.props.lesson.name}*/}
            <RibbonLessonName name={this.props.lesson.name}/>
            <LessonViewSlideButton lesson={this.props.lesson}/>
        </div>
    }
}

export default LessonDetails;