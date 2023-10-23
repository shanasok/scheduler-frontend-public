import React from 'react';

class SlideNumbers extends React.Component {

    render() {
        return <div className="pageNumbers" >
            Page {this.props.currentPageNumber} of {this.props.totalSlidesForLesson}
        </div>
    }
}

export default SlideNumbers;