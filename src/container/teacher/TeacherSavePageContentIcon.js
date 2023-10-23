import React from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {setCurrentLessonContent} from "../../redux/actions/lessonContentAction"

import '../../css/SlideStyles.css';
import {modifyContent} from "../../utils/updateLessonContentJSON";
import {KnowledgeType} from "../../utils/KnowledgeType";
import {getKnowledgePointFromLessonContent} from "../../utils/findContent";
import {persistDefinition, persistFact} from "../../utils/persistContent";

export function saveAndHideTextBox(lessonContent, currentPage,
                                   setCurrentLessonContent, contentId, newValues){
    let lessonContentWithEditFlagUnSet = updateLessonContentToMakeItNotEditable(lessonContent, currentPage, contentId);
    let knowledgePoint = getKnowledgePointFromLessonContent(lessonContent, currentPage.pageNumber, contentId)

    let updatedLessonContent = lessonContent;
    if (knowledgePoint && knowledgePoint.contentType === "FACT") {
        updatedLessonContent = modifyContent(lessonContentWithEditFlagUnSet, newValues, contentId, KnowledgeType.FACT);
        persistFact(contentId, newValues.fact);
    }
    if (knowledgePoint && knowledgePoint.contentType === "DEFINITION") {
        updatedLessonContent = modifyContent(lessonContentWithEditFlagUnSet, newValues, contentId, KnowledgeType.DEFINITION);
        persistDefinition(contentId, newValues.term, newValues.explanation);
    }
    setCurrentLessonContent(updatedLessonContent);
}

export function updateLessonContentToMakeItNotEditable(lessonContent, currentPage, pageContentId){
    let lessonContentCopy = JSON.parse(JSON.stringify(lessonContent));
    let page = lessonContentCopy.pages.filter(pages => pages.id === currentPage.id);
    let pageContent = page[0].pageContent.filter(pageContent => pageContent.content.id === pageContentId);
    pageContent[0].isEditable = false;
    return lessonContentCopy;
}

class TeacherSavePageContentIcon extends React.Component {

    render() {
        return <i className="fas fa-save mouseOverBecomeArrow"
                  onClick={() => saveAndHideTextBox(this.props.currentLessonContent,
                      this.props.currentPage,
                      this.props.actions.setCurrentLessonContent,
                      this.props.contentId,
                      this.props.newValues
                  )}>
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

export default  connect(mapStateToProps, mapDispatchToProps)(TeacherSavePageContentIcon);