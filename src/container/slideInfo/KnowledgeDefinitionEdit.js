import React from 'react';
import {bindActionCreators, compose} from "redux";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {setCurrentLessonContent} from "../../redux/actions/lessonContentAction";
import TeacherSavePageContentIcon from "../teacher/TeacherSavePageContentIcon";

class KnowledgePointDefinitionEdit extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            termNewVal: (this.props.content? this.props.content.term : ""),
            explanationNewVal: (this.props.content? this.props.content.explanation : ""),
        };

;       this.updateKnowledgePointDefinitionTermInState = this.updateKnowledgePointDefinitionTermInState.bind(this);
        this.updateKnowledgePointDefinitionExplanationInState = this.updateKnowledgePointDefinitionExplanationInState.bind(this);
    }

    updateKnowledgePointDefinitionTermInState(event) {
        this.setState({termNewVal: event.target.value});
    }

    updateKnowledgePointDefinitionExplanationInState(event) {
        this.setState({explanationNewVal: event.target.value});
    }

    render() {
        const term = (this.props.content)? this.props.content.term : "";
        const explanation = (this.props.content)? this.props.content.explanation : "";

        return <div className="knowledgePoint">
            <TeacherSavePageContentIcon
                contentId={this.props.contentId}
                newValues={{
                    'term':this.state.termNewVal,
                    'explanation':this.state.explanationNewVal,
                }}
            />
            <input defaultValue={term}
                   className="definitionTermEditBox"
                   onChange={(e) => this.updateKnowledgePointDefinitionTermInState(
                       e,
                       this.props.contentId,
                       this.props.currentLessonContent)} /> =
            <input defaultValue={explanation}
                   className="definitionExplanationEditBox"
                   onChange={(e) => this.updateKnowledgePointDefinitionExplanationInState(
                       e,
                       this.props.contentId,
                       this.props.currentLessonContent)} />
        </div>


    }
}

const mapStateToProps = state => ({
    currentLessonContent: state.currentLessonContent,
});

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            setCurrentLessonContent,
        }, dispatch)
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(KnowledgePointDefinitionEdit);
