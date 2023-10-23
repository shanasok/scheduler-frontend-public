import React from 'react';
import TeacherEditSlideButton from "../../../../teacher/TeacherEditSlideButton";
import TeacherCancelEditSlideButton from "../../../../teacher/TeacherCancelEditSlideButton";
import TeacherSaveEditsSlideButton from "../../../../teacher/TeacherSaveEditsSlideButton";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {TeacherAddContentButton} from "../../../../teacher/TeacherAddContentButton";

class SlideHeader extends React.Component {

    render() {
        let teacherEditButtons = (this.props.slideEditMode === true) ?
            <div className="lessonHeaderButtons">
                <TeacherCancelEditSlideButton />
                <TeacherSaveEditsSlideButton />
                <TeacherAddContentButton />
            </div> :
            <div className="lessonHeaderButtons" >
                <TeacherEditSlideButton/>
            </div>

        return <div className="lessonHeader" >
            <span className="lessonHeaderTitle">{this.props.slideHeader}</span>
            {teacherEditButtons}
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
export default connect(mapStateToProps, mapDispatchToProps)(SlideHeader);