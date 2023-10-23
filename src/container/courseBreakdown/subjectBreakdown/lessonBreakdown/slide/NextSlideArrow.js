import React from 'react';
import {bindActionCreators} from "redux";
import {setCurrentPage} from "../../../../../redux/actions/pageAction";
import {connect} from "react-redux";

class NextSlideArrow extends React.Component {

    constructor(props) {
        super(props);

        this.setCurrentPageNext = this.setCurrentPageNext.bind(this);
    }

    setCurrentPageNext(){
        const lesson = this.props.currentLesson;
        const nextPage = lesson.pages.filter(p => p.pageNumber === this.props.currentPage.pageNumber+1);

        if (nextPage !== undefined && nextPage[0] !== undefined) {
            this.props.actions.setCurrentPage(nextPage[0]);
        }
    }

    render() {
        const currentPageNumber = this.props.currentPage.pageNumber;
        const totalNumberOfPages = this.props.currentLesson.pages.length;
        if (currentPageNumber === totalNumberOfPages)
            return <div className="arrow inactiveRightArrow" />
        else
            return <div className="arrow activeRightArrow" onClick={this.setCurrentPageNext} />
    }
}

const mapStateToProps = state => ({
    currentLesson: state.currentLesson,
    currentPage: state.currentPage,
});

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            setCurrentPage,
        }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NextSlideArrow)