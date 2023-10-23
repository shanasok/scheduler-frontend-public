import React from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import { setEditSlideFalse } from '../../redux/actions/editSlideAction';

export function saveAndCloseSlideEditor(setEditSlideFalseFunction){
    setEditSlideFalseFunction();
}

class TeacherSaveEditsSlideButton extends React.Component {

    render() {
        return <button className="saveEditsButton curvedButton"
                       onClick={() => saveAndCloseSlideEditor(this.props.actions.setEditSlideFalse)}>
            Save Changes</button>
    }
}

const mapStateToProps = state => ({
    slideEditMode: state.slideEditMode,
});

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            setEditSlideFalse
        }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TeacherSaveEditsSlideButton);