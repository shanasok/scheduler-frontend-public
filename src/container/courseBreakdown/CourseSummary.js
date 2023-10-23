import React from 'react';

class CourseSummary extends React.Component {

    render() {
        return <div className="courseSummary">
            {this.props.courseSummary}
        </div>
    }
}

export default CourseSummary;