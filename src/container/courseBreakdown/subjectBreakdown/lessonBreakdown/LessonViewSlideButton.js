import React from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setCurrentLesson } from "../../../../redux/actions/lessonsAction";
import { setCurrentPage } from "../../../../redux/actions/pageAction"

//properties is the props that is passed in
export function setReduxLessonAndPage(properties){
    properties.actions.setCurrentLesson(properties.lesson);
    if (properties.lesson.pages[0])
        properties.actions.setCurrentPage(properties.lesson.pages[0])
}

class LessonViewSlideButton extends React.Component {

    render() {
        // return <Link to={{ pathname: "/lesson",  state:{ lesson: this.props.lesson } }}>
        const properties = this.props;
        return <Link to={{ pathname: "/lesson"}}>
            <button className="lessonViewButton ribbonSlideButton curvedButton"
                    onClick={() => setReduxLessonAndPage(properties)}>
                Slides
            </button>
        </Link>
    }
}

const mapStateToProps = state => ({

});

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            setCurrentLesson,
            setCurrentPage,
        }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LessonViewSlideButton)