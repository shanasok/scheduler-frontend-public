import React from 'react';

class SubjectSummary extends React.Component {

    render() {
        return <div className="subjectSummary">
            {this.props.summary}
        </div>
    }
}

export default SubjectSummary;