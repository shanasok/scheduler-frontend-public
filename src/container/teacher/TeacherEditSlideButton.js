import React from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import { setEditSlideTrue } from '../../redux/actions/editSlideAction';
import "../../css/Buttons.css";

class TeacherEditSlideButton extends React.Component {

    render() {
        return <div>
            <button
                className="curvedButton"
                onClick={this.props.actions.setEditSlideTrue}>Edit Slide</button>
        </div>
    }
}

const mapStateToProps = state => ({
    slideEditMode: state.slideEditMode,
});

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            setEditSlideTrue
        }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TeacherEditSlideButton);