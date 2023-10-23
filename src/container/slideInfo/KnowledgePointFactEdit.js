import React from 'react';
import {bindActionCreators, compose} from "redux";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {setCurrentLessonContent} from "../../redux/actions/lessonContentAction";
import TeacherSavePageContentIcon from "../teacher/TeacherSavePageContentIcon";


class KnowledgePointFactEdit extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            newVal: (this.props.content? this.props.content.fact : ""),
        };

        this.updateLocalState = this.updateLocalState.bind(this);
    }

    updateLocalState(event) {
        this.setState({newVal: event.target.value});
    }

    render() {

        const fact = (this.props.content)? this.props.content.fact : "";
        const elementIdForInput = "factEditBox"+this.props.contentId;

        return <div className="knowledgePoint">
            <TeacherSavePageContentIcon
                contentId={this.props.contentId}
                newValues={{
                    'fact':this.state.newVal
                }}
            />
            <input defaultValue={fact}
                   className="factEditBox"
                   id={elementIdForInput}
                   onChange={(e) => this.updateLocalState(e)}
            />

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
)(KnowledgePointFactEdit);
