import React from 'react';
import {bindActionCreators} from "redux";
import {setCurrentPage} from "../../../../../redux/actions/pageAction";
import {connect} from "react-redux";

export function setCurrentPagePrevious(lesson, currentPage, setCurrentPage){
    const previousPage = lesson.pages.filter(
        p => p.pageNumber === currentPage.pageNumber-1);

    if (previousPage !== undefined && previousPage[0] !== undefined)
        setCurrentPage(previousPage[0]);
}

class PreviousSlideArrow extends React.Component {

    render() {
        const currentPageNumber = this.props.currentPage.pageNumber;
        if (currentPageNumber === 1)
            return <div className="arrow inactiveLeftArrow" />
        else
            return <div className="arrow activeLeftArrow"
                        onClick={() => setCurrentPagePrevious(
                            this.props.currentLesson,
                            this.props.currentPage,
                            this.props.actions.setCurrentPage)} />
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

export default connect(mapStateToProps, mapDispatchToProps)(PreviousSlideArrow)