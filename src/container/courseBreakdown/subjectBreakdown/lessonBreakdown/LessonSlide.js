import React from 'react';
// import * as PropTypes from "prop-types";
import { connect } from "react-redux";
import {withRouter, Redirect} from "react-router-dom";
import SlideHeader from "./slide/SlideHeader"
import SlideNumbers from "./slide/SlideNumbers";
import SlideChooser from "./slide/SlideChooser";

import '../../../../css/lessonStyles.css';
import {bindActionCreators, compose} from "redux";
import {setCurrentPage} from "../../../../redux/actions/pageAction";
import {setCurrentLessonContent} from "../../../../redux/actions/lessonContentAction";
import {getLessonContent} from "../../../../utils/lessonContentFetcherGraphQL";

class LessonSlide extends React.Component {

    componentDidMount() {
        getLessonContent(this.props.lesson.id, this.props.actions.setCurrentLessonContent);
    }

    render() {
        const lesson = this.props.lesson;
        if (lesson.pages === undefined) {
            return <Redirect to="/"/>
        }else {
            const currentPage = this.props.currentPage;
            const pageCountTotal = lesson.pages.length;
            const currentPageNumber = currentPage.pageNumber;

            return <div className="lessonSlide">
                <SlideHeader slideHeader={lesson.name}/>
                <SlideNumbers currentPageNumber={currentPageNumber} totalSlidesForLesson={pageCountTotal}/>
                <SlideChooser currentPage={currentPage} />
            </div>

        }
    }
}

const mapStateToProps = state => ({
    lesson: state.currentLesson,
    currentPage: state.currentPage,
});

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            setCurrentPage,
            setCurrentLessonContent,
        }, dispatch)
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(LessonSlide);

// LessonSlide.propTypes = {
//     location: PropTypes.shape({
//         state: PropTypes.shape({
//             lesson: PropTypes.shape({
//                 id: PropTypes.number.isRequired,
//                 name: PropTypes.string,
//                 lessonNumber: PropTypes.number,
//                 pages: PropTypes.array,
//             }).isRequired
//         })
//     })
// };