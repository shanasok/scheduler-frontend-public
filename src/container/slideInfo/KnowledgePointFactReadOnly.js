import React from 'react';
import TeacherEditPageContentIcon from "../teacher/TeacherEditPageContentIcon";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

class KnowledgePointFactReadOnly extends React.Component {

    render() {
        const bulletPoint = '\u25CF';
        const fact = (this.props.content)? bulletPoint + ' ' + this.props.content.fact : "";
        const contentId = (this.props.content)? this.props.content.id : -1;
        const icons = (this.props.slideEditMode) ?
            <TeacherEditPageContentIcon pageContentId={contentId}/> : "";

        return <div className="knowledgePoint">
            {icons} <strong>{fact}</strong>
        </div>
    }
}

const mapStateToProps = state => ({
    slideEditMode: state.slideEditMode,
});

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({

        }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(KnowledgePointFactReadOnly);