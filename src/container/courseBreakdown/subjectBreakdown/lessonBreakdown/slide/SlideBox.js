import React from 'react';
import {bindActionCreators} from "redux";
import KnowledgePointFactReadOnly from "../../../../slideInfo/KnowledgePointFactReadOnly";
import KnowledgePointDefinitionReadOnly from "../../../../slideInfo/KnowledgeDefinitionReadOnly";
import KnowledgePointFactEdit from "../../../../slideInfo/KnowledgePointFactEdit";
import KnowledgePointDefinitionEdit from "../../../../slideInfo/KnowledgeDefinitionEdit";
import {getPageContentFromLessonContent} from "../../../../../utils/findContent";
import {connect} from "react-redux";

import '../../../../../css/SlideStyles.css';

// export function getPageContent(lessonContent, pageNumber){
//     if (lessonContent && lessonContent.pages) {
//         const page = lessonContent.pages.filter(p => p.id === pageNumber);
//         if (page[0] && page[0].pageContent) {
//             return page[0].pageContent
//                 .sort((a, b) => (a.contentNumber > b.contentNumber) ? 1 : -1);
//         }
//     }
// }

export function getSlideKnowledgePoints(pageContent){
    if (pageContent && Array.isArray(pageContent)){
        return pageContent.map(individualContent => {
            return editOrReadOnlyKnowledgePoints(individualContent);
        });
    }
}

export function editOrReadOnlyKnowledgePoints(individualContent){
    if (individualContent.isEditable)
        return chooseKnowledgePointTypeEdit(individualContent.content)
    else
        return chooseKnowledgePointTypeReadOnly(individualContent.content);
}

export function chooseKnowledgePointTypeReadOnly(content){
    if (content && content.contentType === "FACT")
        return <KnowledgePointFactReadOnly key={'content'+content.id} content={content}/>
    else if (content && content.contentType === "DEFINITION")
        return <KnowledgePointDefinitionReadOnly key={'content'+content.id} content={content}/>
    else
        return <span>Unknown Data Type</span>;
}

export function chooseKnowledgePointTypeEdit(content){
    if (content && content.contentType === "FACT")
        return <KnowledgePointFactEdit
            key={'content'+content.id}
            contentId={content.id}
            content={content}
            fact={content.fact}
        />

    else if (content && content.contentType === "DEFINITION")
        return <KnowledgePointDefinitionEdit
            key={'content'+content.id}
            contentId={content.id}
            content={content}
        />
    else
        return <span>Unknown Data Type</span>;
}

class SlideBox extends React.Component {

    render() {
        const pageContent = getPageContentFromLessonContent(this.props.lessonContent, this.props.currentPage.pageNumber);
        const knowledgePoints = getSlideKnowledgePoints(pageContent);
        const slideMessage = (pageContent === undefined || pageContent.length === 0) ? "No content on this slide yet" : "";

        return <div className="slideBox">
            {slideMessage}
            {knowledgePoints}
        </div>
    }
}

const mapStateToProps = state => ({
    lessonContent: state.currentLessonContent,
    slideEditMode: state.slideEditMode,
});

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({

        }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SlideBox);