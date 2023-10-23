import React from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {setCurrentLessonContent} from "../../redux/actions/lessonContentAction"

import '../../css/SlideStyles.css';

export function showTextBox(lessonContent, currentPage, pageContentId, setCurrentLessonContent){
    let lessonContentWithEditFlagSet = updateLessonContentToMakeItEditable(lessonContent, currentPage, pageContentId);
    setCurrentLessonContent(lessonContentWithEditFlagSet);
}

export function updateLessonContentToMakeItEditable(lessonContent, currentPage, pageContentId){
    let lessonContentCopy = JSON.parse(JSON.stringify(lessonContent));
    let page = lessonContentCopy.pages.filter(pages => pages.id === currentPage.id);
    let pageContent = page[0].pageContent.filter(pageContent => pageContent.content.id === pageContentId);
    pageContent[0].isEditable = true;
    return lessonContentCopy;
}

class TeacherEditPageContentIcon extends React.Component {

    render() {
        return <i className="fas fa-edit mouseOverBecomeArrow"
                  onClick={() => showTextBox(this.props.currentLessonContent,
                      this.props.currentPage,
                      this.props.pageContentId,
                      this.props.actions.setCurrentLessonContent)}>
        </i>
    }
}

const mapStateToProps = state => ({
    currentLessonContent: state.currentLessonContent,
    currentPage: state.currentPage,
});

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            setCurrentLessonContent
        }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TeacherEditPageContentIcon);