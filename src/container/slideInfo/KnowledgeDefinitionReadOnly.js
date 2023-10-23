import React from 'react';
import TeacherEditPageContentIcon from "../teacher/TeacherEditPageContentIcon";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

class KnowledgePointDefinitionReadOnly extends React.Component {

    render() {
        const term = (this.props.content)? this.props.content.term : "";
        const explanation = (this.props.content)? this.props.content.explanation : "";
        const contentId = (this.props.content)? this.props.content.id : -1;
        const icons = (this.props.slideEditMode) ?
            <TeacherEditPageContentIcon pageContentId={contentId}/> : "";

        return <div>
            {icons} {term} = {explanation}
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

export default connect(mapStateToProps, mapDispatchToProps)(KnowledgePointDefinitionReadOnly);